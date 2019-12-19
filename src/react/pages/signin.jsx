import React, { Component } from "react";

import CustomButton from "react/components/custom-button";
import { signInWithGoogle } from "firebase/firebase.utils";

import FormInput from "react/components/form-input";
import "css/_App.scss";
import { Link } from "react-router-dom";

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
        <div className='signin-form'>
          <Link className='goback signin' to='/'>
            &larr;
          </Link>
          <h2>SIGN IN</h2>
          <p>Sign in with your email and password</p>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              onChange={this.handleChange}
              value={this.state.email}
              label='email'
              autoComplete='username'
            />
            <FormInput
              name='password'
              type='password'
              onChange={this.handleChange}
              value={this.state.password}
              label='password'
              required
              autoComplete='current-password'
            />
            <div className='signin-buttonrow'>
              <CustomButton type='submit'>SignIn</CustomButton>
              <CustomButton
                onClick={e => {
                  //e.preventDefault();
                  signInWithGoogle();
                }}
              >
                Google
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
