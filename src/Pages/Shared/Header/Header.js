import React from 'react';
import './Header.css';
import CustomLink from '../../Home/CustomLink/CustomLink';
import logo from '../../../Photos/logo/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth)

const handleSignOut =()=>{
    signOut(auth);
}

    return (
        <div className='sticky top-0 bg-neutral-900 px-12 py-8 flex justify-center md:justify-between'>

       <img className='logo' src={logo} alt="" />

        <div>
            <CustomLink className='customlink' to='/'>HOME</CustomLink>
            <CustomLink className='customlink' to='/blog'>BLOGS</CustomLink>
            <CustomLink className='customlink' to='/about'>ABOUT ME</CustomLink>
            {
                user?
                <button className='customlink1' onClick={handleSignOut}>SignOUT</button> :
                <CustomLink className='customlink' to='/login'>LOGIN</CustomLink>}
        </div>

    </div>
    );
};

export default Header;