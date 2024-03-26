import React from "react";
import LogInImage from "../../../images/LogIn_image.jpg";
import HeartSearchIcon from "../../icons/logIn/HeartSearchIcon";
import LogInForm from "../LogInForm/LogInForm";
import FacebookLoginIcon from "../../icons/logIn/FacebookLoginIcon";
import GoogleLoginIcon from "../../icons/logIn/GoogleLoginIcon";
import AppleLoginIcon from "../../icons/logIn/AppleLoginIcon";

const LogIn = () => {
  return (
    <div className="flex w-fit lg:w-[740px] h-[max(65%,_430px)] shadow-lg absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="flex flex-col gap-[30px] h-full bg-white rounded-[10px] w-[285px] p-[15px] z-10 absolute left-0">
        <HeartSearchIcon />
        <div>
          <h1 className="text-[27px] font-bold text-center">Welcome Back</h1>
          <p className="text-center text-contentSize">Please enter your data</p>
        </div>
        <LogInForm />
        <span className="relative">
          <hr />
          <p className="bg-white px-[15px] absolute -top-[10px] left-[50%] -translate-x-[50%] text-colorTextLightGray text-contentSize">
            Or
          </p>
        </span>
        <span className="flex gap-[25px] justify-center *:hover:cursor-pointer *:transition-all">
          <span className="rounded-full hover:shadow-md">
            <GoogleLoginIcon />
          </span>
          <span className="rounded-full hover:shadow-md">
            <FacebookLoginIcon />
          </span>
          <span className="rounded-full hover:shadow-md">
            <AppleLoginIcon />
          </span>
        </span>
      </div>
      <div
        className="hidden lg:block lg:w-[470px] h-full absolute z-0 right-0 bg-cover bg-no-repeat bg-center rounded-[10px]"
        style={{ backgroundImage: `url(${LogInImage})` }}
      ></div>
    </div>
  );
};

export default LogIn;
