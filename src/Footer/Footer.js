import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footer = () => {
    return (
        <div className="w-100 bg-danger d-flex justify-content-center">
            <div className="col-8">
                <p className="p-3 mb-0">
                    <FontAwesomeIcon icon="copyright" /> 2019 by mmataja. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default footer;