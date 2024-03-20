import React, { useState } from "react";
import {
  handleMouseEnter,
  handleMouseLeave,
} from "../../utils/functions/mouseHandlers";

type Props = {
  id: number;
  title: string;
  icon: React.ComponentType<{ color: string }>;
  state: number;
  setState: (id: number) => void;
};

const NewsNavBarButton: React.FC<Props> = ({
  id,
  title,
  icon: Icon,
  state,
  setState,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <button
      onMouseEnter={() => handleMouseEnter(setHover)}
      onMouseLeave={() => handleMouseLeave(setHover)}
      onClick={() => setState(id)}
      className={`${
        state === id ? "bg-accent text-[#fff] active" : "bg-[#fff]"
      } basis-[20%] flex items-center justify-center gap-[4px] rounded-[5px] p-[8px] hover:bg-accent hover:text-white`}
    >
      <Icon color={hover ? "#FFFFFF" : state === id ? "#ffffff" : "#444"} />{" "}
      <span className="max-w-[90%] truncate">{title}</span>
    </button>
  );
};

export default NewsNavBarButton;
