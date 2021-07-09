import React from 'react';
import { Link } from 'react-router-dom';

const Bar = () => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{backgroundColor: '#0e2e50', width: '15%'}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100" style={{width: '100%'}}>
                <h4 className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none mt-3 mb-5" >
                    <span >Readers Club</span>
                </h4>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link align-middle px-0">
                            <span className="ms-1 d-none d-sm-inline text-white mt-5">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/allBookDetails" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline text-white">Manage Books</span> </a>
                    </li>

                    <li>
                        <a href="/addBook" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline text-white">Add Book</span> </a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    );
};

export default Bar;