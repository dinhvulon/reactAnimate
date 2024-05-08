import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import Links from "./Links";
import { motion } from "framer-motion";

export default function index() {
  const [open, setOpen] = useState(false);
  const variant = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black">
      <motion.div
        animate={open ? "open" : "closed"}
        variants={variant}
        className=" w-[400px] bg-white fixed top-0 left-0 bottom-0 z-50"
      >
        <Links></Links>
      </motion.div>

      <ToggleButton setOpen={setOpen}></ToggleButton>
    </div>
  );
}
