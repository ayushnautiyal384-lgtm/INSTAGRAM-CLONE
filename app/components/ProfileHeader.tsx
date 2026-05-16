export default function ProfileHeader() {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between">
        <img
          src="/image.png"
          alt="profile"
          className="w-20 h-20 rounded-full object-cover"
        />

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

      <div className="mt-4">
        <p className="font-semibold">Ayush</p>
        <p className="text-sm text-zinc-300">Building fake insta clone 🚀</p>
      </div>

      <button className="w-full mt-4 bg-zinc-800 rounded-lg py-1.5 text-sm font-medium">
        Edit profile
      </button>
    </div>
  );
}
