import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [error, setError] = useState("");
    const [user, setUser] = useState({});

    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return (
        <div className="container col-md-6">
            <div className="d-flex justify-content-center shadow m-5">
                <div className="text-center m-5">
                    <div className="mb-5">
                        <h3><strong>Login With</strong></h3>
                    </div>
                    <div>
                        <input style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px' }} type="email" className="form-control mb-3" placeholder="Email"></input>
                        <input style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px' }} type="password" className="form-control mb-3" placeholder="Password"></input>
                        <button className="btn form-control mb-2" style={{ backgroundColor: '#6650e4', color: 'white' }}>Login</button>
                        <p>Don't have an account? <a href="/login" style={{ textDecoration: 'none', color: '#6650e4' }}>Create an account</a></p>
                    </div>
                    <div>
                        <p>------- Or --------</p>
                        <button onClick={handleGoogleLogin} className="btn form-control m-2 border rounded" style={{ color: '#6650e4' }}>Continue with Google</button>
                        {/* <p>{error}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;