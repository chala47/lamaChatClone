import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <sapn className='logo'>Lama chat</sapn>
        <div className='user'>
        <img src='./src/contents/images/user1.jpg' alt=''/>
        <span>name chala </span>
        <button>logout</button>
        </div>
        </div>
  )
}
