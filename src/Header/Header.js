import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import '../../public/markanovic_logo.png'

const Header = (props) => {
    return (
        <div className="container-fluid d-flex justify-content-center w-75" expand="lg">
            <div className="d-flex flex-column align-items-center w-100">
                <div className="mt-3 mb-5 d-flex justify-content-center">
                    <a href="" className="navbar-brand mr-0">
                        <img src="markanovic_logo.png" alt="markanovic_logo" className="logo" />
                    </a>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light w-100">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-around w-100">
                            <Link 
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={1000} 
                            >
                                <li className="nav-item">
                                    <div className="nav-link cursor-pointer"> <h2 className="fs-40 fw-600">Naše usluge</h2> </div>
                                </li>
                            </Link>
                            <Link 
                                activeClass="active"
                                to="gallery"
                                spy={true}
                                smooth={true}
                                duration={1400} 
                            >
                                <li className="nav-item">
                                    <div className="nav-link cursor-pointer"> <h2 className="fs-40 fw-600">Galerija</h2> </div>
                                </li>
                            </Link>
                            <Link 
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1800} 
                            >
                                <li className="nav-item">
                                    <div className="nav-link cursor-pointer"> <h2 className="fs-40 fw-600">O nama</h2> </div>
                                </li>
                            </Link>
                            <Link 
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={2200} 
                            >
                                <li className="nav-item">
                                    <div className="nav-link cursor-pointer"> <h2 className="fs-40 fw-600">Kontakt</h2> </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;