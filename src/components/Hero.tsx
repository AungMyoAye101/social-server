import React from "react";
import Storybar from "./ui/Storybar";
import Post from "./ui/Post";

const Hero = () => {
  return (
    <section className="flex gap-8">
      <div className="w-[20%]"></div>
      <div className="w-[60%] flex flex-col gap-4">
        <Storybar />
        <Post />
      </div>
      <div className="w-[20%]"></div>
    </section>
  );
};

export default Hero;
