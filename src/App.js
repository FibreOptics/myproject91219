import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Landing from "./pages/landing";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
//import Signout from "./components/signout";
import "./css/_App.scss";

import { auth } from "./firebase/firebase.utils";

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route
            exact
            path='/signin'
            //component={Signin}
            currentUser={this.state.currentUser}
            render={() =>
              this.state.currentUser ? <Redirect to='/' /> : <Signin />
            }
          />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
