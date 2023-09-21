import React, { useState } from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


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
    <header className='flex items-center justify-between py-4 px-6'>
        <a href='/'>
            <img src='images/logo_small.svg' alt='Discord logo' className='w-32 h-12 object-contain' />
        </a>
        <div className='hidden lg:flex space-x-8'>
            <a className='link'>Download</a>
            <a className='link'>Nitro</a>
            <a className='link'>Discover</a>
            <a className='link'>Safety</a>
            <a className='link'>Support</a>
            <a className='link'>Blog</a>
            <a className='link'>Careers</a>
        </div>
        <div className='flex space-x-4'>
            <button className='bg-dis_blurple text-white p-2 rounded-full px-4 text-xs md:text-sm font-semibold hover:text-dis_yellow hover:shadow-2xl transition duration-200 ease-in-out'
            onClick={!user ? signIn : () => navigate("/channels")}>
                {!user ? "Login" : "Open Discord"}
            </button>
            <div>
            <Bars3BottomLeftIcon className='text-dis_blue h-8 cursor-pointer lg:hidden'/>
            </div>
        </div>
    </header>
  )
}

export default Header