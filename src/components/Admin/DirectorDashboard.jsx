import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDoorOpen, faQuestionCircle,  faCheck, faPaperPlane,} from '@fortawesome/free-solid-svg-icons';
// import RequestedDonation from './RequestedDonation';
import { useNavigate } from 'react-router-dom';
import Mateliars from "../Admin/Mateliars";
import RespondFarmar from "./RespondFarmar";
import AllAssigned from "./AllAssigned"; 
import thin from '../../imgs/thin.png';



export default function Dashboard() {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState("Requested donation");
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
        <div className="font-serif flex h-screen">
            {/* Sidebar */}
            <div className="fixed w-1/4 h-screen bg-gray-400 flex flex-col">

                <div className='mb-4'>
                    <h1 className="text-3xl mt-8 ml-16  font-semibold text-black ">
                    <img
                  src={thin}
                  className="bg-white w-20"
                  alt=""
                /> Engineer
                    </h1>

                </div>

                <ul className="py-4 ml-2 mt-4 flex-grow">
                    
                   {/* <li
                        className={`py-2 px-6 text-black font-bold  hover:bg-gray-300 cursor-pointer ${selectedItem === "Requested donation" ? "bg-white" : ""
                            }`}
                        onClick={() => handleItemClick("Requested donation")}
                    > */}
                        {/* <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" size="lg" /> Problem icon */}
                        {/* Requested donation */}
                    {/* </li> */}

                    <li
                        className={`py-2 px-6 text-black font-bold  hover:bg-gray-300 cursor-pointer ${selectedItem === "Materials in Stoke" ? "bg-white" : ""
                            }`}
                        onClick={() => handleItemClick("Materials in Stoke")}
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" size="lg" /> {/* Problem icon */}
                        Materials in Stoke
                    </li>
                    <li
                        className={`py-2 px-6 text-black font-bold hover:bg-gray-300 cursor-pointer ${selectedItem === "Respond Farmar" ? "bg-white" : ""
                            }`}
                        onClick={() => handleItemClick("Respond Farmar")}
                    >
                        <FontAwesomeIcon icon={faCheck} className="mr-2" size="lg" />
                        Respond Farmar
                    </li>
                    <li
                        className={`py-2 px-6 text-black font-bold hover:bg-gray-300 cursor-pointer ${selectedItem === "Given Materials" ? "bg-white" : ""
                            }`}
                        onClick={() => handleItemClick("Given Materials")}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" size="lg" />
                        Given Materials
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
                    
                    {/* {selectedItem === "Requested donation" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <RequestedDonation />
                                </div>
                            </div>
                        </section>
                    )} */}
                    {selectedItem === "Materials in Stoke" && (
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <Mateliars/>
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
                    
                </div>
            </div>
        </div>
    );
}
