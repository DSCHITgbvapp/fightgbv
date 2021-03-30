import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// import Hamburger from "./HamburgerIcon";

import Logo from "./../asserts/Logo.png";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>

      {/* <Hamburger /> */}
    </div>
  );
}

export default Header;
