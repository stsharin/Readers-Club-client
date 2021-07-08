import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./component/Home/Home";
import NotFound from "./component/NotFound/NotFound";
import Navbar from "./component/Navbar/Navbar";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Checkout from "./component/Checkout/Checkout";
import MyOrders from "./component/MyOrders/MyOrders";
import AllBookDetails from "./component/AllBookDetails/AllBookDetails";

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/home">
          <Navbar />
          <Home />
        </Route>

        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>

        <Route path="/login">
          <Navbar />
          <Login />
        </Route>

        <PrivateRoute path="/checkout/:id">
          <Navbar />
          <Checkout />
        </PrivateRoute>
        <PrivateRoute path="/myOrder">
          <Navbar />
          <MyOrders />
        </PrivateRoute>
        <PrivateRoute path="/allBookDetails">
          <AllBookDetails />
        </PrivateRoute>
        <Route path="*">
          <Navbar />
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;