import React from "react";
import MainCard from "./MainCard";
import HeaderLogin from "./HeaderLogin";

function LoginPage() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <HeaderLogin></HeaderLogin>
      <MainCard></MainCard>
    </div>
  );
}

export default LoginPage;
