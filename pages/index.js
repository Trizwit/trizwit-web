import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Footer />
    </>
  );
}
