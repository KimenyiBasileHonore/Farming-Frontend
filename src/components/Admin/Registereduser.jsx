import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
  // const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get('http://localhost:2023/api/director/userlist')
      .then((response) => {
        console.log('API Response:', response.data);
        setUsers(response.data.reports);

      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        // setLoading(false);
      });
  }, []);


  return (
    <div  className="font-serif container rounded-lg mx-auto px-4 py-8 bg-gray-300">
      <div className="pdf-button-container flex justify-end">
                <button className="pdf-button p-right" onClick={handlePrint}>Download</button>
            </div>
            <div className="printable-content" ref={componentRef}>
                <br /><br /><br />
      <h1 className="text-3xl ml-72 font-semibold text-black mb-4">REGISTERED USER LIST</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr style={{ backgroundColor: '#6B46C1', color: 'white' }}>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Names
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Phone Number
            </th>

          </tr>
        </thead>

        {users && users.length > 0 ? (
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white hover:bg-gray-200'}>
                <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="3" className="px-6 py-4 whitespace-no-wrap text-center">No users found</td>
            </tr>
          </tbody>
        )}

      </table>
      {/* )} */}
      </div>
    </div>
  );
}

export default UserList;
