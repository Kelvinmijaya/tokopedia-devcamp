import Loadable from "react-loadable";

const Search = Loadable({
  loader: () => import("./components/View"),
  loading: () => null
});

export default Search;
