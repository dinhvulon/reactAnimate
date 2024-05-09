import { motion } from "framer-motion";
import React from "react";

export default function index() {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      opacity: 0,
      y: 50,
    },
  };
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div
      variants={variants}
      className="absolute text-2xl w-full h-full flex flex-col items-center justify-center gap-5"
    >
      {items.map((item, i) => {
        return (
          <motion.a
            href={`#${item}`}
            key={item}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
