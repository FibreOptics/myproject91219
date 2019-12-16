import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Components & CSS
import Landing from "react/pages/landing";
import Signin from "react/pages/signin";
import Signup from "react/pages/signup";
import Dashboard from "react/pages/dashboard";
import "css/_App.scss";

//Redux
import { connect } from "react-redux";
import { setCurrentUser } from "redux/actions/user-actions";

//Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.PureComponent {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setCurrentUser(userAuth);
      console.log(userAuth);
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
            render={() =>
              this.props.currentUser ? <Redirect to='/dashboard' /> : <Signin />
            }
          />
          <Route exact path='/signup' component={Signup} />
          <Route
            exact
            path='/dashboard'
            //currentUser={this.state.currentUser}
            component={Dashboard}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  //state is the root reducer
  return {
    currentUser: state.user.currentUser
  };
};
const mapDispatchToProps = dispatch => ({
  //dispatch will pass action object to reducers
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
