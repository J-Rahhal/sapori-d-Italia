import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Footer = () => {
  return (
    <div className=" mt-8 py-6 bg-yellow-600 flex xs-mobile:flex-col gap-4 text-center tablet:flex-row tablet:justify-center tablet:items-center tablet:gap-24 tablet:py-14">
      <h2 className="font-vujahday text-7xl text-white laptop:text-9xl">
        Sapori D'Italia
      </h2>
      <div className="underline underline-offset-4 decoration-white py-6 flex flex-col tablet:gap-2 tablet:text-start ">
        <AnchorLink href="#home" className="text-white">
          Home
        </AnchorLink>
        <AnchorLink href="#menu" className="text-white">
          Menu
        </AnchorLink>
        <AnchorLink href="#our-story" className="text-white">
          Our Story
        </AnchorLink>
        <AnchorLink href="#events" className="text-white">
          Events
        </AnchorLink>
      </div>
      <div>
        <p className="text-white">Napoli NA, Italy</p>
        <p className="text-white">+39-999-1234567z</p>
      </div>
    </div>
  );
};

export default Footer;
