import React from "react";
import { useGetAllProductsQuery } from "../redux/features/products/ProductApi";
import { Link } from "react-router-dom";

const LatestProducts = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  console.log(products);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-center text-2xl font-serif font-semibold p-2 mb-4">
        <h2>Latest Products </h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {products?.map((product, id) => (
          <Link to={`/details/${product._id}`}>
            <div
              key={id}
              className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow"
            >
              <div key={product.id} className="relative w-full h-48">
                <img
                  src={product.image}
                  className="object-cover w-full h-full rounded-t"
                  alt="Plan"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div>
                  <div className="text-lg font-semibold">{product.title}</div>
                  <div className="mt-1 mb-4 mr-1 text-md  sm:text-2xl">
                    ${product.price}
                  </div>
                  <p className="text-sm text-gray-900 flex items-center mb-2">
                    Rating : <span>{product.rating}</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
