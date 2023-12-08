import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import "./Statistics.css";

const Statistics = () => {
  
  const [userData, setUserData] = useState({ registered: 0, active: 0, inactive: 0 });
  const [loginData, setLoginData] = useState({ user1: 0, user2: 0, user3: 0 });
  const [popularContent, setPopularContent] = useState([]);

  useEffect(() => {
    
    const fetchUserData = () => {
      };

    
    const fetchLoginData = () => {
      };

   
    const fetchPopularContent = () => {
     };

   
    const intervalId = setInterval(() => {
      fetchUserData();
      fetchLoginData();
      fetchPopularContent();
    }, 5 * 60 * 1000); 

    
    fetchUserData();
    fetchLoginData();
    fetchPopularContent();

    
    return () => clearInterval(intervalId);
  }, []);

 

  return (
    <div className="dashboard-container">
      <div className="statistics-card mar">
        <h2>User Statistics</h2>
        {/* <Bar data={userChartData} /> */}
      </div>
      <div className="statistics-card">
        <h2>Login Statistics</h2>
        {/* <Bar data={loginChartData} /> */}
      </div>
      <div className="statistics-card">
        <h2>Popular Content</h2>
        {/* <Pie data={popularContentChartData} /> */}
      </div>
    </div>
  );
};

export default Statistics;
