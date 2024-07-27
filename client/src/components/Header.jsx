import React from "react";
import header from "../assets/images/header.jpeg";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-5/6 relative">
      <img src={header} className="h-full w-full" />
      <div className="bg-black absolute inset-0 opacity-60 z-10">
        <div className="flex justify-between xs-mobile:p-4 mobile:p-6">
          <CiMenuFries className="xs-mobile:text-2xl text-white font-extrabold mobile:text-3xl" />
          <h2 className="font-vujahday font-bold xs-mobile:text-2xl mobile:text-3xl text-white">
            Sapori D'Italia
          </h2>
          <Link
            to="#"
            className="font-vujahday text-white xs-mobile:text-xl mobile:text-2xl"
          >
            Events
          </Link>
        </div>
        <div className="h-full">
          <div className="h-1/2 flex items-center justify-center">
            <h1 className=" text-white uppercase font-bold font-vujahday text-2xl">
              Amore Al Primo Morso
            </h1>
          </div>
          <div className="h-1/3 flex items-center justify-center overflow-hidden">
            <p className=" text-white  font-vujahday text-xl underline underline-offset-4">
              scroll to expolore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
