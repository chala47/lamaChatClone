import React from 'react'
import play from '../contents/images/play.jpg'
export const Header = () => {
  return (
    <div className='header'>
        <span className='title'>jane</span>
        <div className='setting'>
        <img src={play} alt=''/>
        <img src={play} alt=''/>
        <img src={play} alt=''/>
        </div>

    </div>
  )
}
