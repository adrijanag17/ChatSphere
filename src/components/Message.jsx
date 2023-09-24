import React from 'react'
import moment from 'moment';

function Message({id, message, timestamp, name, email, photoURL}) {
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
    </div>
  )
}

export default Message;