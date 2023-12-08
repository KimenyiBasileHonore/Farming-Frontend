// Import necessary React and Tailwind CSS modules
import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

const AssignedToolsList = () => {

  const [assignedTools, setAssignedTools] = useState([]);
  const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get('http://localhost:2023/api/mateliars/allassigned');
        setAssignedTools(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return (
      <div className="font-serif container rounded-lg mx-auto px-4 py-8 bg-gray-300">
        <div className="pdf-button-container flex justify-end">
                <button className="pdf-button p-right" onClick={handlePrint}>Download</button>
            </div>
            <div className="printable-content" ref={componentRef}>
                <br /><br /><br />
        <h1 className="text-3xl ml-72 font-semibold text-black mb-4">Assigned Tools Information</h1>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr style={{ backgroundColor: '#6B46C1', color: 'white' }}>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                User Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Tools
              </th>
            </tr>
          </thead>
  
          {assignedTools && assignedTools.length > 0 ? (
            <tbody>
              {assignedTools.map((assignment, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white hover:bg-gray-200'}>
                  <td className="px-6 py-4 whitespace-no-wrap">{assignment.user.email}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <ul className="list-disc">
                      {assignment.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="text-lg">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="2" className="px-6 py-4 whitespace-no-wrap text-center">No assigned tools found</td>
              </tr>
            </tbody>
          )}
  
        </table>
      </div>
      </div>
    );
  };
  
  export default AssignedToolsList;
  