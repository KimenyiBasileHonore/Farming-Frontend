import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {
  const navigate = useNavigate();
  const [role, setRole] = useState("FARMER"); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: role, 
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let apiEndpoint;
      let dashboardPath;
      switch (formData.role) {
        case 'FARMER':
          apiEndpoint = 'http://localhost:2023/api/farmer/login';
          dashboardPath = '/FarmarDashboard';
          break;
        case 'DIRECTOR':
          apiEndpoint = 'http://localhost:2023/api/director/login';
          dashboardPath = '/DirectorDashboard';
          break;
        case 'ADMIN':
          apiEndpoint = 'http://localhost:2023/api/admin/login';
          dashboardPath = '/RabDashboard';
          break;
          default:
            console.error('Invalid role');
            return;
        }
  
      console.log('API Endpoint:', apiEndpoint);
  
      const response = await axios.post(apiEndpoint, formData);
  
      console.log('Server Response:', response.data);
  
      if (response.data && response.data.token) {
        console.log('User logged in successfully');
        const token = response.data.token;
        localStorage.setItem("token", JSON.stringify(response.data.token));
        navigate(dashboardPath);
      } else {
        console.error('Invalid credentials');
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrorMessage('Email or password is not correct. Please try again later.');
    }
  };
  
  
  
  return (
    <div className=" font-serif min-h-screen flex items-center justify-center bg-gray-400" >
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 backdrop-filter backdrop-blur-md bg-opacity-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">User Log In</h2>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-black mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6 flex items-center">
          <FontAwesomeIcon icon={faLock} className="text-black mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='mb-4 flex items-center'>
            <label htmlFor="role" className="block font-bold brown">
              Login as
            </label>
            <select
              id="role"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              value={formData.role} 
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              required
            >

              <option value="FARMER">FARMER</option>
              <option value="DIRECTOR">ENGINEER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/Signup" className="text-gray-900 font-bold hover:underline">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1" /> Back to Sign Up
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-gray-900 font-bold hover:underline">
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
