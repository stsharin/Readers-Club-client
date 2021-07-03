import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    return (
        <div className="container col-md-6">
            <div className="d-flex justify-content-center shadow m-5">
                <div className="text-center m-5">
                    <div className="mb-5">
                        <h3><strong>Login With</strong></h3>
                    </div>
                    <div>
                        <input style={{borderTop: '0px', borderLeft: '0px', borderRight: '0px'}} type="email" className="form-control mb-3" placeholder="Email"></input>
                        <input style={{borderTop: '0px', borderLeft: '0px', borderRight: '0px'}} type="password" className="form-control mb-3" placeholder="Password"></input>
                        <button className="btn form-control mb-2" style={{backgroundColor: '#8C3EF0', color: 'white'}}>Login</button>
                        <p>Don't have an account? <a href="/login" style={{textDecoration: 'none', color: '#8C3EF0'}}>Create an account</a></p>
                    </div>
                    <div>
                        <p>------- Or --------</p>
                        <button className="btn form-control m-2 border rounded" style={{color: '#8C3EF0'}}>Continue with Google</button>
                        {/* <p>{error}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;