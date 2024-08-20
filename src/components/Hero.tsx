import React from "react";
import Storybar from "./ui/Storybar";
import Post from "./ui/Post";
import PostCard from "./ui/PostCard";

const Hero = () => {
  return (
    <section className="flex gap-8">
      <div className="w-[20%] hidden lg:flex"></div>
      <div className="w-full lg:w-[60%] flex flex-col gap-4">
        <Storybar />
        <Post />
        <PostCard />
      </div>
      <div className="w-[20%] hidden lg:flex"></div>
    </section>
  );
};

export default Hero;
