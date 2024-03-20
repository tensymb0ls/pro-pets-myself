import React, { useState } from "react";
import NewsMoreInfoBtnIcon from "../icons/news/NewsMoreInfoBtnIcon";
import {
  handleMouseEnter,
  handleMouseLeave,
} from "../../utils/functions/mouseHandlers";

const NewsMoreInfoButton: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <button
      onMouseEnter={() => handleMouseEnter(setHover)}
      onMouseLeave={() => handleMouseLeave(setHover)}
      className="flex items-center justify-center gap-[5px] rounded-[6px] bg-white border-[1px] border-accent py-[8px] px-[12px] text-accent hover:text-white hover:bg-accent"
    >
      <NewsMoreInfoBtnIcon color={hover ? "#FFFFFF" : "#FF855F"} /> More Info
    </button>
  );
};

export default NewsMoreInfoButton;
