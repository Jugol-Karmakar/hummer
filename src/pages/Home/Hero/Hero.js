import React from "react";
import heroImage from "../../../images/hero-img.png";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center lg:flex-row items-center px-10 my-10">
      <div className="lg:text-left text-center lg:w-1/2">
        <h2 className="text-5xl font-extrabold drop-shadow my-3">
          <span className="text-5xl font-extrabold drop-shadow text-[#c70909]">
            POWER &
          </span>{" "}
          BEAUTY
        </h2>
        <p className="text-lg text-neutral-600">
          Free Library's $1M auto archives are moving to Philly's world-famous
          car museum and to a Hershey attraction
        </p>

        <button className="border my-3 px-8 py-3 rounded font-bold bg-[#c70909] text-white hover:bg-white hover:text-[#a70808] hover:border-[#c70909]">
          Learn More
        </button>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          className="h-full max-w-[550px] object-contain"
          src={heroImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
