import Header from "../components/Header";
import Categories from "../components/sections/Categories";
import { categories } from "../data/categories";
import Section from "../components/HomepageComponents/Section";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import { products } from "../data/products";
import HandmadeValues from "../components/sections/HandmadeValues";
import { values } from "../data/values";
import AboutMe from "../components/sections/AboutMe";
import { aboutMe } from "../data/aboutMe";
import Contacts from "../components/sections/Contacts";
import { contacts, socialLinks } from "../data/contacts";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "motion/react";
import ScrollTopButton from "../components/ScrollTopButton";

export default function Homepage(){

    return(
        <>
          <Header/>

          <main>

            {/* CATEGORIE */}
            <div className="max-w-7xl mx-auto px-6 pt-16">
                <Section id="collezioni" title="Scopri le collezioni">
                    <Categories data={categories}/>
                </Section>
            </div>
            
            {/* CREAZIONI IN EVIDENZA */}
            <section className="relative w-full bg-(--verdeSalviaLight) py-15 mt-12">
                <div className="max-w-7xl mx-auto px-6">
                    <Section title="Creazioni in evidenza" badge="Selezione handamde">
                        <FeaturedProducts data={products}/>
                    </Section>
                </div>
            </section>

            {/* VALORI */}
            <section className="w-full bg-(--pannaLight)">
                <HandmadeValues data={values}/>
            </section>

            {/* CHI SONO */}
            <section id="chi-sono" className="scroll-mt-24">
                <AboutMe data={aboutMe}/>
            </section>

            {/* CONTATTI */}
            <section id="contatti" className="scroll-mt-24">
                <Contacts data={contacts} socialLinks={socialLinks}/>
            </section>
            
          </main>

          <ScrollTopButton/>
        </>
    )
}