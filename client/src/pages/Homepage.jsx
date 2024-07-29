import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Intro from "../components/Intro.jsx";
import Menu from "../components/Menu.jsx";
import Story from "../components/Story.jsx";
import Events from "../components/Events.jsx";
import Footer from "../components/Footer.jsx";

const Homepage = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header
        handleToggle={toggleMenu}
        toggle={toggle}
        handleClose={toggleMenu}
      />
      <Intro />
      <Menu />
      <Story />
      <Events />
      <Footer />
    </>
  );
};

export default Homepage;
