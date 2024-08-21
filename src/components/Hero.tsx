import React from "react";
import Storybar from "./ui/Storybar";
import Post from "./ui/Post";
import PostCard from "./ui/PostCard";
import RightMenu from "./RightMenu";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex gap-8 justify-between p-4">
      <div className="hidden lg:flex w-[20%]">
        <section className="flex flex-col gap-4 p-4 rounded shadow-md w-full">
          <div className="flex justify-between">
            <h2 className="text-sm ">Friend Requests</h2>
            <Link href={"/"}>See all</Link>
          </div>
          <div></div>
        </section>
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[50%]">
        <Storybar />
        <Post />
        <PostCard />
      </div>
      <div className=" hidden lg:flex w-[30%]">
        <RightMenu />
      </div>
    </section>
  );
};

export default Hero;
