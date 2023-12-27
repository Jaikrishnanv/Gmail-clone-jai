import React from "react";
import classes from "./Navbar.module.css";
import glogo from "./Images/gmaillogo.png";
import menu from "./Images/menu.png";
import SearchBar from "./SearchBar/SearchBar";
import IconButton from "./IconButton/IconButton";
import dot from "./Images/dots-menu.png";


import setting from "./Images/settings.png";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.menuBrand}>
        <button>
          <img src={menu} alt="menu" />
        </button>
        <img src={glogo} alt="glogo" />
      </div>
      <SearchBar />
      <div className={classes.list}>
        <IconButton src={setting} alt="setting" />
        <IconButton src={dot} alt="dot" />
      </div>
    </div>
  );
}

export default Navbar;
