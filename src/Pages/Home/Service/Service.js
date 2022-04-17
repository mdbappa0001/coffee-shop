import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, img, price} = service;
    return (
        <div className='service'>
            <img className='img' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price : {price}</p>
            <Link to='/serviceDetail'>
            <button  className='button'>See Details</button></Link>
        </div>
    );
};

export default Service;