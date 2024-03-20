import React from "react";
import { NewsDisplayItems } from "../../config/AsideNavigationMainConfig";
import { NewsDisplayType } from "../../types/NewsDisplay.type";

type Props = {
  state: number;
};

const NewsDisplay: React.FC<Props> = ({ state }) => {
  const theObjectInArr: NewsDisplayType | undefined = NewsDisplayItems.find(
    (item) => item.id === state
  );

  if (theObjectInArr) {
    return (
      <div className="p-[10px] bg-[#fff] rounded-[15px] shadow-componentshadow">
        {theObjectInArr.content}
      </div>
    );
  } else {
    return "Page not found"; // или другая обработка, если элемент не найден
  }
};

export default NewsDisplay;
