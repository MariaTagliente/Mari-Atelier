import { motion } from "motion/react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Contacts({data, socialLinks}){

    return(
        <section id="contatti" className="bg-(--verdeSalviaLight) py-15">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* TESTO */}
                <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.6, ease:"easeOut"}}>

                    <span className="inline-flex items-center gap-2 bg-(--verdeSalviaDark) shadow-sm text-(--rosaDark) px-4 py-2 rounded-full text-sm font-medium">
                        {data.badge}
                    </span>

                    <h2 className="mt-5 font-cormorant text-3xl md:text-4xl font-bold text-(--colorTesto)">
                        {data.title}
                    </h2>

                    <div className="flex items-center gap-3 mt-4">
                        <div className="h-px w-14 bg-(--rosaDark)"/>
                        <GoHeart size={16} className="text-(--rosaDark)"/>
                        <div className="h-px w-14 bg-(--rosaDark)"/>
                    </div>

                    <p className="mt-5 text-(--colorTesto)/70 leading-7">
                       {data.description}
                    </p>

                </motion.div>


                {/* CARD CONTATTI */}
                <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.6, ease:"easeOut"}} className="bg-white/70 border border-(--rosaDark)/10 rounded-[40px] p-8 md:p-10 shadow-sm">

                    <div className="flex flex-col gap-6">
                        {socialLinks.map((social)=>{
                            const Icon = social.icon;

                            return(
                                <a key={social.id} href={social.link} target="_blank" className="group flex items-center gap-5 rounded-2xl p-3 -m-3 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1">

                                    <div className="w-12 h-12 rounded-full bg-(--rosaLight) flex items-center justify-center text-(--rosaDark) transition-colors duration-300 group-hover:bg-(--rosaDark) group-hover:text-white">
                                        <Icon size={24}/>
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-cormorant font-bold text-xl text-(--colorTesto)">
                                            {social.name}
                                        </h3>
                                        
                                        <p className="text-sm text-(--colorTesto)/70">
                                            {social.value}
                                        </p>
                                    </div>
                                </a>
                            )
                        })}
                        
                    </div>

                </motion.div>

            </div>

        </section>
    )
}