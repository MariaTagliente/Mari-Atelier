import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import { GoHeart } from "react-icons/go";
import borsa from "../assets/borsa-header.jpg";

export default function Header() {
  return (
    <header className="bg-(--panna) text-(--colorTesto)">
      <div className="container mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-cormorant font-semibold text-(--colorTesto)">
              Ogni creazione
            </h1>

            <h2 className="font-alexBrush text-3xl md:text-5xl text-(--rosaDark)">
              racconta una storia.
            </h2>

            <div className="flex items-center justify-center md:justify-start gap-4 my-4">
              <div className="h-px w-20 md:w-30 bg-(--rosaDark)"/>
              <GoHeart size={25} className="text-(--rosaDark)"/>
              <div className="h-px w-20 md:w-30 bg-(--rosaDark)"/>
            </div>

            <p className="text-[17px] md:text-lg leading-8 text-(--colorTesto)/80 max-w-md md:max-w-lg">
              Borse, bikini, amigurumi e accessori realizzati all'uncinetto 
              con cura, passione e attenzione ai dettagli.
            </p>

            <div className="flex flex-col justify-center items-center md:flex-row md:justify-start gap-5 md:gap-8 mt-8">

              <Link className="bg-(--rosaDark) uppercase hover:opacity-90 transition text-white px-8 py-4 rounded-md">
                Guarda la collezione
              </Link>

              <Link className="flex items-center gap-3 text-(--colorTesto)/80 hover:text-(--marrone)">
                Scopri di più su di me
                <FaArrowRightLong size={18}/>
              </Link>

            </div>

          </div>

          {/* Immagine */}
          <div className="relative">

            <div className="absolute inset-0 bg-(--rosaLight) blur-3xl opacity-70 rounded-full"></div>

            <img src={borsa} alt="Borsa Mari Atelier" className="relative w-full max-w-lg mx-auto drop-shadow-2xl"/>

          </div>

        </div>

      </div>
    </header>
  );
}