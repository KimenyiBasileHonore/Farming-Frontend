import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDoorOpen, faQuestionCircle, faDesktop, faCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import RequestedDonation from './RequestedDonation';
import { useNavigate } from 'react-router-dom';
import Systemreport from '../Admin/Systemreport';
import Registereduser from './Registereduser';
import Tools from './Tools';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import RespondFarmar from "./RespondFarmar";
import AllAssigned from "./AllAssigned";
import Feedback from "../Services/Feedback";



export default function Dashboard() {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState("Registered user");
    const mainContentRef = useRef(null);

    const handleLogout = () => {
        navigate('/');
        // Handle logout logic here
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
        <div className="font-serif flex h-screen">
            {/* Sidebar */}
            <div className="fixed w-1/4 h-screen bg-indigo-900 flex flex-col">

                <div>
                    <h1 className="text-3xl mt-8 ml-24 font-semibold text-black ">
                        <FontAwesomeIcon icon={faUserShield} size="2x" /> SSITD
                    </h1>

                </div>

                <ul className="py-4 ml-2 mt-16 flex-grow">
                    <li
                        className={`py-2 px-6 text-black font-bold hover:bg-gray-300 cursor-pointer ${selectedItem === "Registered user" ? "bg-gray-300" : ""
                            }`}
                        onClick={() => handleItemClick("Registered user")}
                    >
                        <FontAwesomeIcon icon={faUser} className="mr-2" size="lg" /> {/* User icon */}
                        Registered user
                    </li>
                    <li
                        className={`py-2 px-6 text-black font-bold  hover:bg-gray-300 cursor-pointer ${selectedItem === "Requested donation" ? "bg-gray-300" : ""
                            }`}
                        onClick={() => handleItemClick("Requested donation")}
                    >
                        <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" size="lg" /> {/* Problem icon */}
                        Requested donation
                    </li>
                    <li
                        className={`py-2 px-6 text-black font-bold hover:bg-gray-300 cursor-pointer ${selectedItem === "Mateliars" ? "bg-gray-300" : ""
                            }`}
                        onClick={() => handleItemClick("Mateliars")}
                    >

                        <FontAwesomeIcon icon={faTools} className="mr-2" size="lg" />
                        Mateliars
                    </li>
                    <li
                        className={`py-2 px-6 text-black font-bold hover:bg-gray-300 cursor-pointer ${selectedItem === "Respond Farmar" ? "bg-gray-300" : ""
                            }`}
                        onClick={() => handleItemClick("Respond Farmar")}
                    >
                        <FontAwesomeIcon icon={faCheck} className="mr-2" size="lg" />
                        Respond Farmar
                    </li>
                    <li
                        className={`py-2 px-6 text-black font-bold hover:bg-gray-300 cursor-pointer ${selectedItem === "Given Materials" ? "bg-gray-300" : ""
                            }`}
                        onClick={() => handleItemClick("Given Materials")}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" size="lg" />
                        Given Materials
                    </li>
                    <li
                        className={`py-2 px-6 text-black font-bold hover:bg-gray-300 cursor-pointer ${selectedItem === "Feedback" ? "bg-gray-300" : ""}`}
                        onClick={() => handleItemClick("Feedback")}
                    >
                        <FontAwesomeIcon icon={faComment} className="mr-2" size="lg" />
                        Feedback
                    </li>
                    <li
                        className={`py-2 px-6 text-black font-bold hover:bg-gray-300 cursor-pointer ${selectedItem === "System report" ? "bg-gray-300" : ""
                            }`}
                        onClick={() => handleItemClick("System report")}
                    >
                        <FontAwesomeIcon icon={faDesktop} className="mr-2" size="lg" />
                        Report
                    </li>
                </ul>

                {/* Rest of the sidebar content */}
                <div className="flex-grow"></div>
                <div className="p-4  ml-4">
                    <button
                        className="bg-green-900 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleLogout}
                    >
                        <FontAwesomeIcon icon={faDoorOpen} className="mr-2" />
                        Log Out
                    </button>

                </div>
            </div>

            {/* Main content */}
            <div className="w-3/4 bg-white ml-80 goooo">
                <div className="bg-gray-300 ml-5 py-4 px-6 fixed top-0 w-3/4 z-10">
                    <h2 className="text-lg font-semibold">{selectedItem || "Content"}</h2>
                </div>

                <div className="p-6" ref={mainContentRef}>
                    {selectedItem === "Registered user" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <Registereduser />
                                </div>
                            </div>
                        </section>
                    )}

                    {selectedItem === "Requested donation" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <RequestedDonation />
                                </div>
                            </div>
                        </section>
                    )}
                    {selectedItem === "Mateliars" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <Tools />
                                </div>
                            </div>
                        </section>
                    )}
                    {selectedItem === "Respond Farmar" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <RespondFarmar />
                                </div>
                            </div>
                        </section>
                    )}
                    {selectedItem === "Given Materials" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <AllAssigned />
                                </div>
                            </div>
                        </section>
                    )}
                    {selectedItem === "Feedback" && (
            <section className="text-gray-600  body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Feedback />

                </div>
              </div>
            </section>
          )}
                    {selectedItem === "System report" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <Systemreport />
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
