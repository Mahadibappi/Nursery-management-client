import Banner from "../../pages/Banner";
import Category from "../../pages/Category";
import ImageGallery from "../../pages/ImageGallery";
import LatestProducts from "../../pages/LatestProducts";

const Header = () => {
  return (
    <div>
      <Banner />
      <Category />
      <LatestProducts />
      <ImageGallery />
    </div>
  );
};

export default Header;
