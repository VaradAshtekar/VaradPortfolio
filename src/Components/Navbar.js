import React from 'react'
import {
    Link
  } from "react-router-dom";
import '../App.css';
import logo from '../static/img/varad_logo.png';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-custom">
                <div className="container-fluid">
                <img src={logo} alt="" width="35" height="35"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/services">Website Building</Link></li>
                                    <li><Link className="dropdown-item" to="#">UI/UX</Link></li>
                                    <li><Link className="dropdown-item" to="#">Graphic Designing</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
