import React from "react";
import { Link } from "react-router-dom";
import about from "../../imgs/about.jpg";
import "../Home.css";



export default function About() {
    return (
        <div class="font-serif flex mt-2 px-10 book">
            
            <img src={about} alt="" class="nyambo mt-40 mb-10 " />
            <div class="flex-center tim ml-85 gap-2 colo mt-40  mb-10">
                <h1 class="font-bold text-xl ">About Us</h1>
                <p class="text-lg font-normal mt-5 ">
                we're here to support farmers. We give them the 
                tools they need to do their job better. We care 
                about sustainable farming, and we believe that 
                when farmers do well, it helps their communities. 
                We provide farmers with the latest tools to help 
                them work more efficiently and succeed. 
                Come join us in making farming better for everyone.



                </p>
                <Link to="/About">
                    <button class="text-center  border-2 w-32 h-10 rounded-lg text-sm mt-10 font-semibold btno">More</button>
                </Link>

            </div>

        </div>
    );
}