import React from "react";

const Cart = ({ toggleCart }) => {
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
            <div className="flex flex-col  transition duration-300 bg-white rounded shadow-sm hover:shadow">
              <div className="w-full h-full ">
                <img
                  src="https://www.thetreecenter.com/c/uploads/2021/01/Sawtooth_Japanese_Aucuba_1-copy-340x453.webp"
                  className="object-cover w-full h-[150px] rounded-t"
                  alt="image"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow p-10 border border-t-0 rounded-b">
                <div>
                  <div className="text-lg font-semibold"> Name:</div>
                  <div className="mt-1 mb-2 mr-1 text-md sm:text-sm">
                    Price:
                  </div>
                  <p className="text-sm text-gray-900 mb-2">Height:</p>
                  <p className="text-sm text-gray-900 mb-2">Quantity:</p>
                </div>
                <button className="inline-flex items-center justify-center w-full h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
