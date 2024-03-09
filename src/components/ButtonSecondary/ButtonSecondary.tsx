import { useTranslation } from "react-i18next";
import { HeaderButtonsProps } from "../../types/HeaderButtonsProps.interface";
import { FC } from "react";

export const ButtonSecondary: FC<HeaderButtonsProps> = ({ icon, text }) => {
  const { t } = useTranslation();
  return (
    <button className="bg-accent py-[12px] border border-accent px-[15px] rounded-[10px] text-[#fff] flex flex-auto w-1/2 items-center justify-center gap-[10px] whitespace-nowrap">
      {icon}
      {t(text)}
    </button>
  );
};
