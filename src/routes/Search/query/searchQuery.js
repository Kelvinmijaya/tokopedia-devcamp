export default `
  query getSearchQuery($page: Int, $perPage: Int, $q: String ) {
    getSearch(page: $page, perPage: $perPage, q: $q) {
      products {
        id
        name
        brand
        slug
        price
        codeitem
        imageUrl
      }
      hasNextPage
      totalData
    }
  }`;
