import React from "react";
import Landingbox from "../components/landingbox";
import Logo from "../components/logo";
import Signout from "../components/signout";

export default function Landing() {
  return (
    <div>
      <Logo />
      <Signout />
      <Landingbox />
    </div>
  );
}
