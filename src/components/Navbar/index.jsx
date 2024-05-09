import React from "react";
import { delay, motion, stagger } from "framer-motion";
import Sidebar from "@/components/Sidebar";

export default function index() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="flex justify-between max-w-[1366px] mx-auto h-[100px] items-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          lamda dev
        </motion.span>
        <div className="flex space-x-3">
          <a href="">
            <img
              src="/src/assets/images/dribbble.png"
              height={20}
              width={20}
              alt=""
            />
          </a>
          <a href="">
            <img
              src="/src/assets/images/facebook.png"
              height={20}
              width={20}
              alt=""
            />
          </a>
          <a href="">
            <img
              src="/src/assets/images/instagram.png"
              height={20}
              width={20}
              alt=""
            />
          </a>
          <a href="">
            <img
              src="/src/assets/images/youtube.png"
              height={20}
              width={20}
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
