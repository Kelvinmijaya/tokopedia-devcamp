import React, { Component, Fragment } from "react";
import { debounce } from "lodash";

import { gqlFetch } from "../../helper";
import { SearchContext } from "../../context/search";
import searchQuery from "./query/searchQuery";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import "./Search.css";

class Search extends Component {
  static contextType = SearchContext;

  constructor(props) {
    super(props);

    this.state = {
      searchWord: props.query
    };
  }

  componentDidMount() {
    const { updateSearch, list, keyword } = this.context;

    // only fetching when list empty
    if (list.length === 0) {
      gqlFetch({
        query: searchQuery,
        variables: {
          page: 1,
          perPage: 10,
          q: keyword
        }
      }).then(res => {
        if (res.getSearch) {
          updateSearch({
            productData: res.getSearch.products,
            keywordData: keyword,
            hasNextPage: res.getSearch.hasNextPage
          });
        }
      });
    }
  }

  // function for load more products
  loadMore = () => {
    const { updateSearch, keyword, page } = this.context;

    gqlFetch({
      query: searchQuery,
      variables: {
        page: page + 1,
        perPage: 10,
        q: keyword
      }
    }).then(res => {
      if (res.getSearch) {
        updateSearch({
          productData: res.getSearch.products,
          keywordData: keyword,
          hasNextPage: res.getSearch.hasNextPage
        });
      }
    });
  }

  // change keyword search
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

  // debounce 500ms for each typing
  debounceSearchQuery = debounce(searchWord => {
    const { updateSearch } = this.context;

    gqlFetch({
      query: searchQuery,
      variables: {
        page: 1,
        perPage: 10,
        q: searchWord
      }
    }).then(res => {
      updateSearch({
        productData: res.getSearch.products,
        keywordData: searchWord,
        hasNextPage: res.getSearch.hasNextPage
      });
    });
  }, 500);

  render() {
    const { list, hasNextPage } = this.context;
    const { searchWord } = this.state;

    return (
      <Fragment>
        <Header changeWord={this.changeWord} searchWord={searchWord} />
        <div className="searchWrapper">
          {list.map((item, index) => (
            <ProductCard
              key={`product-${index}`}
              imageUrl={item.imageUrl}
              id={item.id}
              name={item.name}
              brand={item.brand}
              price={item.price}
              slug={item.slug}
            />
          ))}

          {hasNextPage && <button className="loadmoreButton" onClick={this.loadMore}>Load More</button>}
        </div>
      </Fragment>
    );
  }
}

export default Search;
