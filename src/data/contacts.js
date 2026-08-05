import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export const contacts = {
    badge: "Contatti",
    title: "Restiamo in contatto",
    description: `
        Seguimi su Instagram per scoprire il mondo di Mari Atelier, le nuove creazioni e il dietro le quinte dei miei progetti.
        
        Hai un'idea speciale o vuoi ricevere informazioni? Sarò felice di ascoltarti e creare qualcosa di unico insieme a te.
    `
};

export const socialLinks = [
    {
        id: 1,
        name: "Instagram",
        value: "@mariatelier.handmade",
        link: "https://www.instagram.com/mariatelier.handmade/",
        icon: FaInstagram
    },
    {
        id: 2,
        name: "Email",
        value: "Raccontami la tua idea",
        link: "mailto:taglientemaria95@gmail.com",
        icon: MdOutlineEmail
    }
];