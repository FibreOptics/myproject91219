import React, { Component } from "react";
import Logo from "react/components/logo";
import CustomButton from "react/components/custom-button";
import { signInWithGoogle } from "firebase/firebase.utils";

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

        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <input
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
            label='email'
          />
          <label
            name='password'
            type='password'
            onChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          >
            password
          </label>
          <input />

          <CustomButton type='submit'>SignIn</CustomButton>
        </form>
        <CustomButton onClick={signInWithGoogle}>GoogleSignIn</CustomButton>
      </div>
    );
  }
}

export default SignIn;
