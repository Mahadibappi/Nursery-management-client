import React from "react";

const LatestProducts = () => {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-center text-2xl font-serif font-semibold p-2 mb-4">
        <h2>Latest Products </h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://www.thetreecenter.com/c/uploads/2024/02/Golden_Gate_Rhododendron_5G_01-copy-340x453.webp"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">Flower</div>
              <p className="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never was so close.
              </p>
              <div className="mt-1 mb-4 mr-1 text-xl  sm:text-2xl">$38</div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://www.thetreecenter.com/c/uploads/2024/02/Golden_Gate_Rhododendron_5G_01-copy-340x453.webp"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">Flower</div>
              <p className="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never was so close.
              </p>
              <div className="mt-1 mb-4 mr-1 text-xl  sm:text-2xl">$38</div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://www.thetreecenter.com/c/uploads/2024/02/Golden_Gate_Rhododendron_5G_01-copy-340x453.webp"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">Flower</div>
              <p className="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never was so close.
              </p>
              <div className="mt-1 mb-4 mr-1 text-xl  sm:text-2xl">$38</div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
