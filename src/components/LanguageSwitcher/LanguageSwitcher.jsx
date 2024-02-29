import React, { useState, useEffect } from 'react';
import i18n from 'i18next';

const LanguageSwitcher = () => {

    const [lang, setLang] = useState(() => localStorage.getItem('i18nextLng') || 'en');

    useEffect(() => {
        localStorage.setItem('i18nextLng', lang);
        i18n.changeLanguage(lang);
    }, [lang]);

    const handleChangeLang = (lang) => {
        setLang(lang);
    };

    return (
        <div className='relative flex-1 flex items-center justify-center'>
            < ul className='relative *:cursor-pointer *:text-white *:font-medium h-6 w-12 text-center group *:transition-all text-headingContentSize'>
                <p className='text-contentSize -rotate-90 absolute top-[5px] left-[36px] group-hover:rotate-0 group-hover:left-[40px]'>&#10094;</p>
                <span className='cursor-pointer absolute top-0 left-[8px] underline underline-offset-2 group-hover:opacity-0'> {lang}</span>
                <li onClick={() => handleChangeLang('ru')} className='absolute left-[-8px] top-0 opacity-0 group-hover:opacity-100 group-hover:top-0 hover:underline underline-offset-2'>ru</li>
                <li onClick={() => handleChangeLang('en')} className='absolute left-[-8px] top-0 opacity-0 group-hover:opacity-100 group-hover:top-[25px] hover:underline underline-offset-2'>en</li>
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
