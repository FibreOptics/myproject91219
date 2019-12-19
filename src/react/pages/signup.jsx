import React, { Component } from "react";
import { Link } from "react-router-dom";

//Components
import FormInput from "react/components/form-input";
import CustomButton from "react/components/custom-button";

//Firebase
import { createUserProfileDocument, auth } from "firebase/firebase.utils";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      console.log(password, confirmPassword);
      return;
    }
    try {
      const newAuthUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(newAuthUser);
      const { user } = newAuthUser;
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = event => {
    //console.log(event.target);
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className='signup-form'>
          <Link className='goback signup' to='/'>
            &larr;
          </Link>
          <h2>SIGN UP</h2>
          <p>Not already joined? Register now</p>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={this.state.displayName}
              label='Display name'
              onChange={this.handleChange}
              required
            />
            <FormInput
              type='email'
              name='email'
              value={this.state.email}
              label='Email'
              onChange={this.handleChange}
              required
            />
            <FormInput
              type='password'
              name='password'
              value={this.state.password}
              label='Password'
              onChange={this.handleChange}
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={this.state.confirmPassword}
              label='Confirm password'
              onChange={this.handleChange}
              required
            />
            <CustomButton type='submit' onClick={this.handleSubmit}>
              Sign up
            </CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
