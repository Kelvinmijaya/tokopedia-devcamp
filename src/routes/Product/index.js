import Loadable from "react-loadable";

const Product = Loadable({
  loader: () => import("./components/View"),
  loading: () => null
});

export default Product;
