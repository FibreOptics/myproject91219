import React from "react";
import { auth } from "firebase";

export default function Signout() {
  return <div onClick={() => auth.signout()}>Sign out</div>;
}
