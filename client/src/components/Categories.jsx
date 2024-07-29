import React, { useState } from "react";

const Categories = ({ category, setCategory }) => {
  const handleCategory = (event) => {
    const myId = event.target.id;
    setCategory(myId);
  };
  return (
    <div className="grid xs-mobile:mx-8 font-bold xs-mobile:grid-cols-3 xs-mobile:text-xs xs-mobile:pb-8 sm-tablet:text-xl md-tablet:mx-16 tablet:text-2xl">
      <div id="main" onClick={handleCategory} className="cursor-pointer">
        Main /{" "}
      </div>
      <div id="pizza" onClick={handleCategory} className="cursor-pointer">
        Pizza /{" "}
      </div>
      <div id="lunch" onClick={handleCategory} className="cursor-pointer">
        Lunch /{" "}
      </div>
      <div id="salads" onClick={handleCategory} className="cursor-pointer">
        Salads /{" "}
      </div>
      <div id="drinks" onClick={handleCategory} className="cursor-pointer">
        Drinks /{" "}
      </div>
      <div id="desserts" onClick={handleCategory} className="cursor-pointer">
        Desserts /{" "}
      </div>
      <div id="appetizers" onClick={handleCategory} className="cursor-pointer">
        Appetizers /{" "}
      </div>
      <div id="bar" onClick={handleCategory} className="cursor-pointer">
        {" "}
        Bar{" "}
      </div>
    </div>
  );
};

export default Categories;
