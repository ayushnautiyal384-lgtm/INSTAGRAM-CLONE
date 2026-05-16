import React from "react";
import Navbar from "./components/Navbar";
import Stories from "./components/stories";
import Post from "./components/post";
import BottomNavbar from "./components/bottomnavbar";

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="w-full max-w-[430px] mx-auto min-h-screen relative">
        <Navbar />
        <Stories />

        <Post
          name="Drake"
          image="https://media.assettype.com/tribune%2F2026-05-15%2Fm61z4lv1%2F20250530DesktopArticleRapTvDrakeIce.webp?w=1024&auto=format%2Ccompress&fit=max"
          profile="https://cf-images.assettype.com/outlookindia/2026-05-15/rj63cre5/Screenshot-1948-02-25-at-11.51.45.png?w=800&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0"
          likes="27k"
          comments="1.2k"
          caption="Check out this amazing view!"
          time="2 hours ago"
        />

        <Post
          name="KDOT"
          image="https://pbs.twimg.com/media/HIP9IgiXAAA-m2j?format=jpg&name=900x900"
          profile="https://pbs.twimg.com/media/HIVsilkbUAAex2e?format=jpg&name=large"
          likes="15k"
          comments="800"
          caption="Beautiful day for a walk!"
          time="5 hours ago"
        />

        <Post
          name="The Weeknd"
          image="https://pbs.twimg.com/media/HGEOkzvXYAAixhK?format=jpg&name=large"
          profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ukrmk8AsNeQazOkSTLUFCtZtvpTlZ9mbK_kmUh5G2UxDzWzV5pvHxClpgY4sLTTSYlwDEpKGDRmo9lIgurbr8_2iMN0Z2yaDAea57pw&s=10"
          likes="30k"
          comments="2k"
          caption="Loving this new song!"
          time="1 day ago"
        />

        <Post
          name="Travis Scott"
          image="https://images.indianexpress.com/2021/11/Travis-Scott-ap-1200by667.jpeg?w=1200"
          profile="https://m.media-amazon.com/images/M/MV5BYzk2NTlmYmMtMGFhMi00ZTc0LWI5NDEtOTEzYzc4NzA5YmMxXkEyXkFqcGc@._V1_.jpg"
          likes="22k"
          comments="1.5k"
          caption="Had a great day at the beach!"
          time="3 days ago"
        />

        <BottomNavbar />
      </div>
    </div>
  );
};

export default Page;
