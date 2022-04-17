import React from 'react';
import './Header.css';
import CustomLink from '../../Home/CustomLink/CustomLink';
import logo from '../../../Photos/logo/logo.png';


const Header = () => {
    return (
        <div className='sticky top-0 bg-neutral-900 px-12 py-8 flex justify-center md:justify-between'>

       <img className='logo' src={logo} alt="" />

        <div>
            <CustomLink className='customlink' to='/'>HOME</CustomLink>
            <CustomLink className='customlink' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='customlink' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='customlink' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='customlink' to='/about'>ABOUT</CustomLink>
        </div>

    </div>
    );
};

export default Header;