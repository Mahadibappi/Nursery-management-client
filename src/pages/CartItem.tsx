/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../redux/features/products/ProductApi";

const CartItem = (props: any) => {
  const { data: products } = useGetAllProductsQuery(undefined);
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState<any>(null);

  useEffect(() => {
    const findDetail = products.filter(
      (product: any) => product._id === productId
    );

    setDetail(findDetail);
  }, [productId]);

  return (
    <div>
      {detail?.map((item: any) => (
        <div className="flex flex-col  transition duration-300  rounded shadow-sm hover:shadow">
          <div className="w-full h-full ">
            <img
              src={item.image}
              className="object-cover w-full h-[150px] rounded-t"
              alt="image"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-10 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold"> Name:{item.title}</div>
              <div className="mt-1 mb-2 mr-1 text-md sm:text-sm">
                Price: ${item.price * quantity}
              </div>
              <p className="text-sm text-gray-900 mb-2">
                Height: {item.height}
              </p>
              <p className="text-sm text-gray-900 mb-2">Quantity: {quantity}</p>
            </div>
          </div>
          <button className="inline-flex items-center justify-center w-full h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            Check Out
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
