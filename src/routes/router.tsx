import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/layout/MainLayout";
import LatestProducts from "../pages/LatestProducts";
import ProductManagement from "../pages/products/ProductManagement";
import CheckOutForm from "../pages/products/CheckOutForm";
import Search from "../pages/products/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <LatestProducts />,
      },
      {
        path: "product",
        element: <ProductManagement />,
      },
      {
        path: "checkout",
        element: <CheckOutForm />,
      },
      {
        path: "search",
        element: <Search />,
      },

      {
        path: "details/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
export default router;
