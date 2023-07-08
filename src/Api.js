import axios from 'axios';

// Set the token in request headers before making authenticated requests
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;