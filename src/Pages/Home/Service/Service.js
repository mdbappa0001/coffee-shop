import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, price} = service;
    return (
        <div className='service'>
            <img className='img' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price : {price}</p>
            <button>See Details</button>
        </div>
    );
};

export default Service;