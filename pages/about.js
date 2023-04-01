import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Aboutcont from "../components/aboutcont";
import Teamcont from "../components/teamcont";

export default function Home() {
  return (
    <>
      <Navbar />
      <Aboutcont/>
      <Teamcont />
      <Contact />
      <Footer />
    </>
  );
}
