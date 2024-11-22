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
        <div className = 'flex justify-between p-4 items-center h-12 bg-blue-500 text-white relative shadow-2xl font-mono'>  
            <div> 
                <h1 className = 'font-mono text-xl'> Carlos Catala </h1> {/* Add spinny stuff or something, maybe replace for a picture.*/}
            </div>
            <div>
                <ul className = 'flex '>
                    {
                    menuItem.map(menu => {
                            const isActive = path === menu.link;
                            return(<li key = {menu.link}> 
                            <Link href = {menu.link} className = {isActive?"m-2":"m-2  to-blue-900 "}>{menu.name}</Link> 
                            </li>
                    )})
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar;