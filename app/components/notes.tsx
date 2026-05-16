import React from "react";
const Notes = () => {
  const notes = [
    {
      id: 1,
      name: "Your note",
      image:
        "https://pbs.twimg.com/media/HIQ1iqkaYAEKETs?format=jpg&name=medium",
    },
    {
      id: 2,
      name: "Sabrina.C",
      image:
        "https://pbs.twimg.com/media/HIEDfOAWMAAduZo?format=jpg&name=large",
    },
    {
      id: 3,
      name: "Ankita.y",
      image:
        "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/534419149_1250252987142665_459069386417785019_n.jpg?ccb=11-4&oh=01_Q5Aa4gE0xPqvHwTcTKYirP7V8GoTwjbgHssx5MblOZCpxdNkkg&oe=6A13D52D&_nc_sid=5e03e0&_nc_cat=104",
    },

    {
      id: 4,
      name: "nautii.24",
      image:
        "https://scontent.cdninstagram.com/v/t51.82787-19/642422703_18411612349192508_5865422200868602087_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=105&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=wOjZWPOZ_lEQ7kNvwFrv4o6&_nc_oc=AdpjMRVj5WTLiffrx_0c1HL8-rmYZDGZCz_pccuofC2oO6oQfGHkXzR6A7fTvaKag7CKpu_T4Ja_QFpq6CyB0VGJ&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=oBPZQw3mfTNydJ4tldGj7w&_nc_ss=7b6a8&oh=00_Af51GMZdtWxL6C4GUwmC8XQwApFOt5GX_A_U65n3LFDpag&oe=6A0CA0C8",
    },

    {
      id: 5,
      name: "Jerry.tom",
      image:
        "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/560532242_1784684929589732_3083476699987836844_n.jpg?ccb=11-4&oh=01_Q5Aa4gER_I6OMOp8byz82WCq5_Bw1MwWhZ7Bk80IIYzamdCsIg&oe=6A13E54E&_nc_sid=5e03e0&_nc_cat=108",
    },
  ];

  return (
    <div className="w-full bg-black flex gap-4 overflow-x-auto px-3 py-4">
      {notes.map((note) => (
        <div key={note.id} className="flex flex-col items-center shrink-0">
          <div className=" p-[2px] rounded-full">
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

export default Notes;
