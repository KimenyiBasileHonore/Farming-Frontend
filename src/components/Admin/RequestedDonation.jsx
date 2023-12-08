import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

const ProblemReportList = () => {
  const [reports, setReports] = useState([]);
  const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

  useEffect(() => {
    axios.get('http://localhost:2023/api/donation/allrequests')
      .then((response) => {
        setReports(response.data.reports);
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  const handleSelectForm = async (formId) => {
    try {
      await axios.patch(`http://localhost:2023/api/donation/select/${formId}`);
      // Fetch the updated list of reports from the server
      const updatedReports = await axios.get('http://localhost:2023/api/donation/allrequests');
      // Update local state with the updated list of reports
      setReports(updatedReports.data.reports);
    } catch (error) {
      console.error('Error selecting form:', error);
    }
  };
  
  const handleUnselectForm = async (formId) => {
    try {
      await axios.patch(`http://localhost:2023/api/donation/unselect/${formId}`);
      // Fetch the updated list of reports from the server
      const updatedReports = await axios.get('http://localhost:2023/api/donation/allrequests');
      // Update local state with the updated list of reports
      setReports(updatedReports.data.reports);
    } catch (error) {
      console.error('Error unselecting form:', error);
    }
  };
  


  return (
    <div className="font-serif container rounded-lg mx-auto px-4 py-8 bg-gray-300">
      <div className="pdf-button-container flex justify-end">
                <button className="pdf-button p-right" onClick={handlePrint}>Download</button>
            </div>
            <div className="printable-content" ref={componentRef}>
                <br /><br /><br />
      <h1 className="text-3xl ml-80 font-semibold text-black mb-4">REQUESTED LIST</h1>
      <div className="overflow-x-auto">
        <div className="min-w-full rounded-lg overflow-auto">
          <table className="bg-white shadow-md rounded-lg border border-gray-900">
            <thead>
              <tr style={{ backgroundColor: 'black', color: 'white' }}>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Names</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Supported documents</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date Received</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Select</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={report._id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white hover:bg-gray-200'}>
                  <td className="px-6 py-4 whitespace-no-wrap ">{report.firstName}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{report.email}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{report.phone}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {report.attachment && report.attachment.map((attachment, index) => (
                      <div key={index}>
                        <a href={attachment.path} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {attachment.path}
                        </a>
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">{new Date(report.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                  {report.selected ? (
              <button onClick={() => handleUnselectForm(report._id)} className="text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded-md">
                Unselect
              </button>
            ) : (
              <button onClick={() => handleSelectForm(report._id)} className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-md">
                Select
              </button>
            )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProblemReportList;
