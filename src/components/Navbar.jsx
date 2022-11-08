import React from 'react';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import Logout from './Logout';
const style={
    nav: `bg-gray-800 h-20 w-full max-w-[728px] flex justify-between items-center p-4 z-40 shadow-xl`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (

        <nav className={style.nav} style={{position:"fixed", marginTop:"0"}}>
            <h1 className={style.heading} >Chatorium</h1>
            {user ? <Logout /> : <SignIn />}
        </nav>
    );
}

export default Navbar;