import React from 'react'
import Sidebar from '../components/Sidebar'
import { ChartCleansing } from '../components/ChartCleansing'

const CleansingDashboard = () => {
    return (
        <div className='bg-gradient py-10 lg:p-32 text-white font-sora'>
            <Sidebar link="dashboard" />
            <h1 className='text-2xl md:text-7xl p-2 border-b-2 border-white'>PLATFORM CLEANSING</h1>
            <div className='text-xl p-2'>
                <ol className='my-10'>

                    <div className='md:grid md:grid-cols-2 space-y-12 md:space-y-0'>
                        <div className='mb-4'>
                            <p className="text-3xl">1. BTS working of our Model
                            </p>
                            <div className='flex flex-col space-y-2 my-4'>
                                <input className='rounded-md  text-black' placeholder='Enter Dataset-Optional' name='keyword' type="file" />
                                <button className='bg-blue-500 p-1 w-[30%]  rounded-md ' name='submit' type='submit'> Generate Results </button>
                            </div>
                            <img src="../images/cleansing/HS.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-3xl ml-10 font-bold'>
                                Results
                            </h1>
                            <div className=''>
                                <ChartCleansing />
                            </div>
                            <h3 className='my-8 text-3xl font-bold'>
                                Conclusion
                            </h3>
                            <p className='text-lg'>
                                The following content has content that may affect the users.
                            </p>

                        </div>

                    </div>
                </ol>
            </div>

        </div>
    )
}

export default CleansingDashboard