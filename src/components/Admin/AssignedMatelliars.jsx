import React, { useState, useEffect } from 'react';
import './AssignedTools.css'; 

const ToolList = () => {
  const [tools, setTools] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint where your Express server is running
        const response = await fetch('http://localhost:2023/api/mateliars/assigned', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(localStorage.getItem("token"))
            
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTools(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error of receiving data. Please login and try again .');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="assigned-tools-container bg-gray-300">
      <h1 className="tools-header">Received Tools</h1>
      {error && <p className="error-message">{error}</p>}
      <ul className="tools-list">
        {tools.map((tool, index) => (
          <li key={index} className="tool-item">
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolList;






