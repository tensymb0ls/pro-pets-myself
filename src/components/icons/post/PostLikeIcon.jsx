import React from 'react';

const PostLikeIcon = ({ color }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99968 6.19014C10.4759 3.80919 14.136 3.6598 15.714 5.23776C17.241 6.76481 17.1425 9.36575 15.714 10.952L9.99968 16.6663L4.2854 10.952C2.70744 9.37409 2.70744 6.81571 4.2854 5.23776C5.76155 3.7616 9.52349 3.80919 9.99968 6.19014Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default PostLikeIcon;