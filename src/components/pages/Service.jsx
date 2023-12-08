import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sprinkler from "../../imgs/Sprinkler.jpg"
import treadle from "../../imgs/treadle.jpeg"
import tank from "../../imgs/tank.png"
import dam from "../../imgs/dam.jpg"
import pump from "../../imgs/pump.jpeg"
import "./Service.css";

export default function Service() {

    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
        const isLoggedIn = true;
        if (isLoggedIn) {
            navigate("/Dashboard");
        } else {
            navigate("/Login");
        }
    };
    return (

        <div className="font-serif text-gray-700 flex body-font bg-image">
            <div className="container px-60 py-8  mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 let rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Sprinkler</h1>
                            <p className="leading-relaxed  mb-3">We give you Sprinklers. An irrigation sprinkler is a simple yet powerful device that plays a crucial role in supporting agriculture, maintaining lush lawns, and beautifying landscapes. These versatile tools help farmers, gardeners, and homeowners efficiently water their crops.</p>
                        
                        </div>
                        <img src={Sprinkler} alt="" className="wewe h-70 absolute top-0 left-0 z-0" />
                    </div>
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 mt-64 rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Portable Diesel Water Pumps</h1>
                            <p className="leading-relaxed mb-3">We give you Portable Diesel Water Pumps. These versatile devices are essential for a wide range of applications, from agriculture to emergency water management. Portable Diesel Water Pumps are known for their reliability and efficiency.  </p>
                            
                        </div>
                        <img src={pump} alt="" className="wewe h-80 absolute top-0 left-0 z-0" />
                    </div>
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 mt-64 rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Treadle pump</h1>
                            <p className="leading-relaxed mb-3">We give you Treadle Pumps. These simple yet effective devices are designed to empower farmers in remote and off-grid areas by providing an accessible and efficient means of irrigation.</p>
                            
                        </div>
                        <img src={treadle} alt="" className="wewe h-80 absolute top-0 left-0 z-0" />
                    </div>
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 dam rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Dam sheet </h1>
                            <p className="leading-relaxed mb-3">We give you Dam Sheets. These durable and versatile sheets are an integral part of water resource management for agriculture and environmental conservation. </p>
                            
                        </div>
                        <img src={dam} alt="" className="wewe h-80 absolute top-0 left-0 z-0" />
                    </div>
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 mt-64 rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Water tank</h1>
                            <p className="leading-relaxed mb-3">We give you Water Tanks for Drip Irrigation. These specialized tanks are the backbone of efficient and precise irrigation systems, especially in areas with water scarcity or the need for water conservation.</p>
                            
                        </div>
                        <img src={tank} alt="" className="wewe h-80 absolute top-0 left-0 z-0" />
                    </div>
                </div>
            </div>
        </div>

    );
}

