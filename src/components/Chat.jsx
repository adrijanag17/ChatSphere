import React from 'react'
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from '../features/channelSlice'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { HashtagIcon } from '@heroicons/react/24/outline';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import {useRef} from 'react'
import { collection, getDocs, query, addDoc, orderBy } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import Message from "./Message";

function Chat() {
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [user] = useAuthState(auth);

    const inputRef = useRef("");
    const chatRef = useRef(null);

    const scrollToBottom = () => {
        chatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    const sendMsg = async (e) =>{
        e.preventDefault();
        if (inputRef.current.value !== ""){
            await addDoc(collection(db, `channels/${channelId}/messages`), {
                timestamp: serverTimestamp(),
                message: inputRef.current.value,
                name: user?.displayName,
                photoURL: user?.photoURL,
                email: user?.email,
            });
        }
        inputRef.current.value = "";
        scrollToBottom();

    };

    const [messages] = useCollection(
        channelId &&
        query(collection(db, `channels/${channelId}/messages`), orderBy("timestamp", "asc"))
    );
    

  return (
    <div className='flex flex-col h-screen'>
        <header className='flex items-center justify-between space-x-5 border-b border-gray-500 p-4'>
            <div className='flex items-center space-x-1'>
                <HashtagIcon className='h-4 text-dis_light_grey' />
                <h4 className='text-dis_light_grey'>{channelName}</h4>
            </div>
        </header>

        <main className='flex-grow overflow-y-scroll scrollbar-hide'>
            {messages?.docs.map((doc) => {
                const {message, timestamp, name, email, photoURL} = doc.data();
                return (
                    <Message 
                    key={doc.id} 
                    id={doc.id} 
                    message={message}
                    timestamp={timestamp}
                    name={name}
                    email={email}
                    photoURL={photoURL}/>
                );
            })}
            <div ref={chatRef} className='pb-16' />
        </main>

        <div className='flex items-center p-5 bg-slate-600 mx-5 mb-5 rounded-lg'>
            <form className='flex-grow'>
                <input type='text' 
                disabled={!channelId} 
                placeholder='Enter your message here!' className='bg-transparent form:outline-none text-white w-full'
                ref={inputRef}/>
                <button hidden type='submit' onClick={sendMsg}>
                    Send
                </button>     
            </form>
            
        </div>
    </div>
  )
}

export default Chat;