import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

const SideMenu = () => {
  return (
    <section className="flex flex-col gap-4 rounded shadow-md py-4">
      <ul>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-2 rounded"
          >
            <CgProfile className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">My Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-2 rounded"
          >
            <CgProfile className="text-xl text-blue-500" />
            <span className="text-sm ">Video</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-2 rounded"
          >
            <CgProfile className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">Activity</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-2 rounded"
          >
            <CgProfile className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">Marketplace</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-2 rounded"
          >
            <CgProfile className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">Album</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center hover:bg-purple-300 p-2 rounded"
          >
            <CgProfile className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">Event</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-2 rounded"
          >
            <CgProfile className="text-xl text-blue-500" />{" "}
            <span className="text-sm">News</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SideMenu;
