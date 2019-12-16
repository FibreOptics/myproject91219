import React from "react";
//import { Redirect } from "react-router-dom";

//Components & CSS
import Logo from "../components/logo";
import CustomButton from "../components/custom-button";
import { auth } from "firebase/firebase.utils";

//Redux
import { connect } from "react-redux";

const Dashboard = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      <Logo />
      <CustomButton onClick={() => auth.signOut()}>Sign out</CustomButton>
      <p>Our Dashboard</p>
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
