'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
    const path = usePathname(); 

    useEffect(() => {
        // Prevent scrolling on the body
        document.body.style.overflow = 'hidden';
        return () => {
            // Re-enable scrolling when the component is unmounted
            document.body.style.overflow = 'auto';
        };
    }, []);

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

    return(
        <div className='flex justify-between p-4 items-center h-12 bg-blue-500 text-white shadow-2xl font-mono fixed top-0 left-0 w-full z-50'>  
            <div> 
                <h1 className='font-mono text-xl'> Carlos Catala </h1> {/* Add spinny stuff or something, maybe replace for a picture.*/}
            </div>
            <div>
                <ul className='flex '>
                    {
                    menuItem.map(menu => {
                            const isActive = path === menu.link;
                            return(
                                <li key={menu.link}> 
                                    <Link href={menu.link} className={isActive ? "m-3" : "m-3"} target={menu.name === 'LinkedIn' || menu.name === 'Github' ? "_blank" : "_self"} rel={menu.name === 'LinkedIn' || menu.name === 'Github' ? "noopener noreferrer" : undefined}>
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
            </div>
        </div>
    )
}

export default Navbar;