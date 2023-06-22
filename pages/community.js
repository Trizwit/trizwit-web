import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Commone from "../components/Commone";
import Commtwo from "../components/Commtwo";
import Aboutcont from "../components/aboutcont";
import Teamcont from "../components/teamcont";

export default function Community() {
  return (
    <>
      <Navbar />
      <Commone />
      <Commtwo />
      <Footer />
    </>
  );
}