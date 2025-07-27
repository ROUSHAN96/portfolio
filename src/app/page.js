"use client";
import { use } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/header";
import About from "./component/About";
import Services from "./component/Services";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
