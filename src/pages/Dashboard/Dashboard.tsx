import Aside from "../../components/Aside/Aside";
import { HeaderDashboard } from "../../components/HeaderDashboard/HeaderDashboard";
import UserIcon from "../../images/Dorothy.jpg";
import Ad from "../../images/Ads.png";
import "../../App.css";
import { Outlet, useOutlet } from "react-router-dom";
import News from "../News";
import { useState } from "react";

export const Dashboard = () => {
  // user data template
  const user = {
    firstName: "Dorothy",
    lastName: "Kovalsky Parker",
    photo: UserIcon,
    role: "Pet Owner",
    isActive: true,
  };
  const outlet = useOutlet();
  const [state, setState] = useState<number>(1);
  return (
    <div>
      <HeaderDashboard />

      <div className=" container m-auto flex xl:justify-between">
        <Aside user={user} state={state} setState={setState} />
        <div className="w-[100%] max-w-[max(65vw,300px)]">
          {outlet || <News />}
        </div>{" "}
        {/* default block for dashboard */}
        <div className="hidden min-[1154px]:block flex-none w-[330px] m-[10px] rounded-[15px] bg-[#fff] shadow-componentshadow text-center">
          Map
          <img src={Ad} alt="Adblock" />
        </div>
      </div>
    </div>
  );
};
