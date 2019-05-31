import React from 'react';
import './OurServices.css';
import ServiceCard from './ServiceCard';

const ourServices = () => {
    return (
        <div className="d-flex flex-column align-items-center mt-5 container-fluid">
            <div className="mb-5">
                <h1 className="display-1 p-5">Naše usluge</h1>              
            </div>
            <div className="card-deck mb-5 col-10">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    );
};

export default ourServices;