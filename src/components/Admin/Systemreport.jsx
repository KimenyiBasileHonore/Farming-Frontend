import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import download from "../../imgs/download.png";
import icons8 from "../../imgs/icons8.png";
import "./Maindashboard.css";



const Dashboard = () => {
    const [farmerCount, setFarmerCount] = useState(0);
    const [requestCount, setRequestCount] = useState(0);
    const [respondCount, setRespondCount] = useState(0);
    const [mateliarsCount, setMateliarsCount] = useState(0);
    const [directorCount, setDirectorCount] = useState(0);
    const [feedbackCount, setFeedbackCount] = useState(0);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', options)
    };

    useEffect(() => {
        // Fetch and set the user count
        axios.get('http://localhost:2023/api/report/farmer-count')
            .then((response) => {
                setFarmerCount(response.data.count);
            })
            .catch((error) => {
                console.error('Error fetching user count:', error);
            });


        axios.get('http://localhost:2023/api/report/requested-count')
            .then((response) => {
                setRequestCount(response.data.count);
            })
            .catch((error) => {
                console.error('Error fetching company count:', error);
            });

       
        axios.get('http://localhost:2023/api/report/respond-count')
            .then((response) => {
                setRespondCount(response.data.count);
            })
            .catch((error) => {
                console.error('Error fetching problem report count:', error);
            });
        axios.get('http://localhost:2023/api/report/mateliars-count')
            .then((response) => {
                setMateliarsCount(response.data.count);
            })
            .catch((error) => {
                console.error('Error fetching problem report count:', error);
            });
        axios.get('http://localhost:2023/api/report/director-count')
            .then((response) => {
                setDirectorCount(response.data.count);
            })
            .catch((error) => {
                console.error('Error fetching problem report count:', error);
            });
        axios.get('http://localhost:2023/api/report/feedback-count')
            .then((response) => {
                setFeedbackCount(response.data.count);
            })
            .catch((error) => {
                console.error('Error fetching problem report count:', error);
            });
    }, []);

    return (
        <div className="font-serif container mx-auto px-4 py-8">
            {/* <h1 className="text-3xl font-semibold text-black mb-4">System Report</h1> */}
            <div className="pdf-button-container">
                <button className="pdf-button" onClick={handlePrint}>Download</button>
            </div>
            <div className="printable-content" ref={componentRef}>
                <br /><br /><br />
                <div className="flex justify-between items-center">
                    <div className="icyi">
                        <div className="center-logo">
                            <img
                                src={download}
                                className="w-20 mr-4 icyi rounded-lg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className='center mt-8'>
                        <h1 className='bold font-medium'>REPUBLIC OF RWANDA</h1>
                        <h1 className='uppercase'>Ministry of Agriculture and Animal Resources</h1>
                    </div>
                    <div className="icyi">
                        <div className="center-logo">
                            <img
                                src={icons8}
                                className="w-20 mr-4 icyi rounded-lg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <br />
                <hr className='custom-hr' style={{ fontSize: '8rem' }} />

                <br /><br />
                <h1 className='center text-bold uppercase  font-medium ' >Small Scale Irrigation  Tools Distribution Technology</h1>
                <br />
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-900 text-white">
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Information</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-100">
                            <td className="px-6 py-4 whitespace-no-wrap">Registered farmers</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{farmerCount}</td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="px-6 py-4 whitespace-no-wrap">Reported request</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{requestCount}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="px-6 py-4 whitespace-no-wrap">Responded Farmers</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{respondCount}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="px-6 py-4 whitespace-no-wrap">Mateliars in stock</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{mateliarsCount}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="px-6 py-4 whitespace-no-wrap">Registered Engineer</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{directorCount}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="px-6 py-4 whitespace-no-wrap">Feedback message</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{feedbackCount}</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginTop: '30rem', textAlign: 'center' }}>
                    <p>Kigali, Rwanda Done on</p><br /> {formattedDate}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
