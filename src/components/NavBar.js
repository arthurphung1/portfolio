import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className='bg-gray-800'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink 
                        to='/' 
                        exact 
                        activeClassName='text-white'
                        className='inline-flex items-center py-6 px-3 mr-4 text-white hover:text-red-500 text-4xl font-bold tracking-widest'
                    >
                        Arthur
                    </NavLink>
                    <NavLink 
                        to='/project' 
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-red-500'
                        activeClassName='text-white bg-gray-600'
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to='/about' 
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-red-500'
                        activeClassName='text-white bg-gray-600'
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url='https://www.linkedin.com/in/arthur-phung/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                    <SocialIcon url='https://github.com/arthurphung' className='mr-4' target='_blank' bgColor='#000000' fgColor='#fff' style={{ height: 35, width: 35 }} />
                    <SocialIcon url='mailto:arthurkphung@gmail.com' network='email' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}
