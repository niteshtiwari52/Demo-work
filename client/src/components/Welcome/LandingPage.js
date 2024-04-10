import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavigationBar/Navbar";

const LandingPage = () => {
  const naviagte = useNavigate();

  return (
    <>
      <Navbar />
      <div class="flex justify-center items-center h-screen">
        <div class="w-full mx-auto">
          <h1 className="text-center font-medium text-lg">
            Welcome to the demo Tutorial
          </h1>
          <p className="text-center">
            Click on Register button and Register and check demo{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
