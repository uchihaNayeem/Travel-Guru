import React from 'react';
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
// import Hotel from './component/Hotel/Hotel';


function App() {
  return (
    <div>
      

     <Router>
       <Header></Header>
       <Switch>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route exact path="/login">
         <Login></Login>
         </Route>
         <Route path="*">
            <NoMatch />
          </Route>

       </Switch>
     </Router>

    </div>
  );
}

export default App;
