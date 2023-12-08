import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const ToolsModal = ({modalIsOpen,toggleModal,handleUpdate}) => {
    const [tools, setTools] = useState([]);
    const [selectedTool, setSelectedTool] = useState(null);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
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
    const handleToolSelect = (toolId) => {
        const isSelected = selectedMaterials.includes(toolId);

        if (isSelected) {
            setSelectedMaterials(selectedMaterials.filter((id) => id !== toolId));
        } else {
            setSelectedMaterials([...selectedMaterials, toolId]);
        }
    };
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
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
                            onClick={toggleModal}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>

        </>
    )
}


export default ToolsModal