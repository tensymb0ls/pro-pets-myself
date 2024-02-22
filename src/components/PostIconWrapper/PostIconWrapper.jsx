import React from 'react';

const PostIconWrapper = ({ children }) => {
    return (
        <div className='flex items-center justify-center hover:cursor-pointer hover:bg-colorExtraLightGray h-[30px] w-[30px] rounded-[8px]'>
            {children}
        </div>
    );
};

export default PostIconWrapper;