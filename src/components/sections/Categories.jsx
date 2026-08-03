import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

export default function Categories({data}){
    return(
        <>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
                {data.map((category, index)=>(

                    <motion.div key={category.id} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{duration: 0.4, delay: index * 0.2}} className="group flex flex-col items-center min-h-[250px] text-center bg-(--white) border border-(--rosaLight) rounded-2xl p-6 md:p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
                            
                        <div className="w-20 h-20 rounded-full bg-(--rosaLight) border border-(--rosaDark)/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                            <img src={category.icon} alt={category.title} className="w-10 h-10"/>
                        </div>
                            
                        <h3 className="font-cormorant uppercase font-bold text-xl text-center text-(--colorTesto)">
                            {category.title}
                        </h3>
                                    
                        <p className="mt-2 text-sm leading-5 text-center text-(--colorTesto)/70">
                            {category.description}
                        </p>
                            
                        <Link className="mt-4 text-(--rosaDark) opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1 transition-all ">
                            <FaArrowRightLong size={18}/>
                        </Link>
                                    
                    </motion.div>                                                       
                ))}
            </div>
        </>
        
    )
}