"use client";

import React, { useState } from "react";
import { Plus, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-14 bg-black shadow-lg flex justify-between items-center px-8 gap-5 text-white">
        <button>
          <Plus />
        </button>

        <img
          src="https://t4.ftcdn.net/jpg/03/97/48/01/360_F_397480131_ifXqWNKVteOhczWDJBeODrnMIbVcVp13.jpg"
          alt="Instagram"
          className="h-12 object-contain text-amber-50"
        />

        <button>
          <Heart />
        </button>
      </div>
    </>
  );
};

export default Navbar;
