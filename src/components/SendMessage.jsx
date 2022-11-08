import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import {auth, db} from "../firebase";

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0 sticky`,
  // input: `w-full bg-white rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`,
  input: `w-full text-xl p-3 bg-gray-800 text-white outline-none border-none `,
  // button: `bg-blue-500 text-white px-4 rounded-r-full`,
  button: `w-[20%] bg-blue-500 text-white`,
};

function SendMessage({scroll}) {
  const [input, setInput] = React.useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if(input===''){return;}
    const {uid, displayName} = auth.currentUser;
    await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    });
    setInput("");
    scroll.current.scrollIntoView({behavior: 'smooth'});
    // const {uid, displayName, photoURL} = auth.currentUser;
    // await addDoc(collection(db, "messages"), {
    //     text: input,
    //     name: displayName,
    //     uid,
    //     photoURL,
    //     timestamp: serverTimestamp()
    // });
    // setInput("");
  };

  return (
    <form className={style.form} onSubmit={sendMessage} style={{position: "sticky"}}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
}

export default SendMessage;
