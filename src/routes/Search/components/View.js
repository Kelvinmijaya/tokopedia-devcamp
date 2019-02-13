import React, { Component } from "react";
import { connect } from "react-redux";
import { func, bool, arrayOf, object, string } from "prop-types";

import { getSearchProduct } from "../../../modules/Search";
import ProductCard from "../../../components/ProductCard";
import { ProductWrap, ProductRow } from "./style";

class SearchView extends Component {
  static propTypes = {
    data: arrayOf(object),
    error: string.isRequired,
    getSearchProduct: func.isRequired,
    loading: bool.isRequired,
    pagination: object.isRequired,
    query: string.isRequired
  };

  static defaultProps = {
    data: []
  };

  componentDidMount() {
    const { query, getSearchProduct, data } = this.props;
    if (data.length === 0) {
      getSearchProduct(query, 1);
    }

  }

  render() {
    return (
      <ProductWrap>
        <ProductRow>
          <ProductCard
            id={0}
            name="Small Snack"
            slug="small-snack"
            brand="chitato"
            price="9.00"
            imageUrl="https://peaceful-eyrie-66543.herokuapp.com/static/0.jpg"
            codeitem="HP440"
            variant={[]}
          />
        </ProductRow>
      </ProductWrap>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  query: search.query,
  loading: search.productRequest,
  data: search.product,
  pagination: search.pagination,
  error: search.productError
});

export default connect(
  mapStateToProps,
  { getSearchProduct }
)(SearchView);
