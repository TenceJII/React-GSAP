import React from "react";
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home";
import Portofolio from "../pages/Portofolio";
const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/Portofolio" element={<Portofolio />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};
export default Routes;
