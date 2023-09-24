import React from 'react'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import chat from "../../public/images/chat.json";
import bubble from "../../public/images/bubble.json";
import Lottie from 'lottie-react';


function Header() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signIn = (event) => {
        event.preventDefault();
        
        signInWithPopup(auth, provider)
        .then(() => navigate("/channels"))
        .catch((error) => alert(error.message));
    };

    return (
    <div className='bg-gradient-to-br from-green-200 to-yellow-100'>
    <div className='flex items-center justify-center py-4 '>
        <Lottie animationData={bubble} className='cursor-pointer w-25 h-12' href='/'/>
        <span className='font-bold text-lg'>ChatSphere</span>
    </div>
    <div className='p-8 py-10 h-screen flex'>
        <div className='flex flex-col gap-8 pt-20'>
            <h1 className='font-bold text-4xl'>ChatSphere is ...</h1>
            <h2 className='font-light text-lg tracking-wide w-full'>
            a place where you can chat with your friends about your various interests, & have all your conversations neatly organized into dedicated channels!
            </h2>
            <div className='flex flex-col gap-8'>
                <button className='bg-dis_blurple text-white p-2 rounded-full text-md font-semibold hover:text-dis_yellow hover:shadow-2xl transition duration-200 ease-in-out w-52'
                onClick={!user ? signIn : () => navigate("/channels")}>
                    {!user ? "Login" : "Open ChatSphere"}
                </button>
            </div>
        </div>
        <Lottie animationData={chat} className=''/>
    </div>
    </div>
  )
}

export default Header