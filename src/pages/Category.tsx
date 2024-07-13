import { Link } from "react-router-dom";
import { useGetAllCategoryQuery } from "../redux/features/CategoryApi";

const Category = () => {
  const { data } = useGetAllCategoryQuery(undefined);
  if (data?.length > 0 && data[0]?.products.length > 0) {
    const products = data[0].products;
    products.map((product) => console.log(product.image));

    console.log("products=>", products);
  }

  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-center text-2xl font-serif font-semibold p-2 mb-4">
        <h2>Top Categories</h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {data?.map((category) => (
          <div
            key={category._id}
            className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow"
          >
            <div className="relative w-full h-48">
              <img
                src="https://www.thetreecenter.com/c/uploads/2023/05/DandyManColorWheelRhododendron-340x453.webp"
                className="object-cover w-full h-full rounded-t"
                alt="Plan"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <Link to={"/about"}>
                <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-green-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                  {category.name}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
