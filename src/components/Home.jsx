import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import ServerIcon from './ServerIcon';
import { PlusIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Channel from './Channel';
import { addDoc, collection } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
import Chat from './Chat';

function Home() {
    const [user] = useAuthState(auth);

    const [channels] = useCollection(
        collection(db, 'channels')
    );
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
        {!user && <Navigate to="/"/>}
        <div className='flex h-screen '>
            <div className='flex flex-col min-w-max bg-dis_grey w-52'>
                <div className='text-dis_light_grey flex-grow overflow-y-scroll scrollbar-hide'>
                    <div className='flex items-center p-2 mb-2'>
                        <h4 className='font-semibold text-lg'>Channels</h4>
                        <PlusIcon className='h-6 ml-auto  cursor-pointer hover:text-white'
                        onClick={handleAddChannel}/>
                    </div>
                    <div className='flex flex-col space-y-2 px-2 mb-4'>
                        {channels?.docs.map((doc) => (
                            <Channel 
                            key={doc.id} 
                            id={doc.id} 
                            channelName={doc.data().channelName}/>
                        ))}
                        
                    </div>
                </div>
                <div className='flex justify-center pb-4 '>
                    <div className='text-dis_light_grey cursor-pointer' onClick={() => auth.signOut()}>
                        Logout
                    </div>
                </div>
            </div>
            <div className='bg-dis_grey flex-grow'>
                <Chat />
            </div>
        </div>
    </>
  )
}

export default Home