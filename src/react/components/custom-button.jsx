import React from "react";
import "css/components/_custom-button.scss";

export default function CustomButton({ children, ...props }) {
  return (
    <button className='custom-button' {...props}>
      {children}
    </button>
  );
}
