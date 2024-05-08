import React from "react";

export default function index({ setOpen }) {
  return (
    <button
      onClick={() => setOpen((pre) => !pre)}
      className="w-12 h-12 rounded-full bg-transparent fixed left-[25px] top-[25px] border-0 text-black z-50"
    >
      button
    </button>
  );
}
