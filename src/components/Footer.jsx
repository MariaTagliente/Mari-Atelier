import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Footer() {
    return (
        
        <footer className="bg-(--pannaLight)">

            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr] gap-12 md:gap-24">

                    {/* LOGO */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">

                        <Link to="/" className="inline-block transition-opacity duration-300 hover:opacity-80">
                            <div className="flex flex-col leading-none">

                                <h2 className="font-alexBrush text-5xl text-(--marrone)">
                                    Mari Atelier
                                </h2>

                                <div className="flex items-center">

                                    <span className="flex-1 h-px bg-(--marrone)"></span>

                                    <span className="mx-2 font-cormorant font-bold text-[11px] tracking-[4px] text-(--marrone)">
                                        HANDMADE CREATIONS
                                    </span>

                                    <span className="flex-1 h-px bg-(--marrone)"></span>

                                </div>

                            </div>
                        </Link>

                        <p className="mt-6 max-w-lg leading-7 text-(--colorTesto)/70">
                            Piccole creazioni nate dall'incontro tra fili, idee e passione, 
                            realizzate con cura per raccontare la tua unicità.
                        </p>

                    </div>

                    {/* ESPLORA */}
                    <nav className="flex flex-col items-center text-center md:items-start md:text-left md:border-l md:border-(--rosaDark)/15 md:pl-10">

                        <h3 className="font-cormorant text-2xl font-bold text-(--marrone)">
                            Esplora
                        </h3>

                        <ul className="mt-5 space-y-3 text-(--colorTesto)/70 font-medium">

                            <li>
                                <Link to="/" className="transition-colors hover:text-(--rosaDark)">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <a href="#collezioni" className="transition-colors hover:text-(--rosaDark)">
                                    Collezioni
                                </a>
                            </li>

                            <li>
                                <Link to="/personalizzazioni" className="transition-colors hover:text-(--rosaDark)">
                                    Personalizzazioni
                                </Link>
                            </li>

                            <li>
                                <a href="#chi-sono" className="transition-colors hover:text-(--rosaDark)">
                                    Chi sono
                                </a>
                            </li>

                        </ul>

                    </nav>

                    {/* INFO */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left md:border-l md:border-(--rosaDark)/15 md:pl-10">

                        <h3 className="font-cormorant text-2xl font-bold text-(--marrone)">
                            Info
                        </h3>

                        <ul className="mt-5 space-y-3 text-(--colorTesto)/70 font-medium">

                            <li>
                                <a href="#contatti" className="transition-colors hover:text-(--rosaDark)">
                                    Contatti
                                </a>
                            </li>


                            <li>
                                <a href="" className="transition-colors hover:text-(--rosaDark)">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="" className="transition-colors hover:text-(--rosaDark)">
                                    Cookie Policy
                                </a>
                            </li>

                        </ul>
                        
                    </div>

                </div>

                {/* COPYRIGHT */}

                <div className="mt-10 pt-6 border-t border-(--rosaDark)/10 text-center text-sm text-(--colorTesto)/60">

                    © {new Date().getFullYear()} Mari Atelier · Handmade Creations

                </div>

            </div>

        </footer>
    );
}