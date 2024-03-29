import { FC } from "react";
import { useTranslation } from "react-i18next";
import { HeaderButtonsProps } from "../../types/HeaderButtonsProps.interface";

export const ButtonPrimary: FC<HeaderButtonsProps> = ({ icon, text }) => {
  const { t } = useTranslation();
  return (
    <button className="py-[12px] border border-[#fff] px-[15px] rounded-[10px] text-[#fff] bg-accentGreen bg-opacity-60 flex flex-auto w-1/2 items-center justify-center gap-[10px] whitespace-nowrap">
      {icon}
      {t(text)}
    </button>
  );
};
