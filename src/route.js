import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import {PrivateRoute} from "./privateRoute/PrivateRoute";

const route = () => {
  return (
        <Routes>
          <Route path="/">
            <Route index element={<PrivateRoute> <Home /></PrivateRoute>} />
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
  );
};

export default route;
