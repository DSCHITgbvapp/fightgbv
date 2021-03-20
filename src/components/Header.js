import React from "react";
import "./Header.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// import components

function Header() {
  //write javascript here

  return (
    <div className="Header">
      <IconButton>
        <MenuIcon />
      </IconButton>

      <h1 className="logo">CONFIDANT</h1>

      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
}

export default Header;
