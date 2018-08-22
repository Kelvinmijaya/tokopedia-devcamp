import styled from "react-emotion";
import { injectGlobal } from "emotion";

injectGlobal`
  * {
    font-family: Arial, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.62);
  }

  a {
    text-decoration: none;
  }
`;

export const HeaderWrapper = styled("div")`
  width: 100%;
  height: 55px;
  background-color: #42b549;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Logo = styled("img")`
  width: 40px;
  height: 40px;
  padding: 7.5px;
  display: inline-block;
  vertical-align: middle;
`;

export const SearchBox = styled("div")`
  width: 83%;
  height: 40px;
  padding: 7.5px 7.5px 7.5px 0;
  display: inline-block;
  vertical-align: middle;
`;

export const SearchSubBox = styled("div")`
  width: 100%;
  height: 40px;
  display: block;
  background-color: white;

  input {
    width: 100%;
    height: 40px;
    border: none;
    box-shadow: none;
    padding: 0 0 0 20px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.62);

    &:focus {
      outline: none;
    }
  }
`;
