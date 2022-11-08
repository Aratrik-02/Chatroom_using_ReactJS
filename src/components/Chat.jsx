import React, {useEffect, useState, useRef} from 'react'
import Message from './Message';
import {db} from '../firebase';
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';
import SendMessage from './SendMessage';

const style={
    main: `flex flex-col p-[10px] relative`
}

function Chat() {
    const [messages, setMessages] = useState([]);
    const scroll=useRef();

    useEffect(()=>{
        const q=query(collection(db,'messages'),orderBy('timestamp'))
        const unsubscribe=onSnapshot(q, (querySnapshot)=>{
            let messages=[];
            querySnapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages);
        })
        return () => unsubscribe();
    },[])
    return (
        <div>
            <main className={style.main}>
                {/* <ChatMessage />*/}
                {messages && messages.map(msg=>(
                    <Message key={msg.id} message={msg} />
                ))}
            </main>
            <SendMessage scroll={scroll}/>
            {/* Sendmessage components */}
            <span ref={scroll}></span>
        </div>
    )
}

export default Chat