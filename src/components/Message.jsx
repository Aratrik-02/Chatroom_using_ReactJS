import React from 'react'
import {auth} from '../firebase';
const style={
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    // name: `fixed mt-[-4rem] text-gray-600 text-xs`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#205dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    // sent: `mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white`,
    received: 'bg-[#e5e5ea] text-black float-left rounded-br-full'
}

function Message({message}) {
  const messageClass = 
    message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;
  
  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>
            <p className={style.name}>{message.name}</p>
            <p>{message.text}</p>
        </div>
    </div>
  )
}

export default Message