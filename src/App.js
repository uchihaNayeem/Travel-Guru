import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import Booking from './component/Booking/Booking';
import Hotel from './component/Hotel/Hotel';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// import Hotel from './component/Hotel/Hotel';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
     <Router>
       <Header></Header>
       <Switch>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route  path="/login">
         <Login></Login>
         </Route>

         <PrivateRoute  path="/hotel">
         <Hotel></Hotel>
         </PrivateRoute>
         
         <Route  path="/booking/:dataId">
         <Booking></Booking>
         </Route>
         <Route path="*">
         <NoMatch />
         </Route>

       </Switch>
     </Router>
     </UserContext.Provider>

    
  );
}

export default App;
