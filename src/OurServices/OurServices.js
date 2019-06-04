import React, { useState } from 'react';
import './OurServices.css';
import ServiceCard from './ServiceCard';
import OurServiceData from './OurServiceData.json';
import OurService from './OurService';

const ourServices = () => {

    const [ourService, setOurService] = useState();
    
    const buttonclick = async serviceData => {
        await setOurService(true);
        console.log(ourService);
    }

    return (
        <div className="d-flex flex-column align-items-center mt-4 container-fluid">
            <div className="mb-4">
                <h1 className="display-1 p-5">Naše usluge</h1>              
            </div>
            <div className="card-deck mb-5 col-10">
                <OurService />
                {OurServiceData.map((data, index) => (
                    <ServiceCard 
                        data={data}
                        index={index}
                        key={index}
                        triggerOurService={buttonclick} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ourServices;