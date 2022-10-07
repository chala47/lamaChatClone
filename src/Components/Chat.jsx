import React from 'react'
import { Body } from './Body'
import { Header } from './Header'
import { Input } from './Input'
import { Message } from './Message'
 
export const Chat = () => {
  return (
    <div className='chat'>
        <Header/>
        <Body />
        <Input/>
    </div>
  )
}
