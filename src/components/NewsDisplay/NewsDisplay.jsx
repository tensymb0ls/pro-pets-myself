import React from 'react';
import { NewsDisplayItems } from '../../config/AsideNavigationMainConfig';


const NewsDisplay = ({ state }) => {
    const theObjectInArr = NewsDisplayItems.find(item => item.id === state);
    return (
        <div className='p-[10px] bg-[#fff] rounded-[10px] shadow-componentshadow'>
            {theObjectInArr.content}
        </div>
    );
};

export default NewsDisplay;