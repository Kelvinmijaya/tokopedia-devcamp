import styled, { css } from "react-emotion";

export const CardContainer = styled("div")`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
`;

export const CardLabel = styled("div")`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  margin-top: 8px;
`;

export const CardInfo = styled("div")`
  height: auto;
  display: block;
  position: relative;
  vertical-align: top;
  width: 100%;
  padding-right: 0;
`;

export const CardImages = css`
  width: 100%;
  display: block;
  position: relative;
  borderradius: 4px;
  zindex: 1;
`;

export const CardLink = css`
  width: 100%;
  display: block;
  position: relative;
`;

export const CardLinkList = css`
  width: 100px;
  display: inline-block;
  position: relative;
  vertical-align: top;
  float: left;
`;

export const CardName = styled("h1")`
  font-size: 14px;
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
  font-size: 12px;
  font-weight: 300;
  position: relative;
  word-break: break-word;
  height: auto;
  color: #333;
  overflow: hidden;
  margin: 5px 0 10px;
`;

export const CardPrice = styled("span")`
  font-size: 14px;
  font-weight: 600;
  position: relative;
  color: #000;
`;

export const CardVariant = styled("div")`
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

export const VariantBubble = styled("a")`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 5px;
  display: inline-block;
  position: relative;
  vertical-align: top;
  border: 1px solid #${props => props.active ? '000' : 'fff' }
`;
