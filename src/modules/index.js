import { combineReducers } from "redux";
import search from "./Search";
import product from "./Product";

export default combineReducers({
  search,
  product,
});
