import React from 'react';
import UserPhoto from '../../images/Dorothy.jpg';
import { useState } from 'react';
import PostVideoIcon from '../icons/post/PostVideoIcon';
import PostImageIcon from '../icons/post/PostImageIcon';
import PostPhotoIcon from '../icons/post/PostPhotoIcon';
import PostLinkIcon from '../icons/post/PostLinkIcon';
import PostIconWrapper from '../PostIconWrapper/PostIconWrapper';

const NewsAddPost = () => {
    const placeholder = 'What’s on your mind, Dorothy?';
    const [text, setText] = useState(placeholder);
    const [isFocused, setIsFocused] = useState(false);


    const handleSendClick = async () => {
        const currDate = new Date();
        const date = `${currDate.getFullYear()}.${(currDate.getMonth() + 1).toString().padStart(2, '0')}.${currDate.getDate().toString().padStart(2, '0')}, ${currDate.getHours().toString().padStart(2, '0')}:${currDate.getMinutes().toString().padStart(2, '0')}`;
        const author = 'Dorothy Kovalsky Parker'; // ! temporary hardcode
        const content = document.querySelector("#content").textContent;
        const data = {
            date,
            author,
            content,
        }

        try {
            fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

        } catch (error) {
            console.log(error);
        }
        setText(placeholder);
        document.querySelector("#content").innerHTML = '';
    };


    return (
        <div className='flex flex-col gap-[15px] p-[15px] bg-[#fff] rounded-[15px] shadow-componentshadow'>
            <div className='flex gap-[10px] items-center'>
                <div style={{ backgroundImage: `url(${UserPhoto})` }}
                    className='h-[40px] w-[40px] rounded-full relative bg-center bg-cover bg-no-repeat' ></div>
                <div contentEditable="true"
                    name='content'
                    id='content'
                    placeholder={text ? text : placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => { setIsFocused(false); setText(text.trim() ? text.trim() : placeholder) }}
                    suppressContentEditableWarning={true}
                    onInput={e => setText(e.currentTarget.innerText)}
                    className='bg-colorExtraLightGray w-[100%] rounded-[10px] p-[8px] text-colorTextLightGray resize-none hover:bg-colorLightGray hover:cursor-pointer focus:hover:bg-white focus:bg-white focus:cursor-auto focus:outline-colorExtraLightGray focus:text-colorTextBlack'>
                </div>
            </div>
            {(text.trim() !== placeholder || isFocused) ?
                <div className='flex gap-[10px] items-center justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <PostIconWrapper><PostVideoIcon /></PostIconWrapper>
                        <PostIconWrapper><PostImageIcon /></PostIconWrapper>
                        <PostIconWrapper><PostPhotoIcon /></PostIconWrapper>
                        <PostIconWrapper><PostLinkIcon /></PostIconWrapper>
                    </div>
                    <button className="bg-accent py-[12px] border border-accent px-[15px] rounded-[10px] text-[#fff]  gap-[10px] whitespace-nowrap hover:bg-opacity-90"
                        onClick={handleSendClick}>
                        Publish
                    </button>
                </div>
                : <></>
            }
        </div>
    );
};

export default NewsAddPost;