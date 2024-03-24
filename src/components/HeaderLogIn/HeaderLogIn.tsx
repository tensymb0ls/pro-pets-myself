import React from "react";
import { Logo } from "../Logo/Logo";

const HeaderLogIn = () => {
  return (
    <header className="bg-accentGreen">
      <div className="container mx-auto flex justify-center py-[15px]">
        <Logo />
      </div>
    </header>
  );
};

export default HeaderLogIn;
