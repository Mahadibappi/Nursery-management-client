import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import Cart from "../../pages/Cart";
import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const cart = useAppSelector((state) => state.cart.items);
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [cart]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              TreeCare
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/product"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Product
              </Link>
            </li>
            <li className="font-medium cursor-pointer tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
              Features
            </li>
            <li className="font-medium tracking-wide cursor-pointer text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
              Pricing
            </li>
            <li>
              <Link
                to="/about"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </Link>
            </li>
          </ul>
          <ul className="flex items-center justify-center hidden space-x-8 lg:flex">
            <li>
              <div className="relative w-full max-w-xs mx-auto  mt-2">
                <input
                  type="text"
                  placeholder="Search products"
                  className="w-full py-2 pl-4 pr-8 text-md border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <FaSearch size={18} className="text-green-500" />
                </button>
              </div>
            </li>
            <li>
              <div className="relative w-full max-w-xs mx-auto  mt-1 ml-6">
                <button
                  onClick={toggleCart}
                  className="absolute inset-y-0 right-0 flex items-center pr-1 "
                >
                  <FaCartPlus size={30} className="text-green-500 ml-6 mt-3" />
                  <span
                    className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
                      w-5 h-5 rounded-full flex justify-center items-center"
                  >
                    {totalQuantity}
                  </span>
                </button>
              </div>
            </li>
            {isCartOpen && <Cart toggleCart={toggleCart} />}
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          TreeCare
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/product"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/about"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
