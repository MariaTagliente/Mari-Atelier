import { motion } from "motion/react";

export default function HandmadeValues({data}){

    return(
        <div className="max-w-5xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-y-10">

            {data.map((item, index)=>{

                const Icon = item.icon;

                return(
                    <motion.div key={item.id} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{ duration:0.5, delay:index * 0.15}} className={`relative flex flex-col items-center text-center px-8 py-4 
                        ${index !== data.length - 1 ? "md:border-r md:border-(--rosaDark)/15" : ""}`}>
                        <Icon size={36} className="mx-auto text-(--rosaDark)"/>

                        <h3 className="mt-5 font-cormorant uppercase font-bold text-xl">
                            {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-(--colorTesto)/70 max-w-[270px] mx-auto">
                            {item.description}
                        </p>

                        {index !== data.length - 1 && (
                            <div className="absolute -bottom-5 w-36 h-px bg-(--rosaDark)/10 md:hidden"/>
                        )}
                    </motion.div>
                )
            })}

        </div>
    )
}