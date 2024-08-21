import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Image1 from "@/components/img/image 11.jpg";
import Image5 from "@/components/img/userPhoto.jpg";

const ads = () => {
  return (
    <section className="flex flex-col gap-4 rounded shadow-md p-4 border border-gray-100">
      <h1 className="font-sans text-md font-semibold">Sponered Ads</h1>
      <div className="flex flex-col gap-2">
        <div className="relative w-full h-36 rounded-md">
          <Image
            fill
            alt="sponered ads"
            src={Image1}
            className="aspect-video rounded"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative size-8 ">
            <Image
              alt="sponered ads"
              src={Image5}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="text-sm font-semibold text-primary-400">Sponser</h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nam enim similique asperiores.
          </p>
        </div>

        <Button>Learn More</Button>
      </div>
    </section>
  );
};

export default ads;
