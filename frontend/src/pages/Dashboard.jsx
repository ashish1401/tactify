import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div className='bg-gradient py-10'>
            <Sidebar link="dashboard" />
            <div className='h-[700px] font-sora flex justify-center items-center'>
                <div className='flex flex-col space-y-9'>
                    <div className='w-[500px] mx-auto'>
                        <img src="./images/shh.png" alt="" />
                    </div>
                    <p className='text-5xl text-white mx-auto '>
                        Shh! Data Ahead!
                    </p>
                    <button className='bg-white rounded-xl w-1/2 mx-auto p-4'>
                        <Link to="/profile">Unleash your Organization Now!</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
