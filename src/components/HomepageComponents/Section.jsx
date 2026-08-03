import { motion } from "motion/react";
import { BsStars } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

export default function Section({title, children, id, badge}){
    return(
        <section id={id} className="scroll-mt-8 text-(--colorTesto)">

            {badge && (
                <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4 }} className="flex justify-center mb-4">
                    <div className="inline-flex items-center gap-2 bg-(--verdeSalviaDark) shadow-sm text-(--rosaDark) px-4 py-2 rounded-full text-sm font-medium">
                        <BsStars/>{badge}
                    </div>
                </motion.div>
            )}

            <motion.h2 initial={{ opacity: 0, y:20}} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5}} className="uppercase text-2xl md:text-3xl font-cormorant font-bold text-center">
                {title}
            </motion.h2>

            <div className="flex items-center justify-center gap-3 mt-4">
                <motion.div className="h-px w-16 bg-(--rosaDark)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }} style={{ originX: 1}}></motion.div>
                    
                <motion.div initial={{ opacity: 0, scale: 0.6}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35, delay: 0.1 }}>
                    <GoHeart size={18} className="text-(--rosaDark)"/>
                </motion.div>

                <motion.div className="h-px w-16 bg-(--rosaDark)" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }} style={{ originX: 0}}></motion.div>
            </div>

            {children}
            
        </section>
    )
}