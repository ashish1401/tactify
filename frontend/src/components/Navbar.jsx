import { Link, useLocation, useParams } from 'react-router-dom'
import "../style.css"
import React, { useState } from 'react'

const Navbar = () => {

    return (

        <nav className=" w-full border-b-2 border-white  top-0 left-0  text-white shadow-2xl drop-shadow-sm shadow-purple-950 font-sora bg-gradient">
            <div className="md:p-8 p-4 text-sm my-auto">
                <ul className='flex-row text-xs md:text-sm flex justify-around my-auto '>
                    <li className='my-auto'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='my-auto'>
                        <Link to="/about">About</Link>
                    </li>

                    <li className='my-auto flex  gap-2 font-bold text-3xl'>
                        <div className='w-16'>
                            <img src="./images/rocket.png" alt="" />
                        </div>
                        <div className='my-auto hidden md:block'>
                            TACTIFY
                        </div>
                    </li>

                    <li className='my-auto'>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className='my-auto'>
                        <Link to="/services">Services</Link>
                    </li>
                </ul>


            </div>

        </nav >

    )
}





export default Navbar