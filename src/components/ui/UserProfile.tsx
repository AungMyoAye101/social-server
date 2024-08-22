import Image from "next/image";
import React from "react";
import Image2 from "@/components/img/image 7.jpg";
import { Button } from "@nextui-org/react";

const UserProfile = () => {
  return (
    <section className="flex flex-col gap-2 rounded shadow-md ">
      <div className="w-full h-24 relative">
        <Image
          src={Image2}
          fill
          alt="user cover photo"
          className="rounded object-cover"
        />
        <Image
          src={Image2}
          width={40}
          height={40}
          alt="user cover photo"
          className="size-10 ring-2 ring-gray-100 rounded-full absolute left-0 right-0 -bottom-3 mx-auto object-cover"
        />
      </div>
      <div className="flex flex-col  p-2">
        <h1 className="font-serif text-lg font-semibold text-center">
          Chris Evan
        </h1>
        <p className="text-sm font-thin text-center">
          <span className="font-semibold">1M </span>
          Followers
        </p>
        <Button size="sm" color="primary">
          My Profile
        </Button>
      </div>
    </section>
  );
};

export default UserProfile;
