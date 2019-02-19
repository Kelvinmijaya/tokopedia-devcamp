import React from 'react';
import { node } from 'prop-types';

const SearchContext = React.createContext();

class SearchProvider extends React.Component {
  static propTypes = {
    children: node.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      keyword: '',
      page: 0,
      updateSearch: this.handleUpdateSearch,
      hasNextPage: false,
    };
  }

  handleUpdateSearch = ({ productData, keywordData, hasNextPage }) => {
    const { keyword, list, page } = this.state;

    if (keywordData !== keyword) {
      this.setState({
        keyword: keywordData,
        list: productData,
        page: 1,
        hasNextPage,
      });
    } else {
      this.setState({ 
        list: [...list, ...productData],
        page: page + 1,
        hasNextPage,
      });
    }
  };

  render() {
    const { children } = this.props;

    return <SearchContext.Provider value={this.state}>{children}</SearchContext.Provider>;
  }
}

const SearchConsumer = SearchContext.Consumer;

export { SearchContext, SearchProvider, SearchConsumer };