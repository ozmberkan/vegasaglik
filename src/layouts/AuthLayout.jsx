import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center gap-x-3 h-screen">
      <div className="h-full w-[25%] bg-sky-500"></div>
      <div className="h-full w-[75%] flex justify-center items-center">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default AuthLayout;
