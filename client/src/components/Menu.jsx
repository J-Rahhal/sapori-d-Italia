import React, { useEffect, useState } from "react";
import Portions from "../components/Portions";
import Categories from "../components/Categories";
import Pasta from "../assets/images/pasta.jpg";
import PizzaImg from "../assets/images/pizza.jpg";
import LunchImg from "../assets/images/lunch.jpg";
import SaladImg from "../assets/images/salad.jpg";
import DrinksImg from "../assets/images/drink.jpg";
import DessertImg from "../assets/images/dessert.jpg";
import AppetizerImg from "../assets/images/appetizer.jpg";
import BarImg from "../assets/images/bar.jpg";
import { Main } from "../data/Menu.js";
import { Pizza } from "../data/Menu.js";
import { Lunch } from "../data/Menu.js";
import { Salads } from "../data/Menu.js";
import { Drinks } from "../data/Menu.js";
import { Desserts } from "../data/Menu.js";
import { Appetizers } from "../data/Menu.js";
import { Bar } from "../data/Menu.js";

const Menu = () => {
  const [selectCategory, setSelectCategory] = useState("main");

  const switchPortions = () => {
    switch (selectCategory) {
      case "main":
        return <Portions img={Pasta} itemList={Main} />;
      case "pizza":
        return <Portions img={PizzaImg} itemList={Pizza} />;
      case "lunch":
        return <Portions img={LunchImg} itemList={Lunch} />;
      case "salads":
        return <Portions img={SaladImg} itemList={Salads} />;
      case "drinks":
        return <Portions img={DrinksImg} itemList={Drinks} />;
      case "desserts":
        return <Portions img={DessertImg} itemList={Desserts} />;
      case "appetizers":
        return <Portions img={AppetizerImg} itemList={Appetizers} />;
      case "bar":
        return <Portions img={BarImg} itemList={Bar} />;
      default:
        return <Portions img={Pasta} itemList={Main} />;
    }
  };

  return (
    <div className="px-4">
      <h2 className="font-vujahday pb-12 xs-mobile:text-4xl mobile:text-5xl sm-tablet:text-7xl tablet:text-9xl ">
        Menu
      </h2>
      <Categories category={selectCategory} setCategory={setSelectCategory} />
      <div className="flex  pb-4 xs-mobile:flex-col xs-mobile:gap-8 md-tablet:flex-row md-tablet:gap-12 md-tablet:pt-12">
        {switchPortions()}
      </div>
    </div>
  );
};

export default Menu;
