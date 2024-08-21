import { Avatar, Link } from "@nextui-org/react";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

const FriendsReq = () => {
  return (
    <section className="flex flex-col gap-4 rounded shadow-md p-4">
      <div className="flex justify-between border-b-1 border-gray-200 py-2">
        <h2 className="font-serif ">Friend Requests</h2>
        <Link href={"/"} size="sm">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-between items-center hover:text-purple-700 rounded hover:bg-gray-100 ">
          <div className="flex gap-2 items-center">
            <Avatar
              showFallback
              color="secondary"
              name="John"
              src="https://images.unsplash.com/broken"
              size="sm"
            />
            <h3>Chris Evan</h3>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <FaRegCircleCheck className="text-lg text-green-300 cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-150 ease-in-out" />
            </span>
            <span>
              <MdOutlineCancel className="text-xl text-red-300 cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-150 ease-in-out" />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center hover:text-purple-700 rounded hover:bg-gray-100 ">
          <div className="flex gap-2 items-center">
            <Avatar
              showFallback
              color="secondary"
              name="John"
              src="https://images.unsplash.com/broken"
              size="sm"
            />
            <h3>Chris Evan</h3>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <FaRegCircleCheck className="text-lg text-green-300 cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-150 ease-in-out" />
            </span>
            <span>
              <MdOutlineCancel className="text-xl text-red-300 cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-150 ease-in-out" />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center hover:text-purple-700 rounded hover:bg-gray-100 ">
          <div className="flex gap-2 items-center">
            <Avatar
              showFallback
              color="secondary"
              name="John"
              src="https://images.unsplash.com/broken"
              size="sm"
            />
            <h3>Chris Evan</h3>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <FaRegCircleCheck className="text-lg text-green-300 cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-150 ease-in-out" />
            </span>
            <span>
              <MdOutlineCancel className="text-xl text-red-300 cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-150 ease-in-out" />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center hover:text-purple-700 rounded hover:bg-gray-100 ">
          <div className="flex gap-2 items-center">
            <Avatar
              showFallback
              color="secondary"
              name="John"
              src="https://images.unsplash.com/broken"
              size="sm"
            />
            <h3>Chris Evan</h3>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <FaRegCircleCheck className="text-lg text-green-300 cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-150 ease-in-out" />
            </span>
            <span>
              <MdOutlineCancel className="text-xl text-red-300 cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-150 ease-in-out" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendsReq;
