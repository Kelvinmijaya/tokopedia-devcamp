import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { SearchProvider } from '../context/search';
import Search from "./Search";
import ProductDetail from "./ProductDetail";

const routes = () => (
  <SearchProvider>
    <Router>
      <Switch>
        <Route path="/p/:slug" component={ProductDetail} />
        <Route exact path="/" component={Search} />
      </Switch>
    </Router>
  </SearchProvider>
)

export default routes;
