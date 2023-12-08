import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Assigning = () => {
    const [tools, setTools] = useState([]);
    const [reports, setReports] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [updatedMaterials, setUpdatedMaterials] = useState('');
    const [selectedTool, setSelectedTool] = useState(null);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState('');

    const [modalStates, setModalStates] = useState({});

    const openModal = (report) => {
      setSelectedTool(report);
      setSelectedEmail(report.email)
      setModalStates({
        ...modalStates,
        [report._id]: true,
      });
    };
  
    const closeModal = () => {
      setSelectedTool(null);
      setModalStates({
        ...modalStates,
        [selectedTool._id]: false,
      });
    };

    const [selectedTools, setSelectedTools] = useState([]);

    const handleToolSelect = (toolId) => {
        const isSelected = selectedMaterials.includes(toolId);

        if (isSelected) {
            setSelectedMaterials(selectedMaterials.filter((id) => id !== toolId));
        } else {
            setSelectedMaterials([...selectedMaterials, toolId]);
        }
        console.log(selectedMaterials);
    };

    const handleUpdate = () => {
        if (selectedTool) {
            handleUpdateTool(selectedTool._id, updatedMaterials, selectedMaterials);
            closeModal();
        }
    };

    
    useEffect(() => {
        fetchTools();
    }, []);

    const fetchTools = async () => {
        try {
            const response = await axios.get('http://localhost:2023/api/mateliars/tools');
            setTools(response.data.tools);
        } catch (error) {
            console.error('Error fetching tools:', error);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:2023/api/donation/selected-forms')
          .then((response) => {
            const selectedForms = response.data.selectedForms;
            setReports(selectedForms);
          })
          .catch((error) => {
            console.error('Error fetching reports:', error);
          });
      }, []);
      
      


    const handleUpdateTool = async (id, updatedMaterials, selectedMaterials) => {
        try {
            await axios.put(`http://localhost:2023/api/mateliars/mateliarltools/${id}`, {
                user: selectedEmail,
                selectedMaterials: selectedMaterials,
            });
            
            fetchTools();
        } catch (error) {
            console.error('Error updating tool:', error);
        }
    };


    return (
        <div className="font-serif container rounded-lg mx-auto px-4 py-8 bg-gray-200">
            <h1 className="text-3xl ml-36  font-bold text-black mb-4">ASSIGNING MATERIALS TO FARMERS</h1>

            {/* Create Tool */}

            <div>

                <table className=" ml-64 w-64 bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr style={{ backgroundColor: '#6B46C1', color: 'white' }}>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Emails
                            </th>
                            <th className=" text-xs text-right px-6 py-3 font-medium uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {reports && reports.map((report) => (
                            <tr key={report._id} className="mb-2">
                                <td className="mr-2 px-4">{report.email}</td>
                                <td className="text-right px-2">
                                    <button 
                                        
                                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => openModal(report)}   
                                    >
                                        Select
                                    </button>

                                    <Modal
                                          isOpen={modalStates[report._id] || false}
                                          onRequestClose={closeModal}
                                          contentLabel="Update Materials Modal"
                                        style={{
                                            overlay: {
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            },
                                            content: {
                                                top: '50%',
                                                left: '50%',
                                                right: 'auto',
                                                bottom: 'auto',
                                                transform: 'translate(-50%, -50%)',
                                                border: '2px solid #ccc',
                                                borderRadius: '8px',
                                                padding: '20px',
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                maxWidth: '400px',
                                                width: '100%',
                                                background: 'white',
                                            },
                                        }}
                                    >
                                        <div>
                                            <p className="text-lg font-semibold mb-4">Select Materials</p>
                                            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                                <thead>
                                                    <tr style={{ backgroundColor: '#6B46C1', color: 'white' }}>
                                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                                            <div className="flex items-center">
                                                                
                                                                Materials
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {tools.map((tool) => (
                                                        <tr key={tool._id} className="mb-2">
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="flex items-center">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedMaterials.includes(tool._id)}
                                                                        onChange={() => handleToolSelect(tool._id)}
                                                                        className="mr-2"
                                                                    />
                                                                    <span className="text-sm">{tool.materials}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <div className="flex justify-end">
                                                <button
                                                    onClick={handleUpdate}
                                                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                                                >
                                                    Assign
                                                </button>
                                                <button
                                                    onClick={closeModal}
                                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </Modal>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Assigning;
