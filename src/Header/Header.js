import React from 'react';
import './Header.css';

const header = () => {
    return (
        <div className="container-fluid d-flex justify-content-center w-75" expand="lg">
            <div className="d-flex flex-column align-items-center w-100">
                <div className="mt-3 mb-5 d-flex justify-content-center">
                    <a href="" className="navbar-brand mr-0">
                        <img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" alt="" className="rounded-circle logo" />
                    </a>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light w-100">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-around w-100">
                            <li className="nav-item">
                                <a className="nav-link" href="#4"><h2>Naše usluge</h2></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><h2>Galerija</h2></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><h2>O nama</h2></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><h2>Kontakt</h2></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default header;