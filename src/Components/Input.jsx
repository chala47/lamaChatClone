import React from 'react'
import play from '../contents/images/play.jpg';
export const Input = () => {
    return (
        <div className='message'>
            <input type='text' placeholder='Type someting'/>
            <div className='attach'>
            <img src={play} alt=''/>
            <img src={play} alt=''/>
            <button>send</button>
            </div>
        </div>
      )
}
