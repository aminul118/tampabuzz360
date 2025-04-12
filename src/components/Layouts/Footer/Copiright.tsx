"use client";
import React from "react";

const Copiright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-between text-center text-xs pt-8 container mx-auto">
      <p className="text-white">
        &copy; {year} All Rights Reserved by TampaBuzz360
      </p>
    </div>
  );
};

export default Copiright;
