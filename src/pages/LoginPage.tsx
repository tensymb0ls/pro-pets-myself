import React from "react";
import "../App.css";
import background from "../images/LogIN_bg.jpg";
import { Logo } from "../components/Logo/Logo";
import FooterLogIn from "../components/FooterlogIn/FooterLogIn";

const LoginPage = () => {
  return (
    <div className="h-lvh flex flex-col justify-between">
      <header className="bg-accentGreen">
        <div className="container mx-auto flex justify-center py-[15px]">
          <Logo />
        </div>
      </header>
      <main
        className="h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        body
      </main>
      <FooterLogIn />
    </div>
  );
};

export default LoginPage;
