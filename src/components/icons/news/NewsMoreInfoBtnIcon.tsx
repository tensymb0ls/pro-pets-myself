import React, { FC } from "react";
import { IconColor } from "../../../types/IconColor.interface";

const NewsMoreInfoBtnIcon: FC<IconColor> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99991 17.6191C14.2078 17.6191 17.619 14.2079 17.619 10C17.619 5.79215 14.2078 2.38098 9.99991 2.38098C5.79202 2.38098 2.38086 5.79215 2.38086 10C2.38086 14.2079 5.79202 17.6191 9.99991 17.6191Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99974 13.8095V10H9.04736"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.04736 13.8096H10.9521"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99974 8.09531C10.5257 8.09531 10.9521 7.66892 10.9521 7.14293C10.9521 6.61695 10.5257 6.19055 9.99974 6.19055C9.47376 6.19055 9.04736 6.61695 9.04736 7.14293C9.04736 7.66892 9.47376 8.09531 9.99974 8.09531Z"
        fill={color}
      />
    </svg>
  );
};

export default NewsMoreInfoBtnIcon;
