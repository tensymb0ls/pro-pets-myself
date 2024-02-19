import React from 'react';
import UserIcon from '../../images/Cookiekiller.jpg'

const NewsDisplayHeader = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-[10px] '>
                <div className='w-[40px] h-[40px] rounded-full bg-center bg-cover bg-no-repeat' style={{
                    backgroundImage: `url(${UserIcon})`,
                }}></div>
                <div>
                    <p className='text-colorTextBlack text-headingContentSize leading-[23px]'>Cookiekiller.design</p>
                    <p className='text-colorTextLightGray leading-[18px]'>16.11.2023 , 19:28</p>
                </div>
            </div>
            <div className='pl-[5px] pr-[5px] pb-[5px] cursor-pointer tracking-wider text-headingContentSize leading-[14px]'>...</div>
        </div>
    );
};

export default NewsDisplayHeader;