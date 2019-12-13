import React from "react";
import "css/_App.scss";
import logo from "assets/white-cd.png";

export default function Logo() {
  return (
    <div className='logo-box'>
      <img src={logo} alt='music-cd' className='logo' />
    </div>
  );
}
