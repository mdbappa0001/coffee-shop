import React, { useContext, useEffect } from 'react';
import { ServiceContext } from '../../App';
import ServiceDetails from '../Home/Home/ServiceDetails/ServiceDetails';
import './ServiceDetail.css';


const ServiceDetail = () => {
    const [services, setServices] = useContext(ServiceContext);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[setServices])
    return (
        <div className='serviceDetail'>
{
    services.map(service => <ServiceDetails
    key={service.id}
    service={service}
    ></ServiceDetails>)
}
            </div>
    );
};

export default ServiceDetail;