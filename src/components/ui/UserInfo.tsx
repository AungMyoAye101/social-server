import { Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
const UserInfo = () => {
  return (
    <section className="card-container">
      <div className="flex justify-between">
        <h1 className="font-sans font-medium">User Infomation </h1>
        <Link href="/" color="primary" size="sm">
          See all
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="font-serif font-bold text-xl">Chris Even</h1>
        <span className="text-sm ">@chriseven</span>
      </div>
      {/* User bio */}
      <div>
        <p className="text-sm line-clamp-3 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* User status */}
      <div className="flex flex-col gap-3 ">
        <div className="flex gap-2 items-center">
          <FaLocationDot />
          <p className="text-sm">
            Living in <span className="font-semibold">Myanmar</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <RiGraduationCapFill />
          <p className="text-sm">
            Gradutaded at{" "}
            <span className="font-semibold">Yandanbon Universty</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineWork />
          <p className="text-sm">
            Work at <span className="font-semibold">AnyTech.Org</span>
          </p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Link href="/" size="sm">
            <FaLink />
            <span>chirs.dev</span>
          </Link>
          <div className="flex items-center text-gray-400 ">
            <FaCalendarAlt className="w-6" />
            <span className="text-sm">Joined December 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
