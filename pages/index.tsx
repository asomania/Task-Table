import React from "react";
import Navbar from "./layouts/Navbar";
import Api from "./api/Mockapi";

const index = () => {
  return (
    <>
      <Navbar />
      <Api />
    </>
  );
};

export default index;
