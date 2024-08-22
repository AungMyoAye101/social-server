import LeftMenu from "@/components/LeftMenu";
import Profile from "@/components/Profile";
import RightMenu from "@/components/RightMenu";
import PostCard from "@/components/ui/PostCard";
import React from "react";

const page = () => {
  return (
    <section className="flex gap-8 justify-between p-4">
      <div className="hidden lg:flex w-[30%]">
        <LeftMenu />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[40%]">
        <Profile />

        <PostCard />
      </div>
      <div className=" hidden lg:flex w-[30%]">
        <RightMenu />
      </div>
    </section>
  );
};

export default page;
