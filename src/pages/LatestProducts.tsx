import React from "react";
import { useGetAllProductsQuery } from "../redux/features/products/ProductApi";
import { Link } from "react-router-dom";

const LatestProducts = () => {
  const { data: products } = useGetAllProductsQuery(undefined);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-center text-2xl font-serif font-semibold p-2 mb-4">
        <h2>Products List </h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {products?.map((product) => (
          <Link key={product._id} to={`/details/${product._id}`}>
            <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
              <div className="relative w-full h-48">
                <img
                  src={product.image}
                  className="object-cover w-full h-full rounded-t"
                  alt="Plan"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div className="mb-3">
                  <div className="text-lg mb-3 font-semibold">
                    Name: {product.title}
                  </div>
                  <div className="mt-1 mb-3 mr-1 text-md  sm:text-sm">
                    Price: ${product.price}
                  </div>
                  <p className="text-sm text-gray-900 flex items-center mb-2">
                    Rating : <span>{product.rating}</span>
                  </p>
                </div>
                <button className="inline-flex items-center justify-center w-full h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                  Shop Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
