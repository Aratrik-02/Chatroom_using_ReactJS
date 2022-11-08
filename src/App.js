import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';


const style={
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[100vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div className={style.appContainer} style={{marginTop:"0", top:"0"}}>
      <section className={style.sectionContainer} style={{height:"100%",marginTop:"0"}}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
