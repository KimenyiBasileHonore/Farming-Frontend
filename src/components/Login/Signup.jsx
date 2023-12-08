import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';


function SignupForm() {
  const navigate = useNavigate();
  const [role, setRole] = useState("FARMER"); 
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'FARMER',
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

      // Determine the API endpoint and dashboard path based on the selected role
      switch (formData.role) {
        case 'FARMER':
          apiEndpoint = 'http://localhost:2023/api/farmer/signup';
          dashboardPath = '/FarmarDashboard';
          break;
        case 'DIRECTOR':
          apiEndpoint = 'http://localhost:2023/api/director/signup';
          dashboardPath = '/DirectorDashboard';
          break;
        case 'ADMIN':
          apiEndpoint = 'http://localhost:2023/api/admin/signup';
          dashboardPath = '/RabDashboard';
          break;
        default:
          console.error('Invalid role');
          return;
      }

      const response = await axios.post(apiEndpoint, formData);

      console.log('Response:', response);

      if (response.status === 200 || response.status === 201) {
        console.log('User registered successfully');
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
    <div className="font-serif min-h-screen flex items-center justify-center bg-gray-400" >
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 backdrop-filter backdrop-blur-md bg-opacity-50">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-500">Farmer Register</h2>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faUser} className="text-black mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-black mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-black mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faLock} className="text-black mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='mb-4 flex items-center'>
            <label htmlFor="role" className="block font-bold brown">
              Choose Role
            </label>
            <select
              id="role"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              value={formData.role} // Update this line
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
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/Login" className="text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to home page
          </Link>
        </div>
      </div>

    </div>
  );
}

export default SignupForm;
