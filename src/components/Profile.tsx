import Image from "next/image";
import Image2 from "@/components/img/image 7.jpg";
import { Button } from "@nextui-org/react";

const Profile = () => {
  return (
    <section className="flex flex-col gap-9 rounded shadow-md p-4 border border-gray-100 ">
      <div className="w-full h-48 relative">
        <Image
          src={Image2}
          fill
          alt="user cover photo"
          className="rounded object-cover"
        />
        <Image
          src={Image2}
          width={80}
          height={80}
          alt="user cover photo"
          className="size-20 ring-4 ring-slate-100 rounded-full absolute left-0 right-0 -bottom-10 mx-auto object-cover"
        />
      </div>
      <div className="flex flex-col  p-2 space-y-1">
        <h1 className="font-serif text-xl font-semibold text-center">
          Chris Evan
        </h1>
        <div className="flex justify-center items-center gap-6">
          <div className="flex flex-col items-center ">
            <span className="text-lg font-semibold text-gray-500">50+</span>
            <span className="text-center font-lg font-semibold text-gray-700">
              Posts
            </span>
          </div>
          <div className="flex flex-col items-center ">
            <span className="text-lg font-semibold text-gray-500">1M</span>
            <span className="text-center font-lg font-semibold text-gray-700">
              Followers
            </span>
          </div>
          <div className="flex flex-col items-center ">
            <span className="text-lg font-semibold text-gray-500">0</span>
            <span className="text-center font-lg font-semibold text-gray-700">
              Following
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
