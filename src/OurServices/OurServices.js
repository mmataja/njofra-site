import React, { useState } from 'react';
import './OurServices.css';
import ServiceCard from './ServiceCard';
import OurServiceData from './OurServiceData.json';
import OurService from './OurService';

const ourServices = () => {

    const [isService, setIsService] = useState(false);
    const [data, setData] = useState({
        title: "",
        description: "",
        longDescription: "",
        img: ""
    });
    
    const buttonclick = serviceData => {
        setIsService(!isService);
        setData(serviceData);
    }

    return (
        <div className={isService ? "d-flex flex-column align-items-center container-fluid bg-img-transparent" : 
                        "d-flex flex-column align-items-center mt-4 container-fluid"}>
            <div className="mb-4">
                <h1 className="display-1 p-5">Naše usluge</h1>              
            </div>
            <div className="card-deck mb-5 col-10">
                {isService ? <OurService title={data.title} description={data.longDescription} goBack={buttonclick} /> 
                            : OurServiceData.map((data, index) => (
                                <ServiceCard 
                                    data={data}
                                    index={index}
                                    key={index}
                                    triggerOurService={buttonclick} 
                                />
                            ))
                }
            </div>
        </div>
    );
};

export default ourServices;