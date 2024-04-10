import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Layout
import HomeLayout from "../layouts/Homepage.layout";

// component
import UserDashboard from "../components/Dashboard/UserDashboard";
import LandingPage from "../components/Welcome/LandingPage";

import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // data from redux store
  const user = useSelector((globalState) => globalState.user.selfUser);

  useEffect(() => {
    // console.log(user);
    if (user && user.fullname) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [user]);

  return (
    <>
      {isUserLoggedIn ? (
        <>
          <UserDashboard />
        </>
      ) : (
        <>
          <div className="container mx-auto px-4 lg:px-20">
            {/* <Navbar /> */}
            <LandingPage />
          </div>
        </>
      )}
    </>
  );
};

export default HomeLayout(Home);
