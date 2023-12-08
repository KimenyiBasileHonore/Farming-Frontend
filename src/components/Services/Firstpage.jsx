import React from "react";
import Report from "../Admin/Report";
// import { Link  } from "react-router-dom"

export default function Firstpage() {

    return (
        <div>
            <header className="text-center ">
                <h1 className="text-4xl font-bold mt-16 text-gray-900">Dashboard</h1>
                {/* Your logo here */}
            </header>

            <div className="p-6  ">
            <Report />
                <section class="text-gray-600  body-font">
                    
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 lg:w-1/3">
                                <div class="h-full bg-gradient-to-b from-purple-400 to-indigo-500 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Imigani migufi</h1>
                                    <p class="leading-relaxed font-medium text-black mb-3">Umugani n’ipfundo ry’amagambo atonze neza,Gacamigani yakagiriyemo ihame ridutoza gukora iki cyangwa se kudakora kiriya.</p>
                                    {/* <Link 
                                class="text-indigo-500 inline-flex items-center"
                                onClick={"Imigani"}>Learn More

                                </Link> */}
                                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">

                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 lg:w-1/3">
                                <div class="h-full bg-gradient-to-b from-purple-400 to-indigo-500 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Incamarenga</h1>
                                    <p class="leading-relaxed font-medium text-black mb-3">Umuntu aca amarenga ashaka kubwira uwo baziranye, icyo adashaka kubwira abamwumva bose. </p>
                                    {/* <Link class="text-indigo-500 inline-flex items-center">Learn More

                                </Link> */}
                                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">

                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 lg:w-1/3">
                                <div class="h-full bg-gradient-to-b from-purple-400 to-indigo-500 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ikenshavugo</h1>
                                    <p class="leading-relaxed font-medium text-black mb-3">Ikeshamvugo ni ubuhanga bukoreshwa mu kuvuga no guhanga mu kinyarwanda. Iyo akaba ari imvugo inoze, yuje ikinyabupfura, ifite inganzo kandi ivugitse ku buryo bunoze.</p>
                                    {/* <Link class="text-indigo-500 inline-flex items-center">Learn More

                                </Link> */}
                                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 lg:w-1/3">
                                <div class="h-full bg-gradient-to-b from-purple-400 to-indigo-500 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ibisakuzo</h1>
                                    <p class="leading-relaxed font-medium text-black mb-3">Ibisakuzo ni umukino wo mu magambo, ibibazo n’ibisubizo bihimbaza abakuru n’abato kandi birimo ubuhanga. </p>
                                    {/* <Link class="text-indigo-500 inline-flex items-center">Learn More

                                </Link> */}
                                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">

                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 lg:w-1/3">
                                <div class="h-full bg-gradient-to-b from-purple-400 to-indigo-500 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Isomero</h1>
                                    <p class="leading-relaxed font-medium text-black mb-3">U Rwanda ntirufite amateka maremare ajyanye n'Ubuvanganzo bwanditse, ariko hari ubuvangazo
                                        nyemvugo bikomeye bishingiye ku busizi. </p>
                                    {/* <Link class="text-indigo-500 inline-flex items-center"  onClick={() => handleItemClick("Isomero")}>Learn More
                                </Link> */}
                                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}