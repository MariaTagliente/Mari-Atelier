import Header from "../components/Header";
import { PiGiftLight } from "react-icons/pi";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import borse from "../assets/categories/borse.png";
import { BsHandbag } from "react-icons/bs";
import { TbHorseToy } from "react-icons/tb";

export default function Homepage(){

    const categories = [
        
        {
            id: 1,
            title: "Borse",
            image: borse,
            description: "Scopri le creazioni fatte a mano",
            icon: <BsHandbag />
        },

        {
            id: 2,
            title: "Amigurumi",
            description: "Teneri compagni fatti con amore",
            icon: <TbHorseToy/>
        },

        {
            id: 3,
            title: "Accessori",
            description: "Piccoli dettagli che fanno la differenza",
            icon: <PiGiftLight />,
        }
    ];

    return(
        <>
          <Header/>
          <main className="container mx-auto px-6">
            <section className="text-(--colorTesto)">
                <h1 className="mt-10 uppercase text-xl font-cormorant font-bold text-center">scegli la tua categoria</h1>

                <div className="mt-4 grid grid-cols-3 gap-10">
                    {categories.map((category)=>(
                        <>
                           <div key={category.id} className="bg-(--rosaLight) rounded-xl">

                            <img src={category.image} alt="" className="h-80 w-full object-cover rounded-t-xl"/>

                            <div className="relative px-8 p-14">
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl text-(--rosaScuro)">
                                    {category.icon}
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <h3 className="font-cormorant uppercase font-bold text-2xl text-center">
                                    {category.title}
                                </h3>
                                
                                <p className="max-w-40 text-center text-(--colorTesto)/80">
                                    {category.description}
                                </p>
                                
                                <span className="flex justify-center">
                                    <FaArrowRightLong className="hover:text-(--marrone) group-hover:translate-x-2 transition"/>
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