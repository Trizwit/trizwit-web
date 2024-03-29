import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Statistics />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}
