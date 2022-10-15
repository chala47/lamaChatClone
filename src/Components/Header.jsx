import React from 'react'
import play from '../contents/images/play.jpg'
import cam from '../contents/images/cam.png';
import more from '../contents/images/more.png';
import add from '../contents/images/add.png';
export const Header = ({displayName}) => {
  return (
    <div className='header'>
        <span className='title'>{displayName}</span>
        <div className='setting'>
        <img src={cam} alt=''/>
        <img src={add} alt=''/>
        <img src={more} alt=''/>
        </div>

    </div>
  )
}
