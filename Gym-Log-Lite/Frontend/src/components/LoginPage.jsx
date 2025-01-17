import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/fetchinfo.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { token } = await loginUser(email, password);
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-black">Login</h1>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 bg-slate-200 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 bg-slate-200 text-black"
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        {/* <button
          type="button"
          onClick={handleRegister}
          className="w-full py-2 px-4 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Register
        </button> */}
      </div>
    </div>
  );
};

export default LoginPage;
