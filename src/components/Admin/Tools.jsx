import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const [materials, setMaterials] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [updatedMaterials, setUpdatedMaterials] = useState('');
    const [selectedTool, setSelectedTool] = useState(null);

    const openModal = (tool) => {
        setSelectedTool(tool);
        setUpdatedMaterials(tool.materials);
        setModalIsOpen(true);
    };

    const handleUpdate = () => {
        if (selectedTool) {
            handleUpdateTool(selectedTool._id, updatedMaterials);
            closeModal();
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
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

    const handleCreateTool = async () => {
        try {
            await axios.post('http://localhost:2023/api/mateliars/tools', { materials });
            // After creating a new tool, fetch the updated list of tools
            fetchTools();
            // Clear the materials input
            setMaterials('');
        } catch (error) {
            console.error('Error creating tool:', error);
        }
    };

    const handleUpdateTool = async (id, updatedMaterials) => {
        try {
            await axios.put(`http://localhost:2023/api/mateliars/tools/${id}`, { materials: updatedMaterials });
            // After updating a tool, fetch the updated list of tools
            fetchTools();
        } catch (error) {
            console.error('Error updating tool:', error);
        }
    };

    const handleDeleteTool = async (id) => {
        try {
            await axios.delete(`http://localhost:2023/api/mateliars/tools/${id}`);
            // After deleting a tool, fetch the updated list of tools
            fetchTools();
        } catch (error) {
            console.error('Error deleting tool:', error);
        }
    };

    return (
        <div className=" font-serif container rounded-lg mx-auto px-4 py-8 bg-gray-300">
            <h1 className="text-3xl ml-72 font-bold text-black mb-4">TOOLS IN STOCK</h1>

            {/* Create Tool */}
            <div className="mb-8">
                <h2 className="text-3xl  font-semibold text-black mb-4">Add Tool</h2>
                <div className="flex">
                    <input
                        className="border border-gray-400 p-2 w-64 mr-2"
                        type="text"
                        placeholder="Materials"
                        value={materials}
                        onChange={(e) => setMaterials(e.target.value)}
                    />
                    <button
                        className="bg-black text-white px-4 py-2 rounded"
                        onClick={handleCreateTool}
                    >
                        Create
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-3xl  font-semibold text-black mb-4">Tools List </h2>
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr style={{ backgroundColor: '#6B46C1', color: 'white' }}>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Materials
                            </th>
                            <th className=" text-xs text-right px-6 py-3 font-medium uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tools.map((tool) => (
                            <tr key={tool._id} className="mb-2">
                                <td className="mr-2 px-4">{tool.materials}</td>
                                <td className="text-right px-2">
                                    <button
                                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => openModal(tool)}
                                    >
                                        Update
                                    </button>

                                    <Modal
                                        isOpen={modalIsOpen}
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
                                                maxWidth: '400px', // Adjust the width as needed
                                                width: '100%',
                                                background: 'white', // Set a background color
                                            },
                                        }}
                                    >
                                        <div>
                                            <p className="text-lg font-semibold mb-4">Update Materials</p>
                                            <input
                                                type="text"
                                                value={updatedMaterials}
                                                onChange={(e) => setUpdatedMaterials(e.target.value)}
                                                className="border border-gray-300 p-2 mb-2 w-full"
                                            />
                                            <div className="flex justify-end">
                                                <button
                                                    onClick={handleUpdate}
                                                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                                                >
                                                    Update
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

                                    <button
                                        className="bg-red-500  text-white px-2 py-1 rounded"
                                        onClick={() => handleDeleteTool(tool._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tools;
