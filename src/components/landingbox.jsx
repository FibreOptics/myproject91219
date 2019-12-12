import React from "react";
import { Link } from "react-router-dom";
import "../css/_App.scss";

export default function landingbox() {
  return (
    <div className='content'>
      <div className='text-heading'>
        <h1>
          <span className='heading'>MUSIKEPT</span>
          <span className='heading-sub'>
            "If music be the food of love, play on."
          </span>
          <span className='heading-sub'>-W. Shakespeare</span>
        </h1>
      </div>
      <div className='button-group'>
        <Link className='link' to='/signin'>
          Sign In
        </Link>
        <Link className='link' to='/signup'>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
