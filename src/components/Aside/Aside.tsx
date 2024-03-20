import React, { FC } from "react";
import AsideHeader from "../AsideHeader/AsideHeader";
import AsideBody from "../AsideBody/AsideBody";
import AsideSettingsModal from "../AsideSettingsModal/AsideSettingsModal";
import { UserType } from "../../types/User.type";

interface AsideUserProps {
  user: UserType;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const Aside: FC<AsideUserProps> = ({ user, state, setState }) => {
  return (
    <div className="flex flex-col gap-[10px] p-[10px] m-[10px] rounded-[15px] bg-[#fff] shadow-componentshadow text-colorTextBlack text-contentSize leading-[18px] basis-[240px] grow-0 shrink-0">
      <AsideHeader userInfo={user} />
      <div className="border-b-[1px] border-colorLightGray"></div>
      <AsideBody state={state} setState={setState} />
      <AsideSettingsModal />
    </div>
  );
};

export default Aside;
