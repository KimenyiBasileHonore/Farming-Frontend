import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Tools = () => {
    const [tools, setTools] = useState([]);
    
    useEffect(() => {
        // Fetch the list of tools when the component mounts
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


    return (
        <div className="font-serif container rounded-lg mx-auto px-4 py-8 bg-gray-300">
            <h1 className="text-3xl ml-72 font-bold text-black mb-4">TOOLS IN STOCK</h1>

            

            <div>
                {/* <h2 className="text-3xl  font-semibold text-black mb-4">Tools List </h2> */}
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr style={{ backgroundColor: 'black', color: 'white' }}>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Materials
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {tools.map((tool) => (
                            <tr key={tool._id} className="mb-2">
                                <td className="mr-2 px-4">{tool.materials}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tools;
