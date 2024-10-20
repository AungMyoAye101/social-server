import React from "react";
import Storybar from "./ui/Storybar";
import Post from "./ui/Post";
import PostCard from "./ui/PostCard";
import RightMenu from "./RightMenu";
import Link from "next/link";
import LeftMenu from "./LeftMenu";
import Profile from "./Profile";

const Hero = () => {
  return (
    <section className="flex gap-8 justify-between p-4">
      <div className="hidden lg:flex w-[30%]">
        <LeftMenu />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[40%]">
        <Storybar />

        <Post />
        {/* <PostCard /> */}
      </div>
      <div className=" hidden lg:flex w-[30%]">
        <RightMenu />
      </div>
    </section>
  );
};

export default Hero;
