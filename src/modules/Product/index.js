import { fetchHelper, createConstants, awaitHandling } from "../../helpers";

const GETPRODUCT = createConstants("@@product/GET_PRODUCT");

const initialState = {
  productRequest: true,
  productError: "",
  data: null
};

export default (state = initialState, { result, type }) => {
  switch (type) {
    case GETPRODUCT.request:
      return {
        ...state,
        productRequest: true,
        productError: ""
      };
    case GETPRODUCT.failed:
      return {
        ...state,
        productRequest: false,
        productError: "Error called API"
      };
    case GETPRODUCT.success:
      return {
        ...state,
        productRequest: false,
        data: result
      };
    case GETPRODUCT.clear:
      return {
        ...state,
        productRequest: false,
        data: null
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

export const getProductFromSearch = slug => async (dispatch, getState) => {
  const search = getState().search;
  const selected = search.product.filter(prod => prod.slug === slug);
  if (selected.length > 0) {
    dispatch({
      type: GETPRODUCT.success,
      result: selected[0]
    });
    return;
  } else {
    dispatch({
      type: GETPRODUCT.request
    });
    
    const [errorProduct, responseProduct] = await awaitHandling(
      fetchHelper("GET", `/v1/product`, { slug }, options)
    );

    if (errorProduct) {
      dispatch({
        type: GETPRODUCT.failed
      });

      return;
    }

    dispatch({
      type: GETPRODUCT.success,
      result: responseProduct.data
    });
  }
};
