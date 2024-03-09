import React from 'react';
import NewsDisplayHeader from '../NewsDisplayHeader/NewsDisplayHeader';
import Image1 from '../../images/1.jpg';
import Image2 from '../../images/2.jpg';
import NewsDisplayPostStats from '../NewsDisplayPostStats/NewsDisplayPostStats';

const NewsDisplayAllNews = () => {
    return (
        <section className='flex flex-col gap-[15px]'>
            <NewsDisplayHeader />
            <article>
                <p>
                    Mysterious Communication: Cats use a complex system of vocalizations, body language, and scent marking to communicate with each other and with humans. They can purr, meow, hiss, growl, and even trill to convey their needs and emotions.
                </p>
                <div className='flex gap-[10px] justify-center mt-[15px]'>
                    <img src={Image1} alt="Image1" className='max-w-[calc(50%-5px)] aspect-square object-cover inline-block rounded-[10px]' />
                    <img src={Image2} alt="Image1" className='max-w-[calc(50%-5px)] aspect-square object-cover inline-block rounded-[10px]' />
                </div>
            </article>
            <NewsDisplayPostStats />
        </section>
    );
};

export default NewsDisplayAllNews;