import React from "react";
import arrow from "../../Assets/arrow.svg";
import { Img } from "./navbarElements";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to="/">
        <Img src={arrow} />
      </Link>
    </>
  );
};

export default Navbar;
