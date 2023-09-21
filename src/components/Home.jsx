import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import ServerIcon from './ServerIcon';
import { PlusIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Channel from './Channel';
import { addDoc, collection } from 'firebase/firestore'

function Home() {
    const [user] = useAuthState(auth)
    const handleAddChannel = () => {
        const channelName = prompt("Enter your channel name")
        try {
                if (channelName) {
                    const docRef = addDoc(collection(db, "channels"), {
                        channelName: channelName,
                    });
                }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }



  return (
    <>
        {!user && <Redirect to="/"/>}
        <div className='flex h-screen'>
            <div className='flex flex-col space-y-3 bg-dis_grey p-3 min-w-max'>
                <div className='server-default hover:bg-dis_blurple'>
                    <img src='images/logo_white.svg' className='h-5' alt='Discord logo'/>
                </div>
                <hr className='border-gray-700 border w-8 mx-auto'/>
                <ServerIcon image={'images/react.png'}/>
                <div className='server-default hover:bg-dis_green group'>
                    <PlusIcon className='text-dis_green w-8 group-hover:text-white hover:rounded-2xl transition-all ease-in-out duration-100'/>
                </div>
            </div>
            <div className='flex flex-col min-w-max bg-dis_server'>
                <h2 className='flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-black cursor-pointer'>
                    Sample Server
                    <ChevronDownIcon className='w-5 ml-2'/>
                </h2>
                <div className='text-dis_light_grey flex-grow overflow-y-scroll scrollbar-hide'>
                    <div className='flex items-center p-2 mb-2'>
                        <ChevronDownIcon className='h-3 mr-2 cursor-pointer hover:text-white'/>
                        <h4 className='font-semibold text-sm'>Channels</h4>
                        <PlusIcon className='h-6 ml-auto  cursor-pointer hover:text-white'
                        onClick={handleAddChannel}/>
                    </div>
                    <div className='flex flex-col space-y-2 px-2 mb-4'>
                        <Channel className='mb-20 min-w-max'/>
                        <Channel className='mb-20 min-w-max'/>
                        <Channel className='mb-20 min-w-max'/>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home