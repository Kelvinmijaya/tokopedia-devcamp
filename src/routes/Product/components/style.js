import styled, { css } from "react-emotion";

export const ProductDetailWrap = styled("div")`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 55px;
`;

export const ProductLabel = styled("div")`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  margin-top: 8px;
`;

export const ProductInfo = styled("div")`
  height: auto;
  display: block;
  position: relative;
  vertical-align: top;
  width: 100%;
  padding: 10px 15px;
`;

export const ProductImages = css`
  width: 100%;
  display: block;
  position: relative;
  borderradius: 4px;
  zindex: 1;
`;

export const ProductName = styled("h1")`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.29;
  position: relative;
  word-break: break-word;
  height: auto;
  color: #000;
  overflow: hidden;
  margin: 10px 0 0;
`;

export const BrandName = styled("span")`
  display: block;
  font-size: 14px;
  font-weight: 300;
  position: relative;
  word-break: break-word;
  height: auto;
  color: #333;
  overflow: hidden;
  margin: 5px 0 20px;
`;

export const ProductPrice = styled("span")`
  font-size: 16px;
  font-weight: 600;
  position: relative;
  color: #000;
`;

export const CenterText = styled("p")`
  display: block;
  width: 100%;
  text-align: center;
  padding-top: 20px;
`;

export const BuyButton = styled("a")`
  display: block;
  position: relative;
  background-color: rgb(255, 87, 34);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px 1px;
  margin: 16px;
  padding: 16px;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  color: white;
`;

export const ProductVariant = styled("div")`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 5px 0;

  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;

    li {
      padding: 0;
      margin: 0;
      display: inline-block;
      position: relative;
      vertical-align: top;
    }
  }
`;
