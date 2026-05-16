import { House, Search, SquarePlus, Clapperboard, User } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 w-[390px] bg-black border-t border-zinc-800 flex justify-around py-3">
      <House />
      <Search />
      <SquarePlus />
      <Clapperboard />
      <User />
    </div>
  );
}
