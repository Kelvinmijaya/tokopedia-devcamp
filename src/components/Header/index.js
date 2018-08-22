import React, { Component } from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { object } from "prop-types";

import { getSearchProduct } from "../../modules/Search";
import { HeaderWrapper, Logo, SearchBox, SearchSubBox } from "./style";
import logoImage from "./assets/logo.png";

class Header extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      searchWord: props.query
    };
  }

  static propTypes = {
    match: object.isRequired,
    location: object.isRequired,
    history: object.isRequired
  };

  changeWord = e => {
    this.setState(
      {
        searchWord: e.target.value
      },
      () => {
        this.debounceSearchQuery(this.state.searchWord);
      }
    );
  };

  debounceSearchQuery = debounce(searchWord => {
    this.props.getSearchProduct(searchWord, 1, true);
    this.props.history.push("/");
  }, 500);

  render() {
    const { searchWord } = this.state;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo src={logoImage} />
        </Link>
        <SearchBox>
          <SearchSubBox>
            <input
              name="searchBox"
              value={searchWord}
              placeholder="Cari di Tokopedia"
              onChange={this.changeWord}
            />
          </SearchSubBox>
        </SearchBox>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  query: search.query
});

export default withRouter(
  connect(
    mapStateToProps,
    { getSearchProduct }
  )(Header)
);
