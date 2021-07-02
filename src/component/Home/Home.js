import React from 'react';
import Navbar from '../Navbar/Navbar';
import TotalBooks from '../TotalBooks/TotalBooks';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="d-flex justify-content-center m-5">
                    <input className="form-control" type="text" placeholder="Search..." />
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
            <TotalBooks/>
        </div>
    );
};

export default Home;