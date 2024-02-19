import React from 'react';
import { AsideNavMain } from '../../config/AsideNavigationMainConfig';
import { Link } from 'react-router-dom';

const AsideBodyMainNav = ({ state, setState }) => {

    return (
        <nav>
            <ul>
                {AsideNavMain.map((item) => <Link to={item.href} key={item.id} onClick={() => setState(item.id)}>
                    <li className={`${state === item.id ? 'bg-accent ' : ''} flex justify-between py-[10px] px-[15px] mt-[2px] rounded-[10px] hover:bg-accent hover:cursor-pointer nav`}>
                        <div className={`${state === item.id ? 'text-white active' : ''} flex gap-[8px] link`}>{item.icon} {item.title}</div>
                        {item.notification ? <div className={`${state === item.id ? 'bg-white text-accent' : 'bg-accent text-white  notification'} rounded-full  pb-[3px] pt-[4px] px-[7px] leading-[14px] text-subContentSize`}>{item.notification}</div> :
                            <></>}
                    </li></Link>)}
            </ul>
        </nav>
    );
};

export default AsideBodyMainNav;