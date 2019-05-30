import React from 'react';
import './Header.css';

const header = () => {
    return (
        <div className="container-fluid d-flex justify-content-center w-75">
            <div className="d-flex flex-column align-items-center w-100">
                <div className="mt-3 mb-5 d-flex justify-content-center">
                    <a href="" className="navbar-brand mr-0">
                        <img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" alt="" className="rounded-circle logo" />
                    </a>
                </div>
                <div className="d-flex justify-content-around mt-3 w-100">
                    <div>
                        <h1><a href="#">Naše usluge</a></h1>
                    </div>
                    <div>
                        <h1><a href="#">Projekti</a></h1>
                    </div>
                    <div>
                        <h1><a href="#">O nama</a></h1>
                    </div>
                    <div>
                        <h1><a href="#">Kontakt</a></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header;