import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useEffect } from "react";

// redux
import { useDispatch } from "react-redux";
import {
  getMyDetailsAction,
  getUserDetailsAction,
} from "./redux/reducers/user/user.action";

// PAges

import Home from "./pages/Home.Page";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyDetailsAction());
    // dispatch(getUserDetailsAction());
  }, [localStorage]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
