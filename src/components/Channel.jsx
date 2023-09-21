import React from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { setChannelInfo } from '../features/channelSlice';
import { HashtagIcon } from '@heroicons/react/24/outline';

function Channel({id, channelName}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setChannel = () => {
    dispatch(setChannelInfo({
      channelId: id,
      channelName: channelName,
    }))
    navigate(`/channels/${id}`);
  };
  return (
    <div className='flex items-center cursor-pointer' onClick={setChannel} >
        <HashtagIcon className='h-3 mr-2'/>
        {channelName}
    </div>
  )
}

export default Channel;