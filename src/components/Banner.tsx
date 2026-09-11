import React from "react";
import Logo from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="flex items-center min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold">
              Build Your Ideal <br />{" "}
              <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-gray-500">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <button className="px-5 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#F97316] to-[#EC4899]">
                Explore Technologies
              </button>
              <button className="px-5 py-2 rounded-lg border border-gray-300">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
