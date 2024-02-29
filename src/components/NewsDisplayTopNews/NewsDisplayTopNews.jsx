import React from 'react';
import NewsDisplayHeader from '../NewsDisplayHeader/NewsDisplayHeader';
import Placeholder from '../../images/videoplaceholder.png'
import NewsDisplayPostStats from '../NewsDisplayPostStats/NewsDisplayPostStats';

const NewsDisplayTopNews = () => {
    return (
        <section className='flex flex-col gap-[15px]'>
            <NewsDisplayHeader />
            <article className='flex flex-col gap-[15px]'>
                <p>
                    Mysterious Communication: Cats use a complex system of vocalizations, body language, and scent marking to communicate with each other and with humans. They can purr, meow, hiss, growl, and even trill to convey their needs and emotions.
                </p>
                <img src={Placeholder} alt="video" className='w-[100%]' />
            </article>
            <NewsDisplayPostStats />
        </section>
    );
};

export default NewsDisplayTopNews;