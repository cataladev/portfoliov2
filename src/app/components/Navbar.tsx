'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { TransitionLink } from './TransitionLink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname(); 

    const menuItem = [
        {
            name: 'Home', 
            link: '/',
        },
        {
            name: 'Projects',
            link: '/projects'
        },
        {
            name: 'Experience',
            link: '/experience'
        },
        {
            name: 'Skills',
            link: '/skills'
        },
        {
            name: 'Github',
            link: 'https://github.com/cataladev'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/cataladev/'
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.navbar')) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return(
        <div className='navbar flex justify-between py-6 px-4 items-center h-16 bg-transparent lg:bg-blue-500 text-white shadow-2xl font-mono fixed top-0 left-0 w-full z-50'>  
            <div className='hidden lg:block'> 
                <h1 className='font-mono text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'> Carlos Catala </h1>
            </div>
            <div className='block lg:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                    </svg>
                </button>
            </div>
            <div className={`lg:flex ${isOpen ? 'fixed top-0 left-0 w-48 h-full bg-blue-500 z-40' : 'hidden'} lg:static lg:w-auto lg:h-auto lg:bg-transparent `}>
                <ul className='flex flex-col lg:flex-row lg:static lg:bg-transparent lg:shadow-none lg:p-0 p-4 h-full overflow-y-auto items-center'>
                    {
                    menuItem.map(menu => {
                            const isActive = path === menu.link;
                            return(
                                <li key={menu.link} className='menu-item m-4 sm:m-2 md:m-3 lg:m-4 xl:m-5'>  
                                    <div className={`${isActive ? "underline scale-110 font-bold" : ""} text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:opacity-80 transition-transform duration-200`}>
                                        {menu.name === 'LinkedIn' ? (
                                            <Link href={menu.link} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                                <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} className="invert-0 inline-block align-middle" />
                                            </Link>
                                        ) : menu.name === 'Github' ? (
                                            <Link href={menu.link} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                                <Image src="/github-mark.svg" alt="Github" width={30} height={30} className="invert-0 inline-block align-middle" />
                                            </Link>
                                        ) : (
                                            <TransitionLink href={menu.link} onClick={closeMenu}>
                                                <span className="bg-blue-500 text-white p-1 rounded-full lg:bg-transparent w-full lg:w-auto text-left">{menu.name}</span>
                                            </TransitionLink>
                                        )}
                                    </div>
                                </li>
                            )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;