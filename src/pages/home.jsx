import React, { Component } from "react";
import Logo from "../components/logo";
import Signout from "../components/signout";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Logo />
        {currentUser ? <div>Signin</div> : <Signout />}
        This is the home
      </div>
    );
  }
}
