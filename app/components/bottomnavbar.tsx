"use client";

import Link from "next/link";
import { Home, SquarePlay, Send, Search } from "lucide-react";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 w-full max-w-[430px] bg-black border-t border-zinc-800 flex items-center justify-around py-3">
      {" "}
      <Link href="/">
        <Home />
      </Link>
      <button>
        <Search />
      </button>
      <button>
        <SquarePlay />
      </button>
      <Link href="/msgs">
        <Send />
      </Link>
      <Link href="/profile">
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
          <img
            src="https://pbs.twimg.com/media/HIQ1iqkaYAEKETs?format=jpg&name=medium"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default BottomNavbar;
