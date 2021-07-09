import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" style={{color: '#1d5ca0'}} href="/home"><h5>Readers Club</h5></a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                            <li className="nav-item me-5">
                                <Link className="nav-link active" to="/home" style={{color: '#1d5ca0'}}>Home</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active" to="/myOrder" style={{color: '#1d5ca0'}}>Order</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active" to="/allBookDetails" style={{color: '#1d5ca0'}}>Admin</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active" to="/login"><button className="btn" style={{ backgroundColor: '#1d5ca0', color: 'white'}}>Login</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;