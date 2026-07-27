import Header from "../components/Header";
import { PiGiftLight } from "react-icons/pi";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import borse from "../assets/categories/borse.jpg";
import amigurumi from "../assets/categories/doll.jpg";
import bikiniIcon from "../assets/icons/bikini.svg";
import handBagIcon from "../assets/icons/handbag.svg";
import ribbonIcon from "../assets/icons/ribbon2.svg";
import teddyIcon from "../assets/icons/teddy.svg";

export default function Homepage(){

    const categories = [
        
        {
            id: 1,
            title: "Borse",
            image: borse,
            description: "Borse uniche, intrecciate con passione",
            icon: handBagIcon
        },

        {
            id: 2,
            title: "Bikini",
            image: borse,
            description: "Costumi handmade all'uncinetto",
            icon: bikiniIcon
        },

        {
            id: 3,
            title: "Amigurumi",
            image: amigurumi,
            description: "Piccole creazioni che fanno sorridere",
            icon: teddyIcon
        },

        {
            id: 4,
            title: "Accessori",
            image: borse,
            description: "Dettagli che completano ogni stile",
            icon: ribbonIcon
        }
    ];

    return(
        <>
          <Header/>
          <main className="max-w-7xl mx-auto px-6">
            <section className="text-(--colorTesto)">
                <h1 className="mt-15 uppercase text-2xl font-cormorant font-bold text-center">scegli la tua categoria</h1>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                    {categories.map((category)=>(
                        <div key={category.id} className="bg-(--rosaLight) rounded-xl">
                            <img src={category.image} alt="categorie" className="h-60 w-full object-cover rounded-t-xl"/>
                            
                            <div className="relative p-8">
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl text-(--rosaDark)">
                                    <img src={category.icon} alt={category.title} className="w-9 h-9"/>
                                  </div>
                                </div>
                                
                                <div className="mt-7 flex flex-col items-center gap-2">
                                    <h3 className="font-cormorant uppercase font-bold text-2xl text-center text-(--colorTesto)">
                                        {category.title}
                                    </h3>
                                    
                                    <p className="max-w-50 text-center text-(--colorTesto)/80">
                                        {category.description}
                                    </p>
                                    
                                    {/* <span className="flex justify-center">
                                        <FaArrowRightLong size={20} className="hover:text-(--rosaDark) group-hover:translate-x-2 transition"/>
                                    </span> */}
                                </div>
                            </div>                           
                        </div>
                    ))}
                </div>
            </section>
          </main>
        </>
    )
}