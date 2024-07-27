import React, { useState } from "react";
import Header from "../components/Header.jsx";

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
    </>
  );
};

export default Homepage;
