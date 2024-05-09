import axios from 'axios';

export const fetchCurrentUser = async (token) => {
    try {
        const response = await axios.get(`http://127.0.0.1:4000/current_user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error.message);
        throw error;
    }
};

export const fetchUsers = async (token) => {
    try {
        const response = await axios.get(`http://127.0.0.1:4000/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};


export const loginUser = async (email, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:4000/login', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};


export const addUser = async (username, email, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:4000/users', {
            username,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};