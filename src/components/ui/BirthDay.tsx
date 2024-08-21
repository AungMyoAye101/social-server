import { Avatar, Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const BirthDay = () => {
  return (
    <section className="flex flex-col gap-4 rounded shadow-md p-4 border border-gray-100">
      <h1>Birthday</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <Avatar
            showFallback
            color="secondary"
            name="John"
            src="https://images.unsplash.com/broken"
            size="sm"
          />
          <h3>Chris Evan</h3>
        </div>
        <div>
          <Button color="primary" size="sm">
            Celabrite
          </Button>
        </div>
      </div>
      <div className="flex gap-2 bg-gray-200 rounded p-2 items-center">
        <div>
          <Image src={"/event.svg"} width={40} height={40} alt="event icon" />
        </div>
        <div>
          <h3 className=" font-serif font-semibold">Upcomming Birthdays</h3>
          <p className="text-sm font-sans">
            See others 10 have upcomming birthdays
          </p>
        </div>
      </div>
    </section>
  );
};

export default BirthDay;
