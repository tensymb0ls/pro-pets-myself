import React, { FC } from "react";
import { IconColor } from "../../../types/IconColor.interface";

const NewsIFoundPetIcon: FC<IconColor> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_126_5251)">
        <path
          d="M9.76109 14.1083V18.2465C9.76109 18.5336 9.90461 18.7489 10.1438 18.8924C10.383 19.0359 10.6461 19.0359 10.8853 18.8924L17.1046 15.3043C17.3438 15.1608 17.4873 14.9216 17.4873 14.6585V11.4053M17.3677 6.93224L14.6408 5.83191M2.58501 7.19536L5.24016 6.14287M2.39365 12.6013V14.5389C2.39365 14.8259 2.51325 15.0651 2.77637 15.1847L10.1917 18.8924M16.8415 7.004L10.4548 10.7595C10.096 10.9748 9.97637 11.4293 10.1917 11.7881L11.2441 13.606C11.4594 13.9648 11.9139 14.0844 12.2727 13.8691L15.0714 12.2665L18.6834 10.1854C19.0422 9.97012 19.1618 9.51563 18.9465 9.15683L17.8701 7.29105C17.7744 7.09968 17.6069 7.004 17.4156 6.93224C17.2242 6.8844 17.0329 6.90832 16.8415 7.004ZM8.23019 13.6299L9.42621 11.6445C9.52189 11.4771 9.56973 11.2618 9.49797 11.0704C9.45013 10.8791 9.33052 10.7116 9.13916 10.616L3.2787 7.2432C2.91989 7.02792 2.46541 7.17144 2.25013 7.50633L1.10195 9.51563C0.88667 9.87443 1.03019 10.3289 1.36508 10.5442L7.20162 13.917C7.56043 14.1322 8.01491 14.0126 8.23019 13.6538V13.6299Z"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.61313"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.14893 8.67842L7.03398 7.41064"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.61313"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.4925 8.67845L12.5117 7.5542"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.61313"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5311 2.17209C12.2008 1.78937 12.8706 1.40664 13.5404 1C15.4062 11.4292 4.42676 11.6924 6.10117 1C6.77094 1.38272 7.44071 1.76545 8.11048 2.17209C9.25865 2.17209 10.3829 2.17209 11.5311 2.17209Z"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.61313"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.61319 5.61664C8.82457 5.61664 8.99592 5.44529 8.99592 5.23392C8.99592 5.02255 8.82457 4.8512 8.61319 4.8512C8.40182 4.8512 8.23047 5.02255 8.23047 5.23392C8.23047 5.44529 8.40182 5.61664 8.61319 5.61664Z"
          fill={color}
        />
        <path
          d="M11.1962 5.61664C11.4076 5.61664 11.5789 5.44529 11.5789 5.23392C11.5789 5.02255 11.4076 4.8512 11.1962 4.8512C10.9848 4.8512 10.8135 5.02255 10.8135 5.23392C10.8135 5.44529 10.9848 5.61664 11.1962 5.61664Z"
          fill={color}
        />
        <path
          d="M9.83288 7.02787C10.1499 7.02787 10.407 6.82439 10.407 6.57338C10.407 6.32238 10.1499 6.1189 9.83288 6.1189C9.51582 6.1189 9.25879 6.32238 9.25879 6.57338C9.25879 6.82439 9.51582 7.02787 9.83288 7.02787Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_126_5251">
          <rect width="20" height="20" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NewsIFoundPetIcon;
