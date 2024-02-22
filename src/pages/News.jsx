import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import NewsNavBar from '../components/NewsNavBar/NewsNavBar';
import NewsDisplay from '../components/NewsDisplay/NewsDisplay';
import NewsAddPost from '../components/NewsAddPost/NewsAddPost';

const News = () => {
    // default block for dashboard
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/dashboard/news');
    }, [])

    const [state, setState] = useState(0)

    return (
        <div className='flex flex-col gap-[15px] m-[10px]  text-colorTextBlack text-contentSize leading-[18px]'>
            <NewsNavBar state={state} setState={setState} />
            <NewsAddPost />
            <NewsDisplay state={state} />
        </div>
    );
};

export default News;