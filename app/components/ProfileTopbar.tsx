import { Lock, PlusSquare, Menu } from "lucide-react";

export default function ProfileTopbar() {
  return (
    <div className="flex justify-between items-center px-4 py-3">
      <div className="flex items-center gap-2 font-semibold text-lg">
        <Lock size={16} />
        ayush_nautiyal
      </div>

      <div className="flex gap-4">
        <PlusSquare size={24} />
        <Menu size={24} />
      </div>
    </div>
  );
}
