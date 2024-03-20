import { Dispatch, SetStateAction } from "react";

export const handleMouseEnter = (
  setHover: Dispatch<SetStateAction<boolean>>
) => {
  setHover(true);
};

export const handleMouseLeave = (
  setHover: Dispatch<SetStateAction<boolean>>
) => {
  setHover(false);
};
