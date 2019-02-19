import React, { Component } from 'react';
import { get } from 'lodash';
import { gqlFetch } from '../../helper';

import productDetailQuery from './query/productDetailQuery';
import './ProductDetail.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // check if this different product from before
    const slug = get(props, "match.params.slug") || "";
    if (slug !== get(state, 'data.slug') || '') {

      if (get(props, 'location.state.productData') || false) {
        return {
          data: props.location.state.productData,
        };
      } else {
        return {
          data: null,
        }
      }
    }

    return null;
  }

  componentDidMount() {
    const { match } = this.props;
    const { data } = this.state;

    // checking if data ready or not 
    if(!data) {
      this.setState({
        loading: true,
      })

      // data not ready, fetching api 
      gqlFetch({
        query: productDetailQuery,
        variables: {
          slug: get(match, 'params.slug') || ''
        }
      }).then(res => {
        this.setState({
          data: res.getSearchDetail,
          loading: false,
        });
      });
    }
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { data, loading } = this.state;

    // checking if still loading get api
    if(loading) {
      return <p>Fetching API..</p>
    }

    // product not found state 
    if(!data && !loading) {
      return <p>Product Not Found.</p>
    }

    return <div className="productDetailWrap">
      <img
        className="productImages"
        alt="yolo"
        src={data.imageUrl}
      />
      <div className="productInfo">
        <h1 className="productName">{data.name}</h1>
        <span className="brandName">{data.brand}</span>
        <span className="productPrice">{`$ ${data.price}`}</span>
      </div>
      <button className="buyButton">Buy</button>
      <br/>
      <button onClick={this.goBack}>Go Back</button> 
    </div>;
  }
}


export default ProductDetail;