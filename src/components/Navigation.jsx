import React from "react";
import { Link } from "react-router-dom";
import icons8 from "../imgs/icons8.png";
import "./Home.css";

export default function Navigation() {
  return (
    <div>
      <nav className="font-serif mb-4 px-10 nav rounded">
        <div className="text-white">
          <div className="px-0.5 pt-0.5 lg:px-8">
            <nav className="flex items-center">
              <div className="flex lg:flex-1">
                <img
                  src={icons8}
                  className="w-10 float-left ml-16 rounded-lg"
                  alt=""
                />
                <span className="text-brown mt-3 font-bold">SSITD</span>
              </div>
              <div className="hidden lg:flex lg:gap-x-12 font-bold">
                <Link to="Home" className="text-base text-brown font-bold hover:bg-cyan-950 hover:text-white">
                  Home
                </Link>
                <Link to="About" className="text-base text-brown font-bold hover:bg-cyan-950 hover:text-white">
                  About
                </Link>
                <Link to="Contact" className="text-base text-brown font-bold hover:bg-cyan-950 hover:text-white">
                  Contact
                </Link>
              </div>
              <div className="flex lg:flex lg:flex-1 lg:justify-end font-bold mr-10">
                <Link
                  to="Login"
                  className="w-32 text-white font-medium rounded-full text-sm px-6 py-2.5 text-center bg-blue-900 hover:bg-cyan-950 hover:text-white rounded py-1 px-2 rounded"
                >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}
