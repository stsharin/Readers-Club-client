import React from 'react';
import TotalBooks from '../TotalBooks/TotalBooks';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center mt-5 mb-5 input-group">
                    <input style={{width: '50%', border: '0px', backgroundColor: '#f0f0ef'}} className="ps-3 rounded"  type="search" placeholder="Search Book" />
                    <button className="btn" style={{ backgroundColor: '#1d5ca0', color: 'white' }}>Search</button>
                </div>
            </div>
            <TotalBooks />
        </div>
    );
};

export default Home;