import React, { useState } from 'react';
import NewsIFoundPetIcon from '../icons/news/NewsIFoundPetIcon';

const NewsIFoundPetButton = () => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };
    return (
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className='flex items-center justify-center gap-[5px] rounded-[6px] py-[8px] px-[12px] border-[1px] bg-accent text-white hover:text-accent hover:bg-white  hover: border-accent'>
            <NewsIFoundPetIcon color={hover ? '#FF855F' : '#FFFFFF'} />
            I found this Pet
        </button>
    );
};

export default NewsIFoundPetButton;