import { fetchHelper, createConstants, awaitHandling } from "../../helpers";

const PRODUCT = createConstants("@@search/GET_PRODUCT");

const initialState = {
  query: "",
  productRequest: true,
  productError: "",
  product: [],
  total: 0,
  pagination: {
    next: false,
    prev: false,
    current: 1,
    perPage: 10
  }
};

export default (state = initialState, { result, type }) => {
  switch (type) {
    case PRODUCT.request:
      return {
        ...state,
        productRequest: true,
        productError: ""
      };
    case PRODUCT.failed:
      return {
        ...state,
        productRequest: false,
        productError: "Error called API"
      };
    case PRODUCT.success:
      return {
        ...state,
        query: result.query,
        productRequest: false,
        productError: "",
        product: [...state.product, ...result.data],
        total: result.headers.totalData,
        pagination: result.pagination
      };
    case PRODUCT.clear:
      return {
        ...state,
        productRequest: true,
        productError: "",
        product: [],
        total: 0,
        pagination: {
          next: false,
          prev: false,
          current: 1,
          perPage: 10
        }
      };
    default:
      return state;
  }
};

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  mode: "cors"
};

export const getSearchProduct = (
  q,
  page,
  replace = false
) => async dispatch => {
  if (replace) {
    dispatch({
      type: PRODUCT.clear
    });
  } else {
    dispatch({
      type: PRODUCT.request
    });
  }

  const [errorProduct, responseProduct] = await awaitHandling(
    fetchHelper("GET", `/v1/search`, { q, page }, options)
  );

  if (errorProduct) {
    dispatch({
      type: PRODUCT.failed
    });

    return;
  }

  if (responseProduct.data.length > 0) {
    const [errorVariant, responseVariant] = await awaitHandling(
      fetchHelper(
        "GET",
        `/v1/variant`,
        { pid: responseProduct.data.map(product => product.id).join(",") },
        options
      )
    );

    if (errorVariant) {
      dispatch({
        type: PRODUCT.success,
        result: {
          ...responseProduct,
          query: q,
          data: responseProduct.data.map(items => ({
            ...items,
            variant: []
          }))
        }
      });

      return;
    }

    const mutateProduct = responseProduct.data.map(product => {
      const productIDds = product.id;
      const variant = responseVariant.data.filter(variantItem => {
        return variantItem.pid === parseInt(productIDds, 10);
      });

      return { ...product, variant };
    });

    dispatch({
      type: PRODUCT.success,
      result: {
        ...responseProduct,
        query: q,
        data: mutateProduct
      }
    });
    return;
  }

  dispatch({
    type: PRODUCT.success,
    result: {
      ...responseProduct,
      query: q,
      data: responseProduct.data.map(items => ({
        ...items,
        variant: []
      }))
    }
  });
};
