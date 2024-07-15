import React from "react";
import { useAppSelector } from "../redux/hooks";
import CartItem from "./CartItem";

const Cart = ({ toggleCart }) => {
  const cartData = useAppSelector((state) => state.cart.items);
  if (!cartData) {
    return <div>No Product added</div>;
  }

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={toggleCart}
      ></div>
      <div className="relative w-[330px] bg-gray-900 h-full shadow-xl">
        <button
          onClick={toggleCart}
          className="absolute top-4 right-4 text-white"
        >
          Close
        </button>
        <div className="p-4">
          <h2 className="text-xl text-white font-bold mb-4">Shopping Cart</h2>
          <div className="max-w-md lg:max-w-screen-lg sm:mx-auto">
            <div className="flex flex-col  transition duration-300 text-white ">
              <div className="flex flex-col justify-between flex-grow p-10 text-white  rounded-b">
                {cartData.map((item, key) => (
                  <CartItem key={key} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
