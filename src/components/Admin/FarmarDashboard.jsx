import React, { useState, useRef, useEffect } from 'react';
import DonationForm from "../Admin/DonationForm";
import Mateliars from "../Admin/Mateliars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faExclamationCircle,
    faChartLine,
    faDoorOpen,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import AssignedMatelliars from "../Admin/AssignedMatelliars";


export default function Dashboard() {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState("Sending request");
    const mainContentRef = useRef(null);

    const handleLogout = () => {
        navigate('/');

    };

    useEffect(() => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, []);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        if (mainContentRef.current) {
            mainContentRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="font-serif flex h-screen ">
            {/* Sidebar */}
            <div className="fixed w-1/4 h-screen bg-cyan-600 flex flex-col">
                <div>
                    <h1 className="text-3xl mt-8 ml-24 font-semibold text-black">
                       
                        <br />
                        <div className="flex items-center mt-2">
                            <div className="bg-gray-500 rounded-full p-4">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    size="2x"
                                    className="text-white"
                                    aria-label="User Icon"
                                />FARMER 
                            </div>
                        </div>
                    </h1>


                </div>

                <ul className="py-4 ml-2 mt-16 flex-grow ">
                    <li
                        className={`py-2 px-6 text-white hover:bg-yellow-700 cursor-pointer ${selectedItem === 'Sending request' ? 'bg-black' : ''
                            }`}
                        onClick={() => handleItemClick('Sending request')}
                    >
                        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
                        Sending request
                    </li>
                    <li
                        className={`py-2 px-6 text-white hover:bg-yellow-800 cursor-pointer ${selectedItem === 'Materials in Stoke' ? 'bg-black' : ''
                            }`}
                        onClick={() => handleItemClick('Materials in Stoke')}
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Materials in Stoke
                    </li>
                    <li
                        className={`py-2 px-6 text-white hover:bg-yellow-800 cursor-pointer ${selectedItem === 'Received Materials' ? 'bg-black' : ''
                            }`}
                        onClick={() => handleItemClick('Received Materials')}
                    >
                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
                        Received Materials 
                    </li>
                </ul>

                {/* Rest of the sidebar content */}
                <div className="flex-grow"></div>
                <div className="p-4 ml-4">
                    <button
                        className="bg-black hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded"
                        onClick={handleLogout}
                    >
                        <FontAwesomeIcon icon={faDoorOpen} className="mr-2" />
                        Log Out
                    </button>
                </div>
            </div>



            <div className="w-3/4 bg-white ml-80 goooo">
                <div className="bg-gray-300 ml-5 py-4 px-6 fixed top-0 w-3/4 z-10">
                    <h2 className="text-lg font-semibold">{selectedItem || "Content"}</h2>
                </div>

                <div className="p-6" ref={mainContentRef}>
                    {selectedItem === "Sending request" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <DonationForm />
                                </div>
                            </div>
                        </section>
                    )}
                    {selectedItem === "Materials in Stoke" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <Mateliars/>
                                </div>
                            </div>
                        </section>
                    )}
                    {selectedItem === "Received Materials" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <AssignedMatelliars/>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
