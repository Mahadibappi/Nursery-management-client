import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/layout/MainLayout";
import LatestProducts from "../pages/LatestProducts";

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
        path: "details/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
export default router;
