import React from "react";
import { Redirect } from "react-router-dom";

//Components & CSS
import Logo from "../components/logo";
import Signout from "../components/signout";

//Redux
import { connect } from "react-redux";

const Dashboard = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      <Logo />
      {/* {currentUser ? <Signout /> : <Redirect to='/' />} */}
      This is the home
    </div>
  );
};

const mapStateToProps = state => {
  //state is the root reducer
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps)(Dashboard);
