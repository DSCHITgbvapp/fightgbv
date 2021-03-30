import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// import Hamburger from "./HamburgerIcon";

import Logo from "./../asserts/Logo.png";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuToggler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="Navbar">
      <IconButton className="hamburgerIcon">
        <MenuIcon onClick={menuToggler} />
      </IconButton>
      <div className={toggleMenu ? "SideMenu active" : "SideMenu"}>
        <IconButton className="closeIcon">
          <CloseIcon onClick={menuToggler} />
        </IconButton>
        <ul>
          <Link to="/report">
            <li onClick={menuToggler}>Report A Case</li>
          </Link>
          <Link to="/help">
            <li onClick={menuToggler}>Find Help</li>
          </Link>
          <Link to="/share-story">
            <li onClick={menuToggler}>Survivors Story</li>
          </Link>
          <Link to="/learn-more">
            <li onClick={menuToggler}>Learn More</li>
          </Link>
          <Link to="/statistics">
            <li onClick={menuToggler}>Statistics</li>
          </Link>
          <Link to="/risk">
            <li onClick={menuToggler}>Am I At Risk</li>
          </Link>
        </ul>
      </div>

      <Link to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>
    </div>
  );
}

export default Navbar;
