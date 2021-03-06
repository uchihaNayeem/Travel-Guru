import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from "../../App"
import { useHistory, useLocation } from 'react-router-dom';
import '../Login/Login.css'

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  
  
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      
      
      
      const {displayName, email} = result.user;
      const signedInUser = {name: displayName, email}
      setLoggedInUser(signedInUser);
      history.replace(from);

      console.log(signedInUser);

      
    }).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      
      var email = error.email;
      
      var credential = error.credential;
      
    });
  }
  return (
    <div style={{textAlign: 'center'}}>
      
      <br/>

      <form action="" className='form-style'>
      <h2>login</h2>
        <input type="email" name="email" placeholder="Enter You Email"/>
        <br/>
        <br/>
        <input type="password" name="password" placeholder="Enter You Password"/>
        <br/>
        <br/>

        <button className='signIn-button'>Submit</button>
        
        <br/>
        <br/>

      </form>
      <br/>

      <button className='google-button' onClick={handleGoogleSignIn} >Google SignIn</button>
      <br/>
      <button className='google-button' >Facebook SignIn</button>

    </div>
  );
};

export default Login;