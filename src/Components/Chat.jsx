import React, { useContext } from 'react'
import { Body } from './Body'
import { Header } from './Header'
import { Input } from './Input'
import { ChatContext } from './user/ChatContext'
 
export const Chat = ({open,toggle}) => {
  const {data}=useContext(ChatContext);

  const toggled=()=>{
    toggle()
 }

  return (
    <div className= {open?'chat':'chat closed'}>
        <Header displayName={data.user.displayName} toggle={toggled}/>
        <Body data={data} />
        <Input/>
    </div>
  )
}
