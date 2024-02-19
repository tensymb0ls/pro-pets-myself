import React from 'react';
import AsideHeader from '../AsideHeader/AsideHeader';
import AsideBody from '../AsideBody/AsideBody';
import AsideSettingsModal from '../AsideSettingsModal/AsideSettingsModal';


const Aside = (props) => {
    const { user, state, setState } = props;
    return (
        <div className='flex flex-col gap-[10px] p-[10px] m-[10px] rounded-[15px] bg-[#fff] shadow-componentshadow text-colorTextBlack text-contentSize leading-[18px] basis-[240px] grow-0 shrink-0'>
            <AsideHeader userInfo={user} />
            <div className='border-b-[1px] border-colorLightGray'></div>
            <AsideBody state={state} setState={setState} />
            <AsideSettingsModal />
        </div>
    );
};

export default Aside;