import React from 'react'
import Sidebar from '../components/Sidebar'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Service = () => {
    return (
        <div className='bg-gradient'>
            <Sidebar link="service" />
            {/* {OUR SERVICES} */}
            <div className='text-white'>
                <h1 className='font-sora  text-center font-extrabold text-5xl py-12'>
                    OUR SERVICES
                </h1>
                <div className='lg:grid lg:grid-cols-2 md:w-3/4 justify-center mx-auto space-y-4 md:space-y-0 md:gap-4  p-6 text-white '>
                    <div className='  bg-black p-4 rounded-xl grad-border'>
                        <div className='w-full'>
                            <img src="./images/img1.svg" alt="" className='w-full' />
                        </div>
                        <p className='font-bold text-xl my-8 tracking-tight'>
                            NSFW  content detection employs advanced and machine learning to identify explicit, offensive, or inappropriate material in images, videos, and text.
                        </p>
                        <ul className='text-center h-auto'>
                            <li>Analyzes visual and textual content.</li>
                            <li >
                                <AiOutlineArrowDown className='text-center mx-auto' />
                            </li>
                            <li>
                                Offers customization for sensitivity.
                            </li>
                            <li>
                                <AiOutlineArrowDown className='text-center mx-auto' />
                            </li>
                            <li>
                                Enables real-time detection through APIs.
                            </li>
                        </ul>
                        <div className='mx-auto text-center my-10'>
                            <button className='bg-white border-2 border-[#0D2CDC]  font-pop p-4  font-extrabold bg-opacity-10 rounded-3xl'>
                                <Link to={`/service/platform-cleansing`}>Learn More</Link>
                            </button>
                        </div>

                    </div>
                    <div className=' bg-opacity-10 bg-black p-4 rounded-xl grad-border'>
                        <div className='w-full'>
                            <img src="./images/img2.svg" alt="" className='w-full' />
                        </div>
                        <p className='font-bold text-xl my-8 tracking-tight'>
                            Sentiment analysis  reveals emotions in text by identifying positive, negative, or neutral tones. It's used for understanding public opinion, customer feedback, and trends.
                        </p>
                        <ul className='text-center h-auto'>
                            <li>Automated emotion detection.</li>
                            <li >
                                <AiOutlineArrowDown className='text-center mx-auto' />
                            </li>
                            <li>
                                Considers context and language nuances.
                            </li>
                            <li>
                                <AiOutlineArrowDown className='text-center mx-auto' />
                            </li>
                            <li>
                                Scales for real-time analysis.
                            </li>
                            <li>
                                <AiOutlineArrowDown className='text-center mx-auto' />
                            </li>
                            <li>
                                Business insights, customer experience enhancement, trend spotting.
                            </li>
                            <li>
                                <AiOutlineArrowDown className='text-center mx-auto' />
                            </li>
                            <li>
                                Challenges include context, subjectivity, and multilingual nuances.
                            </li>

                        </ul>
                        <div className='mx-auto text-center my-10'>
                            <button className='bg-white border-2 border-[#0D2CDC]  font-pop p-4  font-extrabold bg-opacity-10 rounded-3xl'>
                                <Link to={`/service/vulgarity-protection`}>Learn More</Link>
                            </button>
                        </div>

                    </div>

                    <div className='self-end  bg-opacity-10 bg-black p-4 rounded-xl grad-border'>
                        <div className='w-full'>
                            <img src="./images/img3.svg" alt="" className='w-full' />
                        </div>
                        <p className='text-xl font-bold my-8 tracking-tight'>
                            Hate Speech Analysis employs tech, including ML and NLP, to spot offensive or harmful language in text/speech.  Its main goal is to differentiate hate speech from legitimate content for online safety.
                        </p>
                        <ul className='text-center h-auto'>
                            <li>Hate speech analysis algorithms meticulously examine language patterns to automatically recognize and categorize instances of hate speech.</li>
                            <li >
                                <AiOutlineArrowDown className='text-center mx-auto' />
                            </li>
                            <li>
                                Modern systems consider the broader context of language, minimizing false positives and accurately identifying harmful content.
                            </li>
                            <li>
                                <AiOutlineArrowDown className='text-center mx-auto' />
                            </li>
                            <li>
                                Hate speech analysis can process large volumes of data in real time.
                            </li>
                        </ul>
                        <div className='mx-auto text-center my-10'>
                            <button className='bg-white border-2 border-[#0D2CDC]  font-pop p-4  font-extrabold bg-opacity-10 rounded-3xl'>
                                <Link to={`/service/sentiment-analysis`}>Learn More</Link>
                            </button>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Service