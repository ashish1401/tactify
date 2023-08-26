import React from 'react'
import Sidebar from '../components/Sidebar'

const VulgarityDashboard = () => {
    return (
        <div className='bg-gradient'>
            <Sidebar link="dashboard" />
            <div className='w-full'>
                <img src="../images/stay-tuned.svg" alt="" />
            </div>

        </div>
    )
}

export default VulgarityDashboard