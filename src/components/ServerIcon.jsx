import React from 'react'


function ServerIcon({image}) {
  return (
    <img src={ image } 
    alt='Server logo' 
    className='h-12 cursor-pointer rounded-full transition-all duration-100 ease-in-out hover:rounded-2xl'/>
  )
}

export default ServerIcon