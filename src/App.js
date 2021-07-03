import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./component/Home/Home";
// import Login from "./component/Login/Login";
import NotFound from "./component/NotFound/NotFound";
import Navbar from "./component/Navbar/Navbar";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;