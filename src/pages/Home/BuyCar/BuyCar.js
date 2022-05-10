import React from "react";
import { FaStepForward } from "react-icons/fa";
import CallIcon from "../../../components/svg/Call";
import GetIcon from "../../../components/svg/Get";
import MoneyIcon from "../../../components/svg/Money";
import SelectIcon from "../../../components/svg/Select";

const BuyCar = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-10 py-14">
        <h2 className="text-3xl font-bold py-4 mb-4">
          How to buy your car with Hummer?
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:shadow-xl shadow-2xl py-6 rounded bg-white">
          <div className="p-5 lg:border-r-2 lg:border-b-2 border-b-2">
            <div className="flex items-center lg:justify-start justify-center py-4">
              <FaStepForward className="text-red-700 mr-2"></FaStepForward>
              <h4 className="text-xl font-bold text-red-700">Step 1</h4>
            </div>
            <div className="pb-4 flex lg:justify-start justify-center">
              <SelectIcon classname="w-20"></SelectIcon>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold my-4">Choose Your Car</h3>
              <p className="text-base text-neutral-600">
                We have compiled recommended information that you want to know
                to buy your car.
              </p>
            </div>
          </div>
          <div className="p-5 lg:border-r-2 lg:border-b-2 border-b-2">
            <div className="flex items-center lg:justify-start justify-center py-4">
              <FaStepForward className="text-red-700 mr-2"></FaStepForward>
              <h4 className="text-xl font-bold text-red-700">Step 2</h4>
            </div>
            <div className="pb-4 flex lg:justify-start justify-center">
              <CallIcon classname="w-20"></CallIcon>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold my-4">Contact Seller</h3>
              <p className="text-base text-neutral-600">
                After you've selected a car, we arrange a viewing to seller
                location or one of our points.
              </p>
            </div>
          </div>
          <div className="p-5 lg:border-r-2 lg:border-b-2 border-b-2">
            <div className="flex items-center lg:justify-start justify-center py-4">
              <FaStepForward className="text-red-700 mr-2"></FaStepForward>
              <h4 className="text-xl font-bold text-red-700">Step 3</h4>
            </div>
            <div className="pb-4 flex lg:justify-start justify-center">
              <MoneyIcon classname="w-20"></MoneyIcon>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold my-4">
                Financing & Registration
              </h3>
              <p className="text-base text-neutral-600">
                We deal with the paper work to avail your financing and
                registration in 24 hours
              </p>
            </div>
          </div>
          <div className="p-5 ">
            <div className="flex items-center lg:justify-start justify-center py-4">
              <FaStepForward className="text-red-700 mr-2"></FaStepForward>
              <h4 className="text-xl font-bold text-red-700">Step 4</h4>
            </div>
            <div className="pb-4 flex lg:justify-start justify-center">
              <GetIcon classname="w-20"></GetIcon>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold my-4">Get Your Car</h3>
              <p className="text-base text-neutral-600">
                Embrace the joy of Car Ownership without any of the hassle!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyCar;
