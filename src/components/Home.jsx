import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="font-serif bg-image  museu ">
            <div className="flex ml-32">
                <div className="mar mb-15 bg-white center-div"style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <h1 className="text-5x3 font-bold w-full text-brown" style={{ fontSize: '40px', textAlign: 'center' }}>
                        SSITD
                    </h1>
                    <h2 className="font-bold text-brown" style={{ fontSize: "30px", textAlign: 'center' }}>
                    Small Scale Irrigation  Tools Distribution Technology
                    </h2>
                    
                    <Link to="/Signup">
                        <button className="text-center border-4 w-28 h-19 bg-brown text-brown mt-6 font-bold rounded-lg hover:bg-cyan-950 hover:text-white" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
                            Register
                        </button>
                    </Link>
                    
                </div>

            </div>
        </div>
    );
} 