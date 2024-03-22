import React from "react";
import FacebookWhiteIcon from "../icons/socials/FacebookWhiteIcon";
import TwitterWhiteIcon from "../icons/socials/TwitterWhiteIcon";
import InstagramWhiteIcon from "../icons/socials/InstagramWhiteIcon";
import LogoFooter from "../LogoFooter/LogoFooter";

const FooterLogIn = () => {
  return (
    <footer className="bg-accentGreen py-[25px]">
      <div className="container mx-auto flex justify-between text-white text-contentSize">
        <span className="flex gap-[15px] items-center">
          <LogoFooter />
          <p>Copyright © 2023 ProPets Inc.</p>
        </span>
        <span className="flex gap-[30px]">
          <ul className="flex gap-[15px] items-center *:cursor-pointer">
            <li className=" hover:underline">About</li>
            <li className=" hover:underline">Language</li>
            <li className=" hover:underline">For business</li>
            <li className=" hover:underline">Volounteer Organizations</li>
            <li className=" hover:underline">Terms and Conditions</li>
            <li className=" hover:underline">Privacy Policy</li>
          </ul>
          <span className="flex gap-[10px] items-center ">
            <FacebookWhiteIcon />
            <TwitterWhiteIcon />
            <InstagramWhiteIcon />
          </span>
        </span>
      </div>
    </footer>
  );
};

export default FooterLogIn;
