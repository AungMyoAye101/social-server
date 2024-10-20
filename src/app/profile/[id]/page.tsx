import LeftMenu from "@/components/LeftMenu";
import Profile from "@/components/Profile";
import RightMenu from "@/components/RightMenu";
import PostCard from "@/components/ui/PostCard";

import React from "react";

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const id: string = params.id;
  let user;
  // try {
  //   user = await prisma.user.findFirst({
  //     where: {
  //       id,
  //     },
  //     include: {
  //       _count: {
  //         select: {
  //           follower: true,
  //           following: true,
  //           posts: true,
  //         },
  //       },
  //       posts: true,
  //     },
  //   });
  //   console.log(user);
  // } catch (error) {
  //   console.log(error);
  // }

  if (!user) return;
  return (
    <section className="flex gap-8 justify-between p-4">
      <div className="hidden lg:flex w-[30%]">
        <LeftMenu />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[40%]">
        {/* <Profile
          name={user.name || ""}
          postCount={user._count.posts}
          followerCount={user._count.follower}
          followingCount={user._count.following}
        /> */}
        {/* <PostCard post={user.posts} /> */}
      </div>
      <div className=" hidden lg:flex w-[30%]">
        <RightMenu />
      </div>
    </section>
  );
};

export default ProfilePage;
