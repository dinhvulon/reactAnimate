import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
function HomePage(props) {
  const variant = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };
  const [open, setOpen] = useState(false);
  const items = ["item1", "item2", "item3", "item4", "item5", "item6"];
  return (
    <>
      <section className="h-screen" id="Homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section className="h-screen" id="Services">
        Services
      </section>
      <section className="h-screen" id="Portfolio">
        Portfolio
      </section>
      <section className="h-screen" id="Contact">
        Contact
      </section>
      <section className="h-screen" id="About">
        About
      </section>
    </>
  );
}

export default HomePage;
