import React from 'react';
import TotalBooks from '../TotalBooks/TotalBooks';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center m-5 input-group">
                    <input style={{width: '500px', border: '0px', backgroundColor: '#f0f0ef'}} className="ps-3 rounded"  type="search" placeholder="Search Book" />
                    <button className="btn" style={{ backgroundColor: '#8C3EF0', color: 'white' }}>Search</button>
                </div>
            </div>
            <TotalBooks />
        </div>
    );
};

export default Home;