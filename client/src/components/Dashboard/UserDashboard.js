import React, { useEffect, useState } from "react";

import DashboardNavbar from "../NavigationBar/DashboardNavbar";
import { useSelector } from "react-redux";
import UserDetails from "./User/UserDetails";

const UserDashboard = () => {
  return (
    <>
      {/* <MenuOptions /> */}
      <DashboardNavbar />
      <div className="flex flex-col gap-2 justify-center items-center">
        <UserDetails />
      </div>
    </>
  );
};

export default UserDashboard;
