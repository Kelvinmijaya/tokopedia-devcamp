import React from "react";
import { Link } from "react-router-dom";
import { string, func } from "prop-types";

import logoImage from "./assets/logo.png";
import "./Header.css";

const Header = ({ searchWord, changeWord }) => (
  <div className="headerWrapper">
    <Link to="/">
      <img className="headerLogo" alt="logo" src={logoImage} />
    </Link>
    <div className="searchBoxWrapper">
      <div className="searchSubBox">
        <input
          name="searchBox"
          value={searchWord}
          placeholder="Cari di Tokopedia"
          onChange={changeWord}
        />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  searchWord: string,
  changeWord: func,
}

Header.defaultProps = {
  searchWord: '',
  changeWord: () => {},
}

export default Header;
