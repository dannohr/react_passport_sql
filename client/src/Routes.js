import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import AppliedRoute from "./components/AppliedRoute";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import AllUsers from "./containers/Users/AllUsers/AllUsers";
import EditUser from "./containers/Users/EditUser/EditUser";
import QBLogin from "./containers/QBLogin/QBLogin";
import QBCustomers from "./containers/QBCustomers/QBCustomers";
import Customer from "./containers/Customer/Customer";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
// import { hasRole, isAllowed } from './util/auth';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />

    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/user/all"
      exact
      component={AllUsers}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/user/:userId"
      exact
      component={EditUser}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/qblogin"
      exact
      component={QBLogin}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/qbcustomers"
      exact
      component={QBCustomers}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/customer"
      exact
      component={Customer}
      props={childProps}
    />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
