import React from "react";
import "../App.css";
import background from "../images/LogIN_bg.jpg";
import FooterLogIn from "../components/FooterlogIn/FooterLogIn";
import HeaderLogIn from "../components/HeaderLogIn/HeaderLogIn";
import LogIn from "../components/LogIn/LogIn/LogIn";

const LoginPage = () => {
  return (
    <div className="h-lvh flex flex-col justify-between">
      <HeaderLogIn />
      <main
        className="h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative h-full">
          <LogIn />
        </div>
      </main>
      <FooterLogIn />
    </div>
  );
};

export default LoginPage;
