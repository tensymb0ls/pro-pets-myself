import React, { useEffect, useRef } from "react";
import UserPhoto from "../../images/Dorothy.jpg";
import { useState } from "react";
import PostVideoIcon from "../icons/post/PostVideoIcon";
import PostImageIcon from "../icons/post/PostImageIcon";
import PostPhotoIcon from "../icons/post/PostPhotoIcon";
import PostLinkIcon from "../icons/post/PostLinkIcon";
import PostIconWrapper from "../PostIconWrapper/PostIconWrapper";

const NewsAddPost: React.FC = () => {
  const placeholder = "What’s on your mind, Dorothy?";
  const [text, setText] = useState<string>(placeholder);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const contentElement = document.querySelector("#content");
  const handleSendClick = async () => {
    const currDate = new Date();
    const date = `${currDate.getFullYear()}.${(currDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${currDate
      .getDate()
      .toString()
      .padStart(2, "0")}, ${currDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currDate.getMinutes().toString().padStart(2, "0")}`;
    const author = "Dorothy Kovalsky Parker"; // ! temporary hardcode
    const content = contentElement ? contentElement.textContent : "";
    const data = {
      date,
      author,
      content,
    };

    try {
      fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setText(placeholder);
      contentElement ? (contentElement.innerHTML = "") : "";
    } catch (error) {
      console.log(error);
    }
  };

  // autoheight for textarea
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col gap-[15px] p-[15px] bg-[#fff] rounded-[15px] shadow-componentshadow">
      <div className="flex gap-[10px] items-center">
        <div
          style={{ backgroundImage: `url(${UserPhoto})` }}
          className="h-[40px] w-[40px] rounded-full relative bg-center bg-cover bg-no-repeat"
        ></div>
        <textarea
          onChange={handleChange}
          style={{ height: Math.min(300, text.split("\n").length * 20) + "px" }}
          name="content"
          id="content"
          placeholder={text.trim() ? text.trim() : placeholder}
          onInput={(e) => setText(e.currentTarget.innerText)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setText(text.trim() ? text.trim() : placeholder);
          }}
          suppressContentEditableWarning={true}
          required
          className="bg-colorExtraLightGray w-full min-h-[40px] overflow-y-hidden resize-none rounded-[10px] p-[8px] text-colorTextLightGray hover:bg-colorLightGray hover:cursor-pointer focus:hover:bg-white focus:bg-white focus:cursor-auto focus:outline-colorExtraLightGray focus:text-colorTextBlack"
        ></textarea>
      </div>
      {text.trim() !== placeholder || isFocused ? (
        <div className="flex gap-[10px] items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <PostIconWrapper>
              <PostVideoIcon />
            </PostIconWrapper>
            <PostIconWrapper>
              <PostImageIcon />
            </PostIconWrapper>
            <PostIconWrapper>
              <PostPhotoIcon />
            </PostIconWrapper>
            <PostIconWrapper>
              <PostLinkIcon />
            </PostIconWrapper>
          </div>
          <button
            className="bg-accent py-[12px] border border-accent px-[15px] rounded-[10px] text-[#fff]  gap-[10px] whitespace-nowrap hover:bg-opacity-90"
            onClick={handleSendClick}
          >
            Publish
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NewsAddPost;
