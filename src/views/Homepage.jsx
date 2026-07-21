import Header from "../components/Header";
import { PiGiftLight } from "react-icons/pi";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import borse from "../assets/categories/borse.png";
import handBagIcon from "../assets/icons/handbag.svg";
import ribbonIcon from "../assets/icons/ribbon2.svg"
;import teddyIcon from "../assets/icons/teddy.svg";

export default function Homepage(){

    const categories = [
        
        {
            id: 1,
            title: "Borse",
            image: borse,
            description: "Scopri le creazioni fatte a mano",
            icon: handBagIcon
        },

        {
            id: 2,
            title: "Amigurumi",
            image: borse,
            description: "Teneri compagni fatti con amore",
            icon: teddyIcon
        },

        {
            id: 3,
            title: "Accessori",
            image: borse,
            description: "Piccoli dettagli che fanno la differenza",
            icon: ribbonIcon
        }
    ];

    return(
        <>
          <Header/>
          <main className="max-w-7xl mx-auto px-6">
            <section className="text-(--colorTesto)">
                <h1 className="mt-15 uppercase text-2xl font-cormorant font-bold text-center">scegli la tua categoria</h1>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {categories.map((category)=>(
                        <>
                           <div key={category.id} className="bg-(--rosaLight) rounded-xl">
                            
                            <img src={category.image} alt="categorie" className="h-64 md:h-70 w-full object-cover rounded-t-xl"/>

                            <div className="relative p-8">
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl text-(--rosaDark)">
                                    <img src={category.icon} alt={category.title} className="w-9 h-9"/>
                                  </div>
                                </div>
                                
                                <div className="mt-8 flex flex-col items-center gap-3">
                                    <h3 className="font-cormorant uppercase font-bold text-2xl text-center">
                                        {category.title}
                                    </h3>
                                    
                                    <p className="max-w-40 text-center text-(--colorTesto)/80">
                                        {category.description}
                                    </p>
                                    
                                    <span className="flex justify-center">
                                        <FaArrowRightLong size={18} className="hover:text-(--rosaDark) group-hover:translate-x-2 transition"/>
                                    </span>
                                </div>
                            </div>                           
                           </div>
                        </>
                    ))}
                </div>
            </section>
          </main>
        </>
    )
}