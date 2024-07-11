import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";
import Header from "../header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
