import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const ads = () => {
  return (
    <section className="flex flex-col gap-4 rounded shadow-md p-4 border border-gray-100">
      <h1 className="font-sans text-md font-semibold">Sponered Ads</h1>
      <div className="flex flex-col gap-2">
        <Image
          width={160}
          height={200}
          alt="sponered ads"
          src={"/"}
          className="aspect-video rounded"
        />
        <div className="flex gap-2">
          <Image width={20} height={20} alt="sponered ads" src={"/"} />
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
