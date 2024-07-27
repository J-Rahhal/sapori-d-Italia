import React from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";

const MobileMenu = ({ onClick, toggle, handleClose }) => {
  return (
    <>
      <CiMenuFries
        className={
          toggle
            ? "xs-mobile:hidden"
            : "xs-mobile:text-2xl text-white font-extrabold mobile:text-3xl sm-tablet:text-4xl"
        }
        onClick={onClick}
      />
      {toggle && (
        <div className="w-full h-5/6 absolute pb-12 right-1 bg-white flex flex-col items-center justify-between sm-tablet:text-2xl">
          <RiCloseLargeFill
            className="xs-mobile:font-extrabold xs-mobile:text-2xl xs-mobile:self-start ml-2 sm-tablet:text-3xl"
            onClick={handleClose}
          />
          <Link to="#">Home</Link>
          <Link to="#">Menu</Link>
          <Link to="#">Our Story</Link>
          <Link to="#">Contact</Link>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
