import React, { useState } from 'react';
import PostLikeIcon from '../icons/post/PostLikeIcon';
import PostCommentIcon from '../icons/post/PostCommentIcon';
import PostRepostIcon from '../icons/post/PostRepostIcon';
import { PostLikes } from '../../config/AsideNavigationMainConfig';

const NewsDisplayPostStats = () => {
    const [state, setState] = useState({ count: 1199, operation: '-' });

    const handleClick = () => {
        setState(prevState => {
            const operation = prevState.operation === '-' ? '+' : '-';
            const count = operation === '+' ? prevState.count + 1 : prevState.count - 1;
            return { count, operation };
        });
    };
    const limiter = 3; // clange this if you need to display more/less last likers
    const lastLikes = limiter > 0 ? PostLikes.slice(-limiter) : [];
    const counter = 12;

    return (
        <div className='h-[28px] flex items-center gap-[16px]'>
            <button onClick={handleClick} className={`${state.operation === '+' ? 'bg-[#FF7171] text-white' : 'bg-colorExtraLightGray'} flex gap-[4px] items-center justify-center rounded-full  text-colorTextLightGray leading-[10px] py-[4px] px-[8px]`}>
                <PostLikeIcon color={state.operation === '+' ? '#ffffff' : '#8A8A8A'} /> <p className='mt-[2px]'>{state.count}</p>
            </button>
            <button className='bg-colorExtraLightGray flex gap-[4px] items-center justify-center rounded-full  text-colorTextLightGray leading-[10px] py-[4px] px-[8px]'>
                <PostCommentIcon /><p className='mt-[2px]'>554</p></button>
            <button className='bg-colorExtraLightGray flex gap-[4px] items-center justify-center rounded-full  text-colorTextLightGray leading-[10px] py-[4px] px-[8px]'>
                <PostRepostIcon /><p className='mt-[2px]'>98</p>
            </button>
            <div className='flex items-center relative text-colorTextLightGray h-[24px]'>
                {lastLikes.map((item, index) => <img src={item.user} key={item.id} className={`rounded-full border-white border-2 aspect-square object-cover w-[24px] pos${(index * 12)}`} />)}
            </div>
            {limiter > 0 ? <p className='text-colorTextLightGray hidden xl:block'>Jasey, Petra and 6 friends Like this post</p> : ''}
        </div>
    );
};

export default NewsDisplayPostStats;
