'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
        <div className='navbar flex justify-between p-4 items-center h-12 bg-transparent lg:bg-blue-500 text-white shadow-2xl font-mono fixed top-0 left-0 w-full z-50'>  
            <div className='hidden lg:block'> 
                <h1 className='font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'> Carlos Catala </h1>
            </div>
            <div className='block lg:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                    </svg>
                </button>
            </div>
            <div className={`lg:flex ${isOpen ? 'fixed top-0 left-0 w-48 h-full bg-blue-500 z-40' : 'hidden'} lg:static lg:w-auto lg:h-auto lg:bg-transparent`}>
                <ul className='flex flex-col lg:flex-row lg:static lg:bg-transparent lg:shadow-none lg:p-0 p-4 h-full overflow-y-auto'>
                    {
                    menuItem.map(menu => {
                            const isActive = path === menu.link;
                            return(
                                <li key={menu.link} className='menu-item m-2 sm:m-3 md:m-4 lg:m-5 xl:m-6'> 
                                    <Link href={menu.link} className={isActive ? "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" : "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"} target={menu.name === 'LinkedIn' || menu.name === 'Github' ? "_blank" : "_self"} rel={menu.name === 'LinkedIn' || menu.name === 'Github' ? "noopener noreferrer" : undefined} onClick={closeMenu}>
                                        {menu.name === 'LinkedIn' ? (
                                            <Image src="/linkedin.svg" alt="LinkedIn" width={25} height={25} className="inline-block" />
                                        ) : menu.name === 'Github' ? (
                                            <Image src="/github-mark.svg" alt="Github" width={25} height={25} className="inline-block" />
                                        ) : (
                                            menu.name
                                        )}
                                    </Link>
                                </li>
                            )
                    })}
                </ul>
                <div className='flex lg:hidden justify-center mt-4'>
                    <Link href="https://github.com/cataladev" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                        <Image src="/github-mark.svg" alt="Github" width={25} height={25} className="inline-block mx-2" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/cataladev/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                        <Image src="/linkedin.svg" alt="LinkedIn" width={25} height={25} className="inline-block mx-2" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
