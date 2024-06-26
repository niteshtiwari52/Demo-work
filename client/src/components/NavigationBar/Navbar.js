import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  /**
   * Functions
   */
  // Navigating to singin page
  const navigateToSignIn = () => {
    navigate("/auth/signin");
  };
  // Navigating to signup page
  const navigateToSignUp = () => {
    navigate("/auth/signup");
  };
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>

                <h4 className="text-teal-600">Demo</h4>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <div className="flex gap-4 sm:flex sm:gap-4">
                  <button
                    className="rounded-md bg-gray-100 text-teal-600  px-5 py-2.5 text-sm font-medium hover:bg-teal-700 hover:text-white shadow"
                    onClick={navigateToSignIn}
                  >
                    Login
                  </button>

                  <div className=" sm:flex">
                    <button
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600  hover:bg-teal-700 hover:text-white shadow"
                      onClick={navigateToSignUp}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
