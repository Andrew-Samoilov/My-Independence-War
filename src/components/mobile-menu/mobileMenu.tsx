"use client"

import React, { useState } from 'react';
// import Logo from "../logo/Logo";
import MainMenu from '../main-menu/MainMenu';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={handleClick}
                className="absolute top-3 right-3 flex flex-col justify-center items-center sm:hidden">
                <span className={`bg-teal-500 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${isOpen ?
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
                </span>
                <span className={`bg-teal-500 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                        'opacity-0' : 'opacity-100'
                    }`} >
                </span>
                <span className={`bg-teal-500 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${isOpen ?
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} >
                </span>
            </button>

            {
                isOpen ? (
                    <div className="fixed top-0 left-0 w-screen h-screen p-8 flex flex-col justify-between items-center bg-white">
                        {/* <div>
                            <Logo
                                textLogo="My Independence War"
                                styleLogo="text-teal-500 font-bold"
                            />

                        </div> */}
                        <hr className="w-2/3 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
                        <MainMenu
                            styleMenuItem="list-none"
                            styleUL="grid grid-rows-2 gap-8"
                            onClickFunction={handleClick}
                        />
                        <hr className="w-2/3 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
                        {/* <span>© 2023</span> */}
                    </div>
                ) : (<></>)
            }

        </>)
}
