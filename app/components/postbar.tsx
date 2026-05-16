"use client";

import { Grid3x3, SquarePlay, Repeat2, SquareUser } from "lucide-react";

const PostBar = () => {
  return (
    <div className=" w-full max-w-[430px] bg-black border-t border-zinc-800 flex items-center justify-around py-3">
      {" "}
      <button>
        <Grid3x3 />
      </button>
      <button>
        <SquarePlay />
      </button>
      <button>
        <Repeat2 />
      </button>
      <button>
        <SquareUser />
      </button>
    </div>
  );
};

export default PostBar;
