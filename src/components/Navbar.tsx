'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path=usePathname(); 
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
        <div className = 'flex justify-between p-3 items-center h-16 bg-white text-black relative shadow-sm font-mono'>  
            <div> 
                <h1 className = 'font-bold text-xl'> Carlos Catala </h1>
            </div>
            <div>
                <ul className = 'flex '>
                    {
                    menuItem.map(menu => {
                            const isActive = path === menu.link;
                            return(<li key = {menu.link}> 
                            <Link href = {menu.link} className = {isActive?"m-2 to-blue-900":"m-2"}>{menu.name}</Link> 
                            </li>
                    )})
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar;