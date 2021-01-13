import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component {

 unsubscribeFromOauth = null;

 componentDidMount() {

  const { setCurrentUser } = this.props;

  this.unsubscribeFromOauth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(userSnap => {
              setCurrentUser({
                  id: userSnap.id,
                  ...userSnap.data()
              }, () => { 
                  console.log(this.state);
              });
          });
      }
      setCurrentUser(userAuth);
    }); 
 }

 componentWillUnmount () {
  this.unsubscribeFromOauth();
 }
 
 render() { 
    return (
      <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route exact path="/signin" component={SignInAndSignUpPage}/>
          </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
