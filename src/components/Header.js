import React from "react";
import "./Header.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { IconButton } from "@material-ui/core";

// import components

function Header() {
  //write javascript here

  return (
    <div className="Header">
      <h1 className="logo">GBV APP</h1>

      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
}

export default Header;
