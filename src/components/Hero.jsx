import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Hero() {
  return (
    <div className='bg-dis_blurple text-white pb-8 md:pb-0'>
        <div className='p-8 py-10 h-screen md: flex relative'>
            <div className='flex flex-col gap-8 md:max-w-md lg:max-w-none lg:justify-center'>
                <h1 className='font-bold text-4xl'>IMAGINE A PLACE...</h1>
                <h2 className='font-light text-lg tracking-wide lg:max-w-3xl w-full'>
                ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                </h2>
                <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start lg:justify-center sm:items-center gap-8'>
                    <button className='pink-button'>
                        <ArrowDownTrayIcon className='w-6 mr-2'/>
                        Download for Mac
                    </button>
                    <button className='black-button'>
                        Open Discord in your browser
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero