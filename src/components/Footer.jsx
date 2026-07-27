import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logo-instagram.png";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="mt-20 border-(--verdeSalvia)/40 border-t-[1px] bg-(--verdeSalvia)/10 py-6">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
                <div>
                    <img src={logo} alt="logo footer" className="w-45 md:w-50 mx-auto md:mx-0"/>

                    <div className="w-45 md:w-50 flex justify-center gap-4 mt-4 border-(--verdeSalvia)/40 border-t-[1px] mx-auto md:mx-0">
                        <a href="https://www.instagram.com/mariatelier.handmade/?hl=it" target="_blank" className="mt-2 text-(--rosaDark) hover:scale-110 transition duration-300">
                           <FaInstagram size={20}/>
                        </a>
                        
                        <a href="#" className="mt-2 text-(--verdeSalvia) hover:scale-110 transition duration-300">
                           <FaTiktok size={20}/>
                        </a>
                    </div>
                </div>
                
                <nav className="flex flex-col items-center md:items-start gap-2 text-sm">
                    <h6 className="text-(--colorTesto) uppercase font-medium mb-2">Link utili</h6>
                    <a className="link link-hover text-(--colorTesto)/70">Shop</a>
                    <a className="link link-hover text-(--colorTesto)/70">Personalizzazioni</a>
                    <a className="link link-hover text-(--colorTesto)/70">Chi sono</a>
                    <a className="link link-hover text-(--colorTesto)/70">Contatti</a>
                </nav>
                
                <nav className="flex flex-col items-center md:items-start gap-2 text-sm">
                    <h6 className="text-(--colorTesto) uppercase font-medium mb-2">Info</h6>
                    <a className="link link-hover text-(--colorTesto)/70">Spedizioni</a>
                    <a className="link link-hover text-(--colorTesto)/70">Resi e rimborsi</a>
                    <a className="link link-hover text-(--colorTesto)/70">Termini e condizioni</a>
                    <a className="link link-hover text-(--colorTesto)/70">Privacy Policy</a>
                </nav>
                
                <form className="flex flex-col items-center md:items-start gap-2 text-sm">
                    <h6 className="text-(--colorTesto) uppercase font-medium mb-2">Newsletter</h6>
                    <fieldset className="w-full max-w-60 text-center md:text-left">
                        <label className="text-(--colorTesto)/70">Resta aggiornata su novità, promozioni e anteprime esclusive.</label>
                        
                        <div className="join mt-4 md:mt-6 justify-center md:justify-start">
                            <input type="text" placeholder="La tua email" className="input outline-none focus:border-(--rosaDark) join-item text-sm"/>
                            <button className="btn border border-(--rosaDark) bg-(--rosaDark) hover:opacity-90 transition join-item text-white"><FaArrowRightLong size={18}/></button>
                        </div>
                    </fieldset>
                </form>

                <div className="w-full md:col-span-full text-center text-(--colorTesto)/70 text-sm">
                    <p>© {new Date().getFullYear()} Mari Atelier - Handmade Creations. All rights reserved.</p>
                </div>
            </div>
            

            
        </footer>
    )
}