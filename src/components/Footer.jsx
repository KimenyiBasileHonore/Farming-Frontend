import React,{useState} from "react";
import { Link } from "react-router-dom";
import icons8 from"../imgs/icons8.png";
import "./Home.css";

 export default function Footer(){
    const [isShown ,setIsShown]=useState(false);
    const [areShown, setAreShown]=useState(false);
    const [onShown, setOnShown]=useState(false);
    return(
        <div className="font-serif footer">
            <div class="justify-center my-holder flex ">
                <img src={icons8} alt="" class="w-20 h-20  ml-16 rounded-lg"/>
                <h1 class="flex flex-wrap py-8 text-white text-xl ml-0 font-bold">
                SSITD
                </h1>
            </div>
            <div class=" flex gap-10 mb-6 text-base font-normal justify-center text-white">
                <Link
                to="#"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                    Overview
                    {isShown && (
                        <ul class ="py-3">
                            <li>
                                <Link to="/About">Service</Link>
                            </li>

                        </ul>
                    )} {" "}
                </Link>

                <Link
                to="#"
                onMouseEnter={() => setAreShown(true)}
                onMouseLeave={() => setAreShown(false)}>
                    Social Media
                    {areShown && (
                        <ul class=" py-3 w-fit">
                            <li>
                                <Link to="#">Twitter</Link>
                            </li>
                            <li>
                                <Link to="#">Instagram</Link>
                            </li>
                            <li>
                                <Link to="#">Facebook</Link>
                            </li>
                            <li>
                                <Link to="#">Telegram</Link>
                            </li>
                        </ul>
                    )}
                </Link>

                <Link
                to="#"
                onMouseEnter={() => setOnShown(true)}
                onMouseLeave={() => setOnShown(false)}>
                    Help 
                    {onShown && (
                        <div class="py-3">
                            <div>
                                <Link to="/Contact">FAQ</Link>
                            </div>
                            <div>
                                <Link to="/Contact">Contact Costomer 
                                <br/>
                                Care Service 
                                </Link>
                            </div>
                        </div>
                    )}
                </Link>

            </div>
            <hr/>
            <div class="div-cont mt-12">
                <div class="wrap-but-inpt ml-10 p-1 bg-white">
                    <input
                    type="email"
                    id="email"
                    clas="email-input outline-none"
                    placeholder="enter your email"
                    required/>
                    <button class="btno  p-2 lounded-lg">Subscribe</button>
                </div>
                <p class="copy"> Copyright SSITD@2023</p>
                
            </div>
        </div>  
         );

 }