import React from "react";
import { Mail, Bookmark, Star, CircleCheck } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-cyan-100 grid place-items-center">
      <div className="w-[320px] bg-white rounded-2xl shadow-md p-4 grid gap-4">
        <div className="relative">
          <img
            src="https://framerusercontent.com/images/6Jms3yt4XRdWgbQCYtOCFcdaKw.jpeg"
            alt="profile"
            className="w-full h-60 object-cover rounded-xl"
          />

          <Bookmark
            size={18}
            className="absolute top-3 right-3 text-white bg-black/60 p-2 rounded-full cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <h1 className="text-lg font-semibold text-black">
              Natasha Romanoff
            </h1>

            <CircleCheck size={16} className="text-blue-400" />
          </div>

          <p className="text-sm text-gray-500 leading-tight">
            I'm a Brand Designer who focuses on clarity & emotional connection.
          </p>
        </div>

        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />

              <span className="font-semibold text-black">4.8</span>
            </div>

            <p className="text-xs text-gray-500">Rating</p>
          </div>

          <div className="w-px h-8 bg-gray-300"></div>

          <div className="flex flex-col items-center">
            <p className="font-semibold text-black">$45K+</p>

            <p className="text-xs text-gray-500">Earned</p>
          </div>

          <div className="w-px h-8 bg-gray-300"></div>

          <div className="flex flex-col items-center">
            <p className="font-semibold text-black">$50/hr</p>

            <p className="text-xs text-gray-500">Rate</p>
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center gap-2 font-medium">
          <Mail size={18} />
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Page;
