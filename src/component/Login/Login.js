import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

// firebase initialize
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [error, setError] = useState("");
    const location = useLocation();
    const history = useHistory();

    // setting path for private routes
    const { from } = location.state || { from: { pathname: '/' } }

    const handleGoogleLogin = () => {
        // google authentication
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = { name: user.displayName, email: user.email, image: user.photoURL }
                localStorage.setItem("user", JSON.stringify(loggedInUser));
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return (
        // Login form design
        <div className="container col-md-6">
            <div className="d-flex justify-content-center shadow m-5">
                <div className="text-center m-5">
                    <div className="mb-5">
                        <h3><strong>Login With</strong></h3>
                    </div>
                    <div>
                        <input type="email" className="form-control mb-3" placeholder="Email"></input>
                        <input type="password" className="form-control mb-3" placeholder="Password"></input>
                        <button className="btn form-control mb-2" style={{ backgroundColor: '#1d5ca0', color: 'white' }}>Login</button>
                        <p>Don't have an account? <a href="/login" style={{ textDecoration: 'none', color: '#1d5ca0' }}>Create an account</a></p>
                    </div>
                    <div>
                        <h6>Or</h6>
                        <button onClick={handleGoogleLogin} className="btn form-control m-2 border" style={{ color: '#1d5ca0' }}>Continue with Google</button>
                    </div>
                </div>
            </div>
            <p className="text-center text-danger">{error}</p>
        </div>
    );
};

export default Login;