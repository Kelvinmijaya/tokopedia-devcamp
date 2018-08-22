import React, { Component } from "react";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { string, number, arrayOf, object } from "prop-types";

// Assets
import {
  CardContainer,
  CardImages,
  CardName,
  CardPrice,
  CardInfo,
  CardLink,
  BrandName,
  // CardVariant
} from "./style";

// import VariantCard from "./VariantCard";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variantID: get(props, ".variant[0].id") || 0,
      imageUrl: get(props, ".variant[0].imageUrl") || props.imageUrl,
      variantName: get(props, ".variant[0].name") || ""
    };
  }

  changeVariant = variantID => {
    if (this.state.variantID !== variantID) {
      const selected = this.props.variant.filter(item => item.id === variantID);
      if (selected.length > 0) {
        this.setState({
          variantID: selected[0].id || 0,
          imageUrl: selected[0].imageUrl || "",
          variantName: selected[0].name || ""
        });
      }
    }
  };

  render() {
    const { brand, name, price, slug } = this.props;
    const { imageUrl, variantName } = this.state;

    return (
      <CardContainer>
        <Link
          onClick={this.handleProductClick}
          className={CardLink}
          to={`/p/${slug}`}
        >
          <img className={CardImages} alt={name} src={imageUrl} />
        </Link>
        <CardInfo>
          <Link
            onClick={this.handleProductClick}
            data-cy="prodNameLink"
            className={CardLink}
            to={`/p/${slug}`}
          >
            <CardName>{`${name} ${variantName}`}</CardName>
            <BrandName>{brand}</BrandName>
          </Link>
          <CardPrice>{`$ ${price}`}</CardPrice>
        </CardInfo>
      </CardContainer>
    );
  }
}

ProductCard.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  brand: string.isRequired,
  price: string.isRequired,
  imageUrl: string.isRequired,
  codeitem: string.isRequired,
  slug: string.isRequired,
  variant: arrayOf(object).isRequired
};

export default ProductCard;
