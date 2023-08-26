import React from 'react'
import Sidebar from '../components/Sidebar'
import Chart from 'chart.js/auto';
import { ChartSentiment } from '../components/ChartSentiment';
export const SentimentDashboard = () => {

    return (
        <div className='bg-gradient py-10 lg:p-32 text-white font-sora'>
            <Sidebar link="dashboard" />
            <h1 className='text-2xl md:text-7xl p-2 border-b-2 border-white'>SENTIMENT-ANALYSIS</h1>
            <div className='text-xl p-2'>
                <ol className='my-10'>
                    <li className='my-4 '>
                        <div className='flex flex-col md:grid md:grid-cols-2'>
                            <div className='md:border-r-2'>
                                <p className='text-2xl'>1. Extraction of Keywords from Social Media Videos and Posts</p>

                                <div className='my-10 flex gap-4'>
                                    <input className='rounded-md p-2 text-black' placeholder='Enter Keyword' name='keyword' type="text" />
                                    <button className='bg-blue-500 p-2 rounded-md' name='submit' type='submit'> Generate Results </button>
                                </div>
                                <div className='my-20 flex gap-12'>
                                    <input className='rounded-md w-1/3 text-black' placeholder='Enter Dataset-Optional' name='keyword' type="file" />
                                    <button className='bg-blue-500  rounded-md p-2' name='submit' type='submit'> Generate Results </button>
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h1 className='text-2xl my-4'>Results</h1>
                                <ul>
                                    <li>
                                        <p> a. OCR Reuslts for Image Content</p>
                                        <div className='w-full my-2'>
                                            <img src="../images/sentiment/OCR.png" alt="" />
                                        </div>
                                    </li>

                                </ul>


                            </div>
                        </div>
                    </li>
                    <li className='my-4 '>
                        <div className='flex flex-col '>
                            <div className=''>
                                <p className='text-2xl'>2. Sentimental Context of Keywords and their Frequency</p>
                            </div>
                            <div className='items-center flex  mt-10'>
                                <div class="text-black grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">


                                    <div class="flex items-center p-4 bg-white rounded">
                                        <div class="flex  items-center justify-center bg-green-200 h-16 w-32 rounded">
                                            <svg class="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="flex-grow flex flex-col my-auto ml-4">
                                            <span class="text-xl font-bold">10,000</span>
                                            <div class="flex items-center justify-between">
                                                <span class="text-gray-500 my-auto">More social media appearances in 30 days</span>
                                                <span class="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="flex items-center p-4 bg-white rounded">
                                        <div class="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
                                            <svg class="w-6 h-6 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="flex-grow flex flex-col ml-4">
                                            <span class="text-xl font-bold">211</span>
                                            <div class="flex items-center justify-between">
                                                <span class="text-gray-500">Less Negative Comments</span>
                                                <span class="text-red-500 text-sm font-semibold ml-2">-8.1%</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="flex items-center p-4 bg-white rounded">
                                        <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                                            <svg class="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="flex-grow flex flex-col ml-4">
                                            <span class="text-xl font-bold">14000</span>
                                            <div class="flex items-center justify-between">
                                                <span class="text-gray-500">Youtube Mentions</span>
                                                <span class="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
                                            </div>
                                        </div>
                                    </div>



                                </div> </div> </div>
                    </li>
                    <li className="my-4">
                        <div className='my-10'>
                            <p className='text-2xl'>3. Graphical representation of Context </p>
                        </div>
                        <div className='my-10'>
                            <ChartSentiment />
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}
