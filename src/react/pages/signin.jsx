import React, { Component } from "react";
import Logo from "react/components/logo";
import CustomButton from "react/components/custom-button";
import { signInWithGoogle } from "firebase/firebase.utils";

import FormInput from "react/components/form-input";
import "css/_App.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    //console.log(event.target);
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <Logo />
        <div className='signin-form'>
          <form onSubmit={this.handleSubmit}>
            <h2>SIGN IN</h2>
            <p>Sign in with your email and password</p>
            <FormInput
              name='email'
              type='email'
              onChange={this.handleChange}
              value={this.state.email}
              label='email'
              autocomplete='username'
            />
            <FormInput
              name='password'
              type='password'
              onChange={this.handleChange}
              value={this.state.password}
              label='password'
              required
              autocomplete='current-password'
            />
            <CustomButton>SignIn</CustomButton>
            <CustomButton onClick={signInWithGoogle}>Google</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
