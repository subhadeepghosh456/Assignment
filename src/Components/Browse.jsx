import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../utils/Nav";

const Browse = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Browse;
