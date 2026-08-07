import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

export default function FeaturedProducts({data}){
    return(
        <>
           <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((product, index)=>(
                <motion.article key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: index * 0.2}} className="group bg-white border border-(--rosaDark)/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">

                    <div className="overflow-hidden aspect-square">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                    </div>

                    <div className="p-6 text-center">
                        <h3 className="font-cormorant uppercase font-bold text-xl text-(--colorTesto)">
                            {product.title}
                        </h3>

                        <Link to={`/detail/${product.id}`} className="mt-5 inline-flex bg-(--rosaLight) shadow-sm text-(--rosaDark) px-5 py-2 rounded-full text-sm font-medium hover:bg-(--rosaDark) hover:text-white hover:-translate-y-1 transition-all duration-300">
                            Scopri
                        </Link>

                    </div>
                    
                </motion.article>
            ))}
           </div>
        </>
    )
}