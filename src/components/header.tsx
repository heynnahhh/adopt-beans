'use client'

import React, {useState, useEffect, ChangeEvent} from "react";
import Navigation from "./navigation";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

const imgUrl = {
    "logo": "./images/logo-light.png",
    "logoDark": "./images/logo-dark.png"
};

export default function Header(){
    const [darkMode, setDarkMode] = useState(false);
    const [logoSrc, setLogoSrc] = useState(imgUrl.logo);

    useEffect(() => {
        const isDarkOn = document.documentElement.classList.contains('dark');
        const logoUrl = isDarkOn ? imgUrl.logoDark : imgUrl.logo;
       
        setDarkMode(isDarkOn);
        setLogoSrc(logoUrl);
    }, [logoSrc]);

    const toggleDarkMode = ({ target } : ChangeEvent<HTMLInputElement>) => {
        setDarkMode(target.checked);
        
        if(target.checked){
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setLogoSrc(imgUrl.logoDark);
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setLogoSrc(imgUrl.logo);
        }
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8">
                <div className="">
                    <Link href="/About">
                        <img src={logoSrc} alt="adopt beans logo" />
                    </Link>
                </div>
                <Navigation />
                <ThemeToggle isDarkMode={darkMode} handleToggle={toggleDarkMode} />
            </nav>
        </header>
    )
}