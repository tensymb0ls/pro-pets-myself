import React, { useEffect, useState } from "react";
import NewsDisplayPostStats from "../NewsDisplayPostStats/NewsDisplayPostStats";
import NewsMoreInfoButton from "../NewsMoreInfoButton/NewsMoreInfoButton";
import NewsIFoundPetButton from "../NewsIFoundPetButton/NewsIFoundPetButton";
import Placeholder from "../../images/videoplaceholder.png";
import LostCat from "../../images/lostcat.jfif";
import NewsLocationIcon from "../icons/news/NewsLocationIcon";
import NewsDisplayHeader from "../NewsDisplayHeader/NewsDisplayHeader";
import { useDispatch } from "react-redux";
import { getPosts } from "../../store/features/posts/postsService";

const InitialObject = {
  date: "",
  author: "",
  content: "",
  picture: "",
  _id: "",
  __v: 0,
};

const NewsDisplayUpdates = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };

  const [posts, setPosts] = useState([InitialObject]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((responce) => responce.json())
      .then((responce) => setPosts(responce));
  }, []);

  // redux
  const dispatch = useDispatch();
  dispatch(getPosts);

  return (
    <section className="flex flex-col gap-[35px]">
      <div className="flex flex-col gap-[15px]">
        <NewsDisplayHeader />
        <article className="flex flex-col gap-[15px]">
          <p>
            Mysterious Communication: Cats use a complex system of
            vocalizations, body language, and scent marking to communicate with
            each other and with humans. They can purr, meow, hiss, growl, and
            even trill to convey their needs and emotions.
          </p>
          <img src={Placeholder} alt="video" className="w-[100%]" />
        </article>
        <NewsDisplayPostStats />
      </div>
      <div className="flex flex-col gap-[15px]">
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
              number, city) on the evening of (date and time) and has not
              returned since. He was wearing a collar with a tag containing our
              contact information. Murzik is quite curious and may have gotten
              lost while exploring garages, entrances, or other enclosed ...
            </p>
            <div className="flex gap-[10px] justify-end mt-[15px]">
              <NewsMoreInfoButton /> <NewsIFoundPetButton />
            </div>
          </div>
        </article>
        <NewsDisplayPostStats />
      </div>
      <div>
        {posts.map((item) => (
          <div key={item._id}>
            <p>{item._id}</p>
            <p>{item.date}</p>
            <p>{item.author}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsDisplayUpdates;
