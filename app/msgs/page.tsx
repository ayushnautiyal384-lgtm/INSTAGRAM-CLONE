import Notes from "../components/notes";
import BottomNavbar from "../components/bottomnavbar";
import { Search, SquarePen, ArrowDown } from "lucide-react";

export default function InstagramDMPage() {
  return (
    <div className="w-full bg-black text-white">
      <div className="flex items-center p-4 border-b border-zinc-800">
        <h1 className="text-xl font-semibold">lisaaa.la</h1>

        <div className="ml-2">
          <ArrowDown />
        </div>

        <div className="ml-auto">
          <SquarePen />
        </div>
      </div>

      <div className="w-full flex justify-center border-b border-zinc-800">
        <div className="w-full max-w-md p-3">
          <div className="flex items-center gap-2 w-full bg-zinc-900 rounded-full px-4 py-2">
            <Search className="text-zinc-400" />

            <input
              type="text"
              placeholder="Search or ask Meta AI"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>
      </div>

      <Notes />

      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-base font-bold">Messages</h1>
        <h1 className="text-base font-semibold text-blue-500">Requests</h1>
      </div>

      <div className="divide-y divide-zinc-900">
        {[
          {
            name: "ankita",
            msg: "Typing...",
            img: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/534419149_1250252987142665_459069386417785019_n.jpg?ccb=11-4&oh=01_Q5Aa4gE0xPqvHwTcTKYirP7V8GoTwjbgHssx5MblOZCpxdNkkg&oe=6A13D52D&_nc_sid=5e03e0&_nc_cat=104",
          },
          {
            name: "nauti",
            msg: "Seen yesterday",
            img: "https://scontent.cdninstagram.com/v/t51.82787-19/642422703_18411612349192508_5865422200868602087_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=105&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=wOjZWPOZ_lEQ7kNvwFrv4o6&_nc_oc=AdpjMRVj5WTLiffrx_0c1HL8-rmYZDGZCz_pccuofC2oO6oQfGHkXzR6A7fTvaKag7CKpu_T4Ja_QFpq6CyB0VGJ&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=oBPZQw3mfTNydJ4tldGj7w&_nc_ss=7b6a8&oh=00_Af51GMZdtWxL6C4GUwmC8XQwApFOt5GX_A_U65n3LFDpag&oe=6A0CA0C8",
          },
          { name: "avijit", msg: "Shared a reel", img: "/image.png" },
          {
            name: "jerry",
            msg: "Sent a photo",
            img: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/560532242_1784684929589732_3083476699987836844_n.jpg?ccb=11-4&oh=01_Q5Aa4gER_I6OMOp8byz82WCq5_Bw1MwWhZ7Bk80IIYzamdCsIg&oe=6A13E54E&_nc_sid=5e03e0&_nc_cat=108",
          },
          {
            name: "sabrina",
            msg: "Sent a voice message",
            img: "https://pbs.twimg.com/media/HIEDfOAWMAAduZo?format=jpg&name=large",
          },
          {
            name: "meta ai",
            msg: "How can I assist you?",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Meta_AI_Logo_%282026%29.svg/250px-Meta_AI_Logo_%282026%29.svg.png",
          },
        ].map((chat, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 hover:bg-zinc-950 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img
                src={chat.img}
                alt={chat.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{chat.name}</p>
                <p className="text-sm text-zinc-400">{chat.msg}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNavbar />
    </div>
  );
}
