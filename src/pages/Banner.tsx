import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative h-[500px]">
      <img
        src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?w=1380&t=st=1720586074~exp=1720586674~hmac=4de6d38ef78e039157bc2e6d1b30dd483d5118b8c8bf2db120ca281aedfe8bf6"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className=" relative bg-gray-900 bg-opacity-60 h-[500px]">
        <div className=" relative top-40 text-center ">
          <h2 className=" text-5xl text-slate-300 bg-clip-text  ">
            The best products for your landscape
          </h2>
          <div className="mt-12">
            <a
              href="#_"
              className="relative rounded px-5 py-3 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <Link to={"/shop"}>
                <span className="relative text-xl">Shop Now</span>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
