/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */
import React from "react";
import Home from "./Home";
import "./App.css";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Header from "./Header"

const promise = loadStripe('pk_test_51NDPsySE2IDDGCniHFFPY1kJihzrJh2rs7mhi80DOePEk5ak2jVeWV2WcyeqPfSnt1s6wekoEgVBNro6GBMR4O3t00YnVCk2vp');

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        //the user just logged in OR the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
    <div className="app">
        <Routes>
        <Route exact path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<><Header /><Checkout /></>}></Route>
            <Route path="/payment" element={<Elements stripe={promise}><Header /><Payment /></Elements>}></Route>  
            <Route path="/orders" element={<><Header /> <Orders /></>}></Route>       
          <Route exact path="/" element={<><Header /> <Home /></>}></Route>
         </Routes>
    </div>
    </Router>
  );
}

export default App;
