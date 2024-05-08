import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { delay, motion, stagger } from "framer-motion";

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
    <div>
      <section className="h-screen">
        <Navbar></Navbar>
      </section>
      <section className="h-screen "></section>
      <section className="h-screen">Portfolio</section>
      <section className="h-screen">Portfolio</section>
      <section className="h-screen">Portfolio</section>
      <section className="h-screen">Portfolio</section>
    </div>
  );
}

export default HomePage;
