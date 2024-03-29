import React, { useState } from "react";
import NewsDisplayHeader from "../NewsDisplayHeader/NewsDisplayHeader";
import NewsDisplayPostStats from "../NewsDisplayPostStats/NewsDisplayPostStats";
import LostCat from "../../images/lostcat.jfif";
import NewsLocationIcon from "../icons/news/NewsLocationIcon";
import NewsMoreInfoButton from "../NewsMoreInfoButton/NewsMoreInfoButton";
import NewsIFoundPetButton from "../NewsIFoundPetButton/NewsIFoundPetButton";

const NewsDisplayLostFound: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <section className="flex flex-col gap-[15px]">
      <NewsDisplayHeader />
      <article className="flex flex-col xl:flex-row min-h-[300px] rounded-[10px] bg-colorExtraLightGray">
        {expand ? (
          <div className="fixed z-[10000] top-0 left-0 bottom-0 right-0 bg-white/85 flex items-center justify-center">
            <img src={LostCat} onClick={() => handleExpand()} />
          </div>
        ) : (
          <div
            style={{ backgroundImage: `url(${LostCat})` }}
            className="flex-[0_0_40%] min-h-[300px] bg-cover bg-no-repeat bg-center rounded-tl-[10px] rounded-tr-[10px] xl:rounded-tr-none xl:rounded-bl-[10px] hover:cursor-pointer"
            onClick={() => handleExpand()}
          ></div>
        )}
        <div className="flex-[2_1_60%] flex flex-col gap-[15px] p-[15px]">
          <div>
            <h2 className="font-bold text-[27px] leading-[34px] ">
              Murzik, Male, 2 years old
            </h2>
            <span className="flex items-center gap-[5px]">
              <NewsLocationIcon />
              <p className="text-colorTextLightGray leading-[18px] text-contentSize">
                Bd. Moscovei 11, Chisinau, Moldova
              </p>
            </span>
          </div>
          <p>
            Murzik went missing in the vicinity of our home at (street, house
            number, city) on the evening of (date and time) and has not returned
            since. He was wearing a collar with a tag containing our contact
            information. Murzik is quite curious and may have gotten lost while
            exploring garages, entrances, or other enclosed ...
          </p>
          <div className="flex gap-[10px] justify-end mt-[15px]">
            <NewsMoreInfoButton /> <NewsIFoundPetButton />
          </div>
        </div>
      </article>
      <NewsDisplayPostStats />
    </section>
  );
};

export default NewsDisplayLostFound;
