import React, { useContext } from 'react'
import { Body } from './Body'
import { Header } from './Header'
import { Input } from './Input'
import { ChatContext } from './user/ChatContext'
 
export const Chat = () => {
  const {data}=useContext(ChatContext);
  return (
    <div className='chat'>
        <Header displayName={data.user.displayName}/>
        <Body data={data} />
        <Input/>
    </div>
  )
}
