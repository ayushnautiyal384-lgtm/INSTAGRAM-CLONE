import React from "react";
const Highlights = () => {
  const notes = [
    {
      id: 1,
      name: "MEEE",
      image:
        "https://pbs.twimg.com/media/HHlwfgvXYAYB1JF?format=jpg&name=large",
    },
  ];

  return (
    <div className="w-full bg-black flex gap-4 overflow-x-auto px-3 py-4">
      {notes.map((note) => (
        <div key={note.id} className="flex flex-col items-center shrink-0">
          <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] rounded-full">
            <div className="bg-black p-[2px] rounded-full">
              <img
                src={note.image}
                alt={note.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>

          <p className="text-white text-xs mt-2">{note.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
