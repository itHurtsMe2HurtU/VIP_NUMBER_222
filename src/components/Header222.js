import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/logo.png';
import '../styles/Header222.css';

const Header222 = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg"
                // style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
                style={{ background: 'linear-gradient(to bottom, #f34500, #f77602)' }}
            >
                <div className="container-lg container-fluid" data-aos="fade-right">
                    <a className="navbar-brand" href="/"><div><img src={LOGO} /></div></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fa-solid fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto" data-aos="fade-right">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Vip Numbers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sold out</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/offerpage">Offers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-user"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header222;