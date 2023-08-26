import React from 'react'
import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom'
const ServiceName = () => {

    const location = useParams();
    console.log(location);
    return (
        <div className='bg-gradient py-10 h-[500px] md:p-32 text-white font-sora'>
            <Sidebar link="service" />
            <h1 className='text-2xl md:text-7xl p-2 border-b-2 border-white'>{(location.serviceName).toUpperCase()}</h1>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <img src="./images/img1.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ServiceName