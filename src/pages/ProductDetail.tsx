import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/features/products/ProductApi";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/CartSlice";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data: products } = useGetAllProductsQuery(undefined);
  const dispatch = useAppDispatch();
  // product check
  const product = products?.find((product) => product._id === id);

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleDecrease = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const hadnleAddtoCart = () => {
    dispatch(
      addToCart({
        productId: product._id,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-center text-2xl font-serif font-semibold p-2 mb-4">
        <h2>{product.title}</h2>
      </div>
      <div className="max-w-md lg:max-w-screen-lg sm:mx-auto">
        <div className="flex lg:flex-row md:flex-col sm:flex-col  transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="w-1/2 h-60 ">
            <img
              src={product.image}
              className="object-cover w-full h-[300px] rounded-t"
              alt={product.title}
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div className="lg:mt-0 sm:mt-10">
              <div className="text-lg font-semibold">
                {" "}
                Name: {product.title}
              </div>
              <div className="mt-1 mb-4 mr-1 text-md sm:text-2xl">
                Price: ${product.price}
              </div>
              <p className="text-sm text-gray-900 flex items-center mb-2">
                Category: {product.category}
              </p>
              <p className="text-sm text-gray-900 flex items-center mb-2">
                Rating: {product.rating}
              </p>

              <p className="text-sm text-gray-900 mb-2">
                Height: {product.height}
              </p>
              <p className="text-sm text-gray-900 mb-2">
                Description: {product.description}
              </p>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2 justify-center items-center">
                <button
                  className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="bg-gray-200 h-full w-10 font-semibold text-xl rounded-xl flex justify-center items-center">
                  {quantity}
                </span>
                <button
                  className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <button
                onClick={hadnleAddtoCart}
                className="inline-flex items-center justify-center w-full h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
