import Image from "next/image";
import React from "react";
import Image2 from "@/components/img/image 7.jpg";
import { Button, Link } from "@nextui-org/react";

const UserProfile = () => {
  return (
    <section className="flex flex-col gap-4 rounded shadow-md p-4 border border-gray-100">
      <div className="w-full h-28 relative">
        <Image
          src={Image2}
          fill
          alt="user cover photo"
          className="rounded object-cover"
        />
        <Image
          src={Image2}
          width={56}
          height={56}
          alt="user cover photo"
          className="size-14 ring-4 ring-gray-100 rounded-full absolute left-0 right-0 -bottom-6 mx-auto object-cover"
        />
      </div>
      <div className="flex flex-col  p-2 space-y-1">
        <h1 className="font-serif text-lg font-semibold text-center">
          Chris Evan
        </h1>
        <p className="text-sm font-thin text-center">
          <span className="font-semibold">1M </span>
          Followers
        </p>
        <Link
          href={"/profile"}
          size="sm"
          className="w-full bg-blue-500 p-2 rounded-md text-slate-100 "
        >
          <span className=" mx-auto">My Profile</span>
        </Link>
      </div>
    </section>
  );
};

export default UserProfile;
