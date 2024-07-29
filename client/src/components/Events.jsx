import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LiveMusic from "../assets/images/livemusic.jpg";
import Fundraising from "../assets/images/fundraiser.jpg";
import Corporate from "../assets/images/corpevent.jpg";
import Seasonal from "../assets/images/seasonal.jpg";

const Events = () => {
  return (
    <div className="font-playwrite" id="events">
      <h2 className="font-vujahday text-3xl font-bold xs-mobile:mx-4 xs-mobile:my-12 md-tablet:text-7xl">
        Events
      </h2>
      <p className="font-sans w-3/4 mx-auto text-sm pb-12 md-tablet:text-xl laptop:w-1/2 laptop:text-2xl ">
        {" "}
        Immerse yourself in the{" "}
        <span className="font-playwrite">heart of Italy</span> as our talented
        chefs craft a delectable menu highlighting{" "}
        <span className="font-playwrite">seasonal ingredients</span>. Enjoy live
        <span className="font-playwrite">
          music, wine pairings, and the warm hospitality
        </span>{" "}
        that defines our restaurant.
      </p>

      <div className="tablet:w-3/4 tablet:mx-auto">
        <Carousel autoPlay infiniteLoop centerMode showThumbs={false}>
          <div>
            <img src={LiveMusic} />
            <p className="legend">Live Music Performances</p>
          </div>
          <div>
            <img src={Fundraising} />
            <p className="legend">Fundraising Events</p>
          </div>
          <div>
            <img src={Corporate} />
            <p className="legend">Corporate And Private Events</p>
          </div>
          <div>
            <img src={Seasonal} />
            <p className="legend">Seasonal Thematic Events</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Events;
