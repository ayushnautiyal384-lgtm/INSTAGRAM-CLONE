import { Menu, UserPlus } from "lucide-react";
import BottomNavbar from "../components/bottomnavbar";
import Highlights from "../components/highlights";
import PostBar from "../components/postbar";

export default function Page() {
  const posts = [1];

  return (
    <div className="bg-black min-h-screen text-white flex justify-center">
      <div className="w-[390px] min-h-screen border-x border-zinc-800 relative">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="font-semibold text-lg">lisaaa.la</div>
          <Menu size={24} />
        </div>

        <div className="px-4 py-4">
          <div className="flex items-start gap-6">
            <div>
              <img
                src="https://pbs.twimg.com/media/HIQ1iqkaYAEKETs?format=jpg&name=medium"
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="font-semibold text-sm mt-2">@lisaaa.la</p>
            </div>

            <div className="flex-1">
              <p className="font-semibold text-base mb-3">Lisa</p>

              <div className="flex gap-6 text-center">
                <div>
                  <p className="font-semibold">12</p>
                  <p className="text-sm">posts</p>
                </div>

                <div>
                  <p className="font-semibold">542</p>
                  <p className="text-sm">followers</p>
                </div>

                <div>
                  <p className="font-semibold">312</p>
                  <p className="text-sm">following</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-zinc-800 rounded-xl py-2 text-sm font-medium">
              Edit profile
            </button>

            <button className="flex-1 bg-zinc-800 rounded-xl py-2 text-sm font-medium">
              Share profile
            </button>

            <button className="bg-zinc-800 rounded-xl px-4 py-2 flex items-center justify-center">
              <UserPlus size={18} />
            </button>
          </div>
        </div>

        <Highlights />
        <PostBar />

        <div className="grid grid-cols-3 gap-[2px] mt-2 pb-20">
          {posts.map((post) => (
            <img
              key={post}
              src="https://pbs.twimg.com/media/HHz11H4XsAgI75Q?format=jpg&name=large"
              alt="post"
              className="w-full aspect-square object-cover"
            />
          ))}
        </div>

        <BottomNavbar />
      </div>
    </div>
  );
}
