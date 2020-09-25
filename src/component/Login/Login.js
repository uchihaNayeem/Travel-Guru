import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from "../../App"

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  
  
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      
      
      
      const {displayName, email} = result.user;
      const signedInUser = {name: displayName, email}
      setLoggedInUser(signedInUser)

      console.log(signedInUser);

      
    }).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      
      var email = error.email;
      
      var credential = error.credential;
      
    });
  }
  return (
    <div>
      <h2>login</h2>
      <button onClick={handleGoogleSignIn} >Google SignIn</button>
    </div>
  );
};

export default Login;