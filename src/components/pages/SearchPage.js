import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';
import Cookies from 'js-cookie';

export default function SearchPage() {

    const checkTokenStatus = async (token) => {

        try {
            const response = await axios.post('http://localhost:8000/auth/token-status/', {
            token,
          });
          
            console.log(response.data.status); // Valid, blacklisted, or invalid
        } catch (error) {
            console.error('Error checking token status', error);
        }
      };

    /*const handleLogout = async () => {
        try {
            const refresh = Cookies.get().refresh;
            console.log(`token: ${refresh}`);
            await axios.post('http://localhost:8000/auth/logout/', {
                refresh
            });
            checkTokenStatus(refresh);
            console.log('Logout successful');

        } catch (error) {
            console.error(error);
            console.log('Logout failed');
        }
      };*/

      const handleLogout = async () => {
        try {
            const refresh = Cookies.get().refresh;
            console.log(`token: ${refresh}`);
            await axios.post('http://localhost:8000/auth/token/blacklist/', {
                refresh
            });
            console.log('Logout successful');
            console.log(refresh);
            checkTokenStatus(refresh);
        } catch (error) {
            console.error(error);
            console.log('Logout failed');
        }
      };

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">IPS Search Page</h1>
            <Link to="/">
                <button className="primary-button" onClick={handleLogout}>Log out</button>
            </Link>
        </div>
    )
}