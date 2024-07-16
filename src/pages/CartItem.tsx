/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../redux/features/products/ProductApi";
import { useNavigate } from "react-router-dom";

const CartItem = (props: any) => {
  const { data: products } = useGetAllProductsQuery(undefined);
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const findDetail = products.filter(
      (product: any) => product._id === productId
    );

    setDetail(findDetail[0]);
  }, [productId, products]);

  const handleCheckout = () => {
    navigate("/checkout", { state: { item: detail, quantity } });
  };

  return (
    <div className="border border-red-50 rounded-md p-1">
      {detail && (
        <div
          key={detail._id}
          className="flex flex-col transition duration-300 rounded shadow-sm hover:shadow"
        >
          <div className="w-full h-full">
            <img
              src={detail.image}
              className="object-cover w-full h-[150px] rounded-t"
              alt="image"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-5">
            <div className="text-lg font-semibold">Name: {detail.title}</div>
            <div className="mt-1 mb-2 mr-1 text-md sm:text-sm">
              Price: ${detail.price * quantity}
            </div>
            <p className="text-sm mb-2">Height: {detail.height}</p>
            <p className="text-sm mb-2">Quantity: {quantity}</p>
          </div>

          <button
            className="inline-flex items-center justify-center w-full h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            onClick={handleCheckout}
          >
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
