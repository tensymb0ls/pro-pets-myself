import React from 'react';

const NewsAllNewsIcon = ({ color }) => {
    return (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.48805 2.66666H4.44044C3.59886 2.66666 2.91663 3.3489 2.91663 4.19047V11.8095C2.91663 12.6511 3.59886 13.3333 4.44044 13.3333H12.0595C12.9011 13.3333 13.5833 12.6511 13.5833 11.8095V4.19047" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5357 8L8.24995 10.2857L5.96423 8" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.5833 2.66666H10.5357C9.27335 2.66666 8.25 3.69001 8.25 4.95238V10.2857" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default NewsAllNewsIcon;