import Image from "next/image";
import React from "react";
import Image2 from "@/components/img/image 7.jpg";

const UserProfile = () => {
  return (
    <section className="flex flex-col gap-4 rounded shadow-md ">
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
    </section>
  );
};

export default UserProfile;
