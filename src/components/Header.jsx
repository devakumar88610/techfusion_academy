import React from 'react'
import Logo from '../assets/Images/Logo.svg'
import { navLinks } from '../api/data'
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <div className='flex items-center justify-between px-20 bg-white shadow-md h-24 backdrop:blur-md '>
            <div>
                <a href="/">
                    <img className='h-14' src={Logo} alt="Logo" />
                </a>
            </div>
            <div>
                <ul className='flex gap-10 font-semibold'>
                    {navLinks.map((item, index) => {
                        return <li key={index}>
                            <Link className='flex text-primary hover:text-secondary transition-all duration-500' to={item.url}>{item.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
            <div>
                <button className=' bg-primary text-white border-primary px-6 py-2 hover:text-primary hover:bg-secondary transition-all duration-500'>Login</button>
            </div>
        </div>
    )
}

export default header