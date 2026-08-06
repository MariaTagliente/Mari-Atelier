import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function ScrollTopButton(){

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);


    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return(
        <AnimatePresence>

            {visible && (

                <motion.button
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:20}}
                    transition={{duration:0.3}}
                    onClick={scrollTop} aria-label="Torna in cima" className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-(--pannaLight) border border-(--rosaDark)/20 text-(--rosaDark) flex items-center justify-center shadow-md hover:bg-(--rosaDark) hover:text-white hover:-translate-y-1 transition-all duration-300">

                    <FaArrowUpLong size={15}/>

                </motion.button>

            )}

        </AnimatePresence>
    )
}