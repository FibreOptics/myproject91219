import React from "react";
import { auth } from "firebase";

export default function Signout() {
  return <div onClick={() => auth.signOut()}>Sign out</div>;
}
