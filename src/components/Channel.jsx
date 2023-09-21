import React from 'react'

function Channel({id, channelName}) {
  const setChannel = () => {};
  return (
    <div className='ml-4' onClick={setChannel}>
        {channelName}
    </div>
  )
}

export default Channel