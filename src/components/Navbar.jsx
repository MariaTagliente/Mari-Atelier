import { FiTruck } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { PiHeartBold } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false);
    const [page, setPage] = useState("menu");

    useEffect(()=>{
        if(menuOpen){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
        
        return ()=>{
            document.body.style.overflow = "auto";
        };
    
    }, [menuOpen]);

    return(
        <>
            {/* TOP BAR */}
            <div className="w-full hidden md:block bg-(--rosaLight) text-(--rosaDark) text-[11px] font-medium tracking-[1px] uppercase animate-fadeDown">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                    <span className="flex items-center gap-2">
                        <PiHeartBold size={15}/>
                        Fatto a mano, con amore
                    </span>

                    <span className="flex items-center gap-2">
                        Spedizioni in tutta Italia
                        <FiTruck size={15}/>
                    </span>

                    <a href="https://www.instagram.com/mariatelier.handmade/?hl=it" target="_blank"className="flex items-center gap-2 hover:opacity-70 transition">
                        Seguimi su Instagram
                        <FaInstagram size={15}/>
                    </a>

                </div>
            </div>


            {/* NAVBAR */}
            <div className="w-full text-(--marrone) p-2 bg-(--pannaLight) animate-fadeUp">

                <div className="container mx-auto px-6 navbar">

                    {/* MOBILE MENU BUTTON */}
                    <div className="navbar-start lg:hidden">

                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-(--marrone)">
                            {menuOpen ? <IoCloseOutline size={30}/> : <SlMenu size={22}/> }                          
                        </button>
                    </div>

                    {/* DESKTOP LOGO */}
                    <div className="navbar-start hidden lg:flex">

                        <Link to={'/'} className="transition-opacity duration-300 hover:opacity-80">
                            <div className="flex flex-col leading-none">
                                <h1 className="font-alexBrush text-4xl md:text-5xl">
                                    Mari Atelier
                                </h1>

                                <div className="flex items-center justify-center">
                                    <span className="flex-1 h-px bg-(--marrone)"></span>
                                    <h2 className="text-center font-cormorant font-bold text-[8px] md:text-[11px] tracking-[4px] mx-2">
                                        HANDMADE CREATIONS
                                    </h2>
                                    <span className="flex-1 h-px bg-(--marrone)"></span>
                                </div>
                            </div>
                        </Link>

                    </div>

                    {/* MOBILE LOGO */}
                    <div className="navbar-center lg:hidden">

                        <Link to={'/'} className="flex flex-col leading-none text-center">
                            <h1 className="font-alexBrush text-4xl">
                                Mari Atelier
                            </h1>

                            <div className="flex items-center">
                                <span className="flex-1 h-px bg-(--marrone)" />
                                <h2 className="mx-1 text-[8px] tracking-[3px] font-cormorant font-bold">
                                    HANDMADE CREATIONS
                                </h2>
                                <span className="flex-1 h-px bg-(--marrone)" />
                            </div>
                        </Link>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="navbar-center hidden lg:flex">

                        <ul className="menu menu-horizontal gap-6 font-medium">
                            <li>
                                <Link to={'/'} className="nav-link">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <details>
                                    <summary className="bg-transparent transition-colors duration-300 hover:text-(--rosaDark)">Shop</summary>
                                    <ul className="p-2 w-50 bg-(--rosaLight)">
                                        <li>
                                            <a className="bg-transparent hover:text-(--rosaDark)">
                                                Borse
                                            </a>
                                        </li>

                                        <li>
                                            <a className="bg-transparent hover:text-(--rosaDark)">
                                                Bikini
                                            </a>
                                        </li>

                                        <li>
                                            <a className="bg-transparent hover:text-(--rosaDark)">
                                                Amigurumi
                                            </a>
                                        </li>

                                        <li>
                                            <a className="bg-transparent hover:text-(--rosaDark)">
                                                Accessori
                                            </a>
                                        </li>

                                    </ul>

                                </details>
                            </li>

                            <li>
                                <Link className="nav-link">Personalizzazioni</Link>
                            </li>

                            <li>
                                <Link className="nav-link">Chi sono</Link>
                            </li>

                            <li>
                                <Link className="nav-link">Contatti</Link>
                            </li>
                        </ul>
                    </div>

                    {/* ICONS */}
                    <div className="navbar-end">

                        <div className="flex gap-3 md:gap-6 text-lg md:text-xl">
                            <PiHeartBold className="text-(--rosaDark) hover:scale-110 transition-transform"/>

                            <div className="relative">
                                <HiOutlineShoppingBag/>
                                <span className="absolute -top-2 -right-2 bg-(--rosaDark) text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </div>
                           
                        </div>

                    </div>

                </div>
            </div>


            {/* MOBILE DRAWER */}
            {menuOpen && (
                <>

                <div className="fixed top-[80px] md:top-[128px] left-0 right-0 bottom-0 bg-black/50 z-[998] lg:hidden"></div>

                <div className="fixed top-[80px] md:top-[128px] left-0 bottom-0 z-[999] w-full md:w-[380px] lg:hidden">
                    <aside className="relative h-full bg-(--rosaLight) md:shadow-xl md:shadow-gray-800 overflow-hidden">

                        {/* MENU PRINCIPALE */}
                        <div className={`absolute inset-0 px-8 py-10 transition-transform duration-300 ease-in-out
                        ${page === "menu" ? "translate-x-0" : "-translate-x-full"}`}>
                            
                            <ul className="flex flex-col gap-6 text-(--marrone) font-medium">
                                <li><Link to={'/'} onClick={()=>setMenuOpen(false)}>Home</Link></li>

                                <li>
                                    <button onClick={()=>{
                                        setPage("shop");
                                        }} className="w-full flex justify-between items-center">
                                            
                                            <span>Shop</span>
                                            <FaArrowRightLong size={18}/>
                                    </button>
                                </li>
                                
                                <li>Personalizzazioni</li>
                                <li>Chi sono</li>
                                <li>Contatti</li>                           
                            </ul>
                        </div>
                        
                        <div className={`absolute inset-0 bg-(--rosaLight) transition-transform duration-300 ease-in-out
                           ${page === "shop" ? "translate-x-0" : "translate-x-full"}`}>
                            <div className="bg-(--rosaDark) text-(--pannaLight) px-8 py-3">
                                
                                <button onClick={() => setPage("menu")} className="flex items-center gap-3">
                                    <FaArrowLeftLong />
                                    Shop
                                </button>
                            </div>
                            
                            <ul className="mt-6 px-8 flex flex-col gap-6 font-medium text-(--marrone)">
                                <li>Borse</li>
                                <li>Bikini</li>
                                <li>Amigurumi</li>
                                <li>Accessori</li>
                            </ul>
                        </div>
                                            
                    </aside>
                </div>
                </>
            )}
        </>
    )
}