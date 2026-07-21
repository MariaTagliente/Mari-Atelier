import { FiSearch, FiTruck } from "react-icons/fi";
import logo from "../assets/logo-mari-atelier.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { PiHeartBold } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";

export default function Navbar(){
    return(
        <>
            {/* TOP BAR */}
            <div className="w-full hidden md:block bg-(--rosaLight) text-(--rosaDark) text-[11px] font-medium tracking-[1px] uppercase">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    
                    <span className="flex items-center gap-2">
                        <PiHeartBold size={15}/>
                        Fatto a mano, con amore
                    </span>

                    <span className="flex items-center gap-2">
                        Spedizioni in tutta Italia
                        <FiTruck size={15}/>
                    </span>

                    <span className="flex items-center gap-2">
                        Seguimi su Instagram
                        <FaInstagram size={15}/>
                    </span>

                </div>
            </div>

            {/* NAVBAR */}
            <div className="w-full text-(--marrone) p-2 bg-(--pannaLight)">
                <div className="container mx-auto px-6 navbar">
                    
                    {/* LOGO */}
                    <div className="navbar-start">

                        {/* Mobile */}
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button" className="text-(--marrone)">
                                <SlMenu/>
                            </div>
                            
                            <ul className="menu dropdown-content mt-5 z-[100] w-50 rounded-box bg-(--pannaLight) shadow font-medium">
                                <li><a>Home</a></li>
                                <li>
                                    <details>
                                        <summary className="bg-transparent">Shop</summary>
                                        <ul className="p-2">
                                            <li><a className="hover:bg-(--rosaLight) text-(--rosaDark)">Borse</a></li>
                                            <li><a className="hover:bg-(--rosaLight) text-(--rosaDark)">Amigurumi</a></li>
                                            <li><a className="hover:bg-(--rosaLight) text-(--rosaDark)">Accessori</a></li>
                                        </ul>
                                    </details>
                                </li>
                                
                                <li><a>Personalizzazioni</a></li>
                                <li><a>Chi sono</a></li>
                                <li><a>Contatti</a></li>
                            </ul>
                        </div>

                        {/* Desktop */}
                        <div className="hidden lg:flex flex-col leading-none">
                            <h1 className="font-alexBrush text-4xl md:text-5xl">Mari Atelier</h1>
                            
                            <div className="flex items-center">
                                <span className="flex-1 h-px bg-(--marrone)"></span>
                                <h2 className="text-center font-cormorant font-bold text-[8px] md:text-[11px] tracking-[4px] ml-1.5 mr-1.5">HANDMADE CREATIONS</h2>
                                <span className="flex-1 h-px bg-(--marrone)"></span>
                            </div>    
                        </div>
                    </div>
                    
                    <div className="navbar-center">
                        {/* Mobile */}
                        <div className="lg:hidden flex flex-col leading-none text-center">
                            <h1 className="font-alexBrush text-4xl">
                                Mari Atelier
                            </h1>
                            
                            <div className="flex items-center">
                                <span className="flex-1 h-px bg-(--marrone)" />
                                <h2 className="mx-1 text-[7px] tracking-[3px] font-cormorant font-bold">
                                    HANDMADE CREATIONS
                                </h2>
                                <span className="flex-1 h-px bg-(--marrone)" />
                            </div>
                        </div>
                        
                        {/* Desktop */}
                        <ul className="hidden lg:flex menu menu-horizontal gap-8 font-medium">
                            <li>Home</li>
                            
                            <li>
                                <details>
                                    <summary className="bg-transparent">Shop</summary>
                                    <ul className="p-2 bg-(--pannaLight)">
                                        <li><a className="hover:bg-(--rosaLight)">Borse</a></li>
                                        <li><a className="hover:bg-(--rosaLight)">Amigurumi</a></li>
                                        <li><a className="hover:bg-(--rosaLight)">Accessori</a></li>
                                    </ul>
                                </details>
                            </li>
                            
                            <li>Personalizzazioni</li>
                            <li>Chi sono</li>
                            <li>Contatti</li>
                        </ul>
                    </div>
                    
                    <div className="navbar-end">
                        <div className="flex gap-3 md:gap-6 text-lg md:text-xl">
                            <FiSearch/>
                            <PiHeartBold className="text-(--rosaDark)"/>
                            <HiOutlineShoppingBag />
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}