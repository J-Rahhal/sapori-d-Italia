import React from "react";
import header from "../assets/images/header.jpeg";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = ({ handleToggle, toggle, handleClose }) => {
  return (
    <div className="h-5/6 relative" id="home">
      <img src={header} className="h-full w-full object-cover" />
      <div className="bg-black absolute inset-0 opacity-60 z-10">
        <div className="flex justify-between xs-mobile:p-4 mobile:p-6">
          <MobileMenu
            onClick={handleToggle}
            toggle={toggle}
            handleClose={handleClose}
          />
          <h2 className="font-vujahday font-bold xs-mobile:text-2xl mobile:text-3xl text-white sm-tablet:text-4xl">
            Sapori D'Italia
          </h2>
          <Link
            to="#"
            className="font-vujahday text-white xs-mobile:text-xl mobile:text-2xl sm-tablet:text-3xl"
          >
            Events
          </Link>
        </div>

        <div className="h-1/2 flex items-center justify-center">
          <h1 className=" text-white uppercase font-bold font-vujahday text-xl sm-tablet:text-5xl">
            Amore Al Primo Morso
          </h1>
        </div>
        <div className="h-1/3 flex items-center justify-center overflow-hidden">
          <p className=" text-white  font-vujahday text-xl underline underline-offset-4 sm-tablet:text-3xl">
            scroll to explore
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
