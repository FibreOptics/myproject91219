import React from "react";
import { auth } from "firebase/firebase.utils";

export default function Signout() {
  return <div onClick={() => auth.signOut()}>Sign out</div>;
}
