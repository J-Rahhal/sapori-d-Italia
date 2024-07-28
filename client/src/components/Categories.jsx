import React, { useState } from "react";

const Categories = ({ category, setCategory }) => {
  const handleCategory = (event) => {
    const myId = event.target.id;
    console.log(myId);
    setCategory(myId);
  };
  return (
    <div className="grid xs-mobile:mx-8 font-bold xs-mobile:grid-cols-3 xs-mobile:text-xs xs-mobile:pb-8 sm-tablet:text-xl md-tablet:mx-16 tablet:text-2xl">
      <div id="main" onClick={handleCategory}>
        Main /{" "}
      </div>
      <div id="pizza" onClick={handleCategory}>
        Pizza /{" "}
      </div>
      <div id="lunch" onClick={handleCategory}>
        Lunch /{" "}
      </div>
      <div id="salads" onClick={handleCategory}>
        Salads /{" "}
      </div>
      <div id="drinks" onClick={handleCategory}>
        Drinks /{" "}
      </div>
      <div id="desserts" onClick={handleCategory}>
        Desserts /{" "}
      </div>
      <div id="appetizers" onClick={handleCategory}>
        Appetizers /{" "}
      </div>
      <div id="bar" onClick={handleCategory}>
        {" "}
        Bar{" "}
      </div>
    </div>
  );
};

export default Categories;
