import React, { FC } from "react";
import AsideSettings from "../icons/AsideSettings";

interface AsideHeaderProps {
  userInfo: {
    firstName: string;
    lastName: string;
    photo: JSX.Element;
    role: string;
    isActive: boolean;
  };
}

const AsideHeader: FC<AsideHeaderProps> = ({ userInfo }) => {
  return (
    <div className="flex flex-col">
      <div className="flex relative text-colorTextLightGray h-[34px]">
        <AsideSettings />
        <p className="text-subContentSize my-[10px] ml-[5px]"> My account</p>
      </div>
      <div className="flex gap-[10px] py-[10px]">
        <div
          style={{
            backgroundImage: `url(${userInfo.photo})`,
          }}
          className="h-[40px] w-[40px] rounded-full relative bg-center bg-cover bg-no-repeat"
        >
          <div className="h-[15px] w-[15px] rounded-full bg-accent absolute bottom-0 right-0"></div>
        </div>
        <div>
          <p>
            {userInfo.firstName} {userInfo.lastName}
          </p>
          <p className="text-colorTextLightGray text-subContentSize mt-[5px] text-left">
            {userInfo.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AsideHeader;
