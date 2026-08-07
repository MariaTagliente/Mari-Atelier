import { FaArrowRightLong } from "react-icons/fa6";
import { GoHeart, GoHeartFill } from "react-icons/go";
import header from "../assets/header2.jpg";
import { GiYarn } from "react-icons/gi";
import trama from "../assets/texture.png";
import { BsStars } from "react-icons/bs";
import { PiYarn } from "react-icons/pi";

export default function Header() {
  return (
    <header className="relative text-(--colorTesto)">

      <img src={trama} alt="texture crochet" className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"/>

      <div className="relative container mx-auto px-6 py-10 md:py-15">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          
          <div className="text-center md:text-left">

            <div className="inline-flex items-center gap-2 bg-(--rosaLight) shadow-sm text-(--rosaDark) px-4 py-2 rounded-full text-sm font-medium mb-4">
              <PiYarn size={18}/>
              Uncinetto & design
            </div>

            <h1 className="text-3xl md:text-4xl font-cormorant font-semibold text-(--colorTesto)">
              Fili, forme e
            </h1>

            <h2 className="font-alexBrush text-3xl md:text-5xl text-(--rosaDark)">
              emozioni fatte a mano.
            </h2>

            <div className="flex items-center justify-center md:justify-start gap-4 my-4">
              <div className="h-px w-20 md:w-35 bg-(--rosaDark)"/>
              <GoHeart size={25} className="text-(--rosaDark)"/>
              <div className="h-px w-20 md:w-35 bg-(--rosaDark)"/>
            </div>

            <p className="text-[17px] md:text-lg leading-7 md:leading-8 text-(--colorTesto)/70 max-w-2xl mx-auto md:mx-0 md:max-w-2xl">
              Ogni creazione nasce dall'incontro tra filati, creatività e passione. 
              Pezzi unici realizzati interamente a mano, per accompagnare i tuoi momenti più speciali con un tocco di autenticità.
            </p>

            <div className="flex flex-col justify-center items-center md:flex-row md:justify-start gap-5 md:gap-8 mt-6 md:mt-8">

              <a href="#collezioni" className="bg-(--rosaDark) text-white px-10 py-4 rounded-full uppercase tracking-wider font-medium shadow-lg hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                Guarda la collezione
              </a>

              <a href="#chi-sono" className="flex items-center gap-3 text-(--colorTesto)/80 hover:font-medium hover:text-(--marrone) hover:-translate-y-1 transition-all duration-300">
                Scopri di più su di me
                <FaArrowRightLong size={18}/>
              </a>

            </div>

          </div>

          {/* Immagine */}
          <div className="relative">

            <img src={header} alt="Borsa Mari Atelier" className="relative w-full rounded-[40px] shadow-xl object-cover md:hover:scale-[1.03] transition-transform duration-500"/>

            <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-(--colorTesto)/80">
              <span className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow-sm"><PiYarn size={17} className="text-(--rosaDark)"/> Fatto a mano</span>
              <span className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow-sm"><GoHeart size={17} className="text-(--rosaDark)"/> Pezzi unici</span>
              <span className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow-sm"><BsStars size={17} className="text-(--rosaDark)"/> Piccole collezioni</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}