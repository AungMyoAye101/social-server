import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { LuActivitySquare } from "react-icons/lu";
import { MdEvent } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { BiPhotoAlbum } from "react-icons/bi";
import { MdOutlineStore } from "react-icons/md";

const SideMenu = () => {
  return (
    <section className="flex flex-col gap-4 rounded shadow-md py-4 border border-gray-100">
      <ul>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-3 rounded"
          >
            <CgProfile className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">My Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-3 rounded"
          >
            <GoVideo className="text-xl text-blue-500" />
            <span className="text-sm ">Video</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-3 rounded"
          >
            <LuActivitySquare className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">Activity</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-3 rounded"
          >
            <MdOutlineStore className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">Marketplace</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-3 rounded "
          >
            <BiPhotoAlbum className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">Album</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center hover:bg-purple-300 p-3 rounded"
          >
            <MdEvent className="text-xl text-blue-500" />{" "}
            <span className="text-sm ">Event</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-3 rounded"
          >
            <FaRegNewspaper className="text-xl text-blue-500" />{" "}
            <span className="text-sm">News</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-2 items-center  hover:bg-purple-300 p-3 rounded"
          >
            <GrUserSettings className="text-xl text-blue-500" />{" "}
            <span className="text-sm">Account Setting</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SideMenu;
