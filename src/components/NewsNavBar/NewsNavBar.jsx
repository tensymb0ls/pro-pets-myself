import React from 'react';
import NewsNavBarButton from '../NewsNavBarButton/NewsNavBarButton';
import { NewsNavState } from '../../config/AsideNavigationMainConfig';

const NewsNavBar = ({ state, setState }) => {
    return (
        <div className='flex items-center justify-between gap-[10px] p-[5px] bg-[#fff] rounded-[10px] shadow-componentshadow'>
            {NewsNavState.map((item) => <NewsNavBarButton title={item.title} icon={item.icon} state={state} setState={setState} id={item.id} key={item.id} />)}
        </div>
    );
};

export default NewsNavBar;