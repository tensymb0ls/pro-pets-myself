import React from 'react';

const NewsNavBarButton = (props) => {
    const { id, title, icon: Icon, state, setState } = props
    return (
        <button onClick={() => setState(id)} className={`${state === id ? 'bg-accent text-[#fff] active' : 'bg-[#fff]'} grow basis-[20%] flex items-center justify-center gap-[4px] rounded-[5px] p-[8px] hover:bg-accent hover:text-white nav`}>
            <Icon color={state === id ? '#000000' : '#ffffff'} /> <span className='max-w-[90%] truncate'>{title}</span>
        </button>
    );
};

export default NewsNavBarButton;