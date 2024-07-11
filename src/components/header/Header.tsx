import Banner from "../../pages/Banner";
import Category from "../../pages/Category";
import ImageGallery from "../../pages/ImageGallery";
import LatestProducts from "../../pages/LatestProducts";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Category />
      <LatestProducts />
      <ImageGallery />
    </div>
  );
};

export default Header;
