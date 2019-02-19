export default `
  query getProductDetailQuery($slug: String ) {
    getSearchDetail(slug: $slug) {
      id
      name
      slug
      brand
      price
      imageUrl
      codeitem
    }
  }`;
