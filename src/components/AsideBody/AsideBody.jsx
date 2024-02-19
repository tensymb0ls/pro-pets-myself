import React from 'react';
import AsideBodyMainNav from '../AsideBodyMainNav/AsideBodyMainNav';
import AsideBodyAnimalServ from '../AsideBodyAnimalServ/AsideBodyAnimalServ';

const AsideBody = ({ state, setState }) => {
    return (
        <section className='flex flex-col'>
            <p className='text-colorTextLightGray text-subContentSize py-[10px] pl-[5px] text-left'>Main</p>
            <AsideBodyMainNav state={state} setState={setState} />
            <p className='text-colorTextLightGray text-subContentSize py-[10px] pl-[5px] text-left'>Animal Services</p>
            <AsideBodyAnimalServ state={state} setState={setState} />
        </section>
    );
};

export default AsideBody;