"use client";

import React, { useState } from "react";
import { Heart, MessageCircle, Repeat2, Bookmark } from "lucide-react";

const Post = ({ name, image, profile, likes, comments, caption, time }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto bg-black text-white mb-6">
      <div className="flex items-center gap-3 px-3 py-2">
        <img src={profile} className="w-9 h-9 rounded-full object-cover" />
        <p className="font-semibold text-sm">{name}</p>
      </div>

      <img src={image} className="w-full aspect-square object-cover" />

      <div className="flex items-center px-3 py-3 gap-4">
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center gap-1"
        >
          <Heart
            className={`w-6 h-6 ${
              liked ? "fill-red-500 text-red-500" : "text-white"
            }`}
          />
          <p className="text-sm">{likes}</p>
        </button>

        <div className="flex items-center gap-1">
          <MessageCircle className="w-6 h-6" />
          <p className="text-sm">{comments}</p>
        </div>

        <Repeat2 className="w-6 h-6" />
        <Bookmark className="ml-auto w-6 h-6" />
      </div>

      <div className="px-3 pb-4 text-sm">
        <p>
          <span className="font-semibold">{name}</span> {caption}
        </p>
        <p className="text-zinc-500 text-xs mt-1">{time}</p>
      </div>
    </div>
  );
};

export default Post;
