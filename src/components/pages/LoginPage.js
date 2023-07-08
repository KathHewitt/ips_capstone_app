import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';

export default function SignInPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/auth/login/', {
              username,
              password,
            });
            
            const token = response.data;
            Cookies.set(token);
            console.log(response.data);

            // Redirect upon successful login
            setIsLoggedIn(true);

          } 
         catch (error) {
            console.error(error);
            setErrorMessage("invalid username or password");
        }
      };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
                {isLoggedIn ? (
                    <Redirect to="/search" />
                ) : (
                    <form action="/home" onSubmit={handleSubmit}>
                    <p>
                        <label>Username or email address</label><br/>
                        <input type="text" 
                            name="first_name" required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </p>
                    <p>
                        <label>Password</label>
                        <br/>
                        <input type="password" 
                            name="password" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </p>
                    <button id="sub_btn" type="submit">Login</button>
                    <br/>
                    {errorMessage && (
                    <p className="error"> {errorMessage} </p>
                    )}
        
                </form>
                )}
        </div>
      );

}

/*                <footer>
                <p>New User? <Link to="/register">Create an account</Link>.</p>
                {<p><Link to="/">Back to Homepage</Link>.</p>}
                </footer>*/