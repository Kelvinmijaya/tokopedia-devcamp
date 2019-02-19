import React from "react";
import { Link } from "react-router-dom";
import { string } from "prop-types";
import './ProductCard.css';

const ProductCard = ({ brand, name, price, slug, imageUrl }) => (
  <div className="cardContainer">
    <Link
      className="cardLink"
      to={{
        pathname: `/p/${slug}`,
        state: { productData: {
          name,
          brand,
          price,
          slug,
          imageUrl,
        }}
      }}
    >
      <img className="cardImage" alt={name} src={imageUrl} />
    </Link>
    <div className="cardInfo">
      <Link
        className="cardLink"
        to={{
          pathname: `/p/${slug}`,
          state: {
            productData: {
              name,
              brand,
              price,
              slug,
              imageUrl,
            }
          }
        }}
      >
        <h1 className="cardName">{name}</h1>
        <span className="brandName">{brand}</span>
      </Link>
      <span className="cardPrice">{`$ ${price}`}</span>
    </div>
  </div>
);

ProductCard.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  brand: string.isRequired,
  price: string.isRequired,
  imageUrl: string.isRequired,
  slug: string.isRequired,
};

export default ProductCard;
