import React, { Component } from 'react';

import './ProductDetail.css';

class ProductDetail extends Component {
  render() {
    return <div className="productDetailWrap">
      <img
        className="productImages"
        alt="yolo"
        src="https://peaceful-eyrie-66543.herokuapp.com/static/0.jpg"
      />
      <div className="productInfo">
        <h1 className="productName">Handmade Wooden Chicken</h1>
        <span className="brandName">Mertz LLC</span>
        <span className="productPrice">{`$ 243.00`}</span>
      </div>
      <button className="buyButton">Buy</button>
      <br/>
      <button>Go Back</button> 
    </div>;
  }
}


export default ProductDetail;