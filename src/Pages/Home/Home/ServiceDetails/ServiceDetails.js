import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    const {name , price,reviewName,review, rating, img} = service;
    return (
        <div className='serviceDetails'>
            <img className='images' src={img} alt="" />
            <h1 className='name'>{name}</h1>
            <h3 className='price'>Price : {price}</h3>
            <p className='rating'>Rating : {rating}</p>
            <p className='reviewName'>ReviewName : {reviewName}</p>
            <p className='review'>Review : {review}</p>
        </div>
    );
};

export default ServiceDetails;