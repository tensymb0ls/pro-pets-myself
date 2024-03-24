import React from "react";
import LogInImage from "../../../images/LogIn_image.jpg";
import HeartSearchIcon from "../../icons/logIn/HeartSearchIcon";

const LogIn = () => {
  return (
    <div className="flex max-h-[500px] w-fit lg:w-[740px] h-[500px] shadow-lg absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="flex flex-col h-full bg-white rounded-[10px] w-[285px] p-[15px] z-10 absolute left-0">
        <div className="">
          <HeartSearchIcon />
        </div>
        ываываыва sdfsdf
      </div>
      <div
        className="hidden lg:block lg:w-[470px] h-full absolute z-0 right-0 bg-cover bg-no-repeat bg-center rounded-[10px]"
        style={{ backgroundImage: `url(${LogInImage})` }}
      ></div>
    </div>
  );
};

export default LogIn;
