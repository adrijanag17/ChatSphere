import React from 'react'
import moment from 'moment';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteDoc, doc } from 'firebase/firestore';
import { selectChannelId, selectChannelName } from '../features/channelSlice';
import { useSelector } from 'react-redux';

function Message({id, message, timestamp, name, email, photoURL}) {
  const [user] = useAuthState(auth);
  const channelId = useSelector(selectChannelId);

  return (
    <div className='flex items-center p-1 pl-5 my-5 mr-2 hover:bg-gray-800 group'>
      <img src={photoURL} 
      alt='' 
      className='h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl' />
      <div className='flex flex-col'>
        <h4 className='flex items-center space-x-2 font-medium'>
          <span className='hover:underline text-white text-sm cursor-pointer'>{name}</span>
          <span className='text-dis_light_grey text-xs'>
            {moment(timestamp?.toDate().getTime()).format("lll")}
          </span>
        </h4>
        <p className='text-sm text-white'>{message}</p>
      </div>
      {user?.email === email && (
        <div className='hover:bg-red-400 p-1 ml-auto rounded-sm text-red-800 hover:text-white cursor-pointer'
        onClick={() => deleteDoc(doc(db, `channels/${channelId}/messages/${id}`))}>
          <TrashIcon className='h-5 hidden group-hover:inline' />
        </div>
      )}
    </div>
  )
}

export default Message;