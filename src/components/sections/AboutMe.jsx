import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router";

export default function AboutMe({data}){

    return(
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.6, ease:"easeOut"}} className="relative">
                <div className="absolute -z-10 top-4 left-4 md:top-8 md:left-8 w-full h-full rounded-[40px] bg-(--verdeSalviaLight)"/>
                <img src={data.image} alt="Maria Mari Atelier" className="relative w-full rounded-[40px] shadow-xl"/>
            </motion.div>

            <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.6, ease:"easeOut"}} className="bg-(--rosaLight)/70 border border-(--rosaDark)/10 rounded-[40px] p-8 md:p-10">

                <span className="inline-flex items-center gap-2 bg-white/70 shadow-sm text-(--rosaDark) px-4 py-2 rounded-full text-sm font-medium">
                    {data.badge}
                </span>

                <h2 className="mt-5 font-cormorant text-3xl md:text-4xl font-bold text-(--colorTesto)">
                    {data.title}
                </h2>

                <div className="flex items-center gap-3 mt-4">
                    <div className="h-px w-18 bg-(--rosaDark)"/>
                    <GoHeart size={16} className="text-(--rosaDark)"/>
                    <div className="h-px w-18 bg-(--rosaDark)"/>
                </div>

                <p className="mt-5 text-sm md:text-base leading-7 text-(--colorTesto)/70 whitespace-pre-line">
                    {data.description}
                </p>

                <a href="#contatti" className="inline-flex items-center gap-3 mt-7 bg-(--rosaDark) text-white px-7 py-3 rounded-full font-medium shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    Scrivimi
                    <FaArrowRightLong size={16}/>
                </a>

            </motion.div>

        </div>
    )
}