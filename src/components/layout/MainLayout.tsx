import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";
import NavBar from "../header/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
