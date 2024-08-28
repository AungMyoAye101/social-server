"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { GoHome } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TbCircleDashedPlus } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Image2 from "@/components/img/image 7.jpg";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarBrand>
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">Social</h1>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center" className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link href="#" className="linkText">
            <div className="flex items-center gap-1">
              <GoHome />
              <h2>Home</h2>
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="linkText">
            <div className="flex items-center gap-1">
              <LuUsers2 />
              <h2>Friends</h2>
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="linkText">
            <div className="flex items-center gap-1">
              <TbCircleDashedPlus />
              <h2>Story</h2>
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="linkText">
            <div className="flex items-center gap-1">
              <IoIosInformationCircleOutline />
              <h2>About</h2>
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        as="div"
        className="hidden sm:flex gap-4 items-center"
        justify="end"
      >
        <NavbarItem>
          <HiOutlineUserGroup className="text-xl hover:text-blue-400" />
        </NavbarItem>
        <NavbarItem>
          <BiMessageRoundedDots className="text-xl hover:text-blue-400" />
        </NavbarItem>
        <NavbarItem>
          <IoNotificationsOutline className="text-xl hover:text-blue-400" />
        </NavbarItem>
        <ClerkLoading>
          <svg
            aria-hidden="true"
            className="size-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </ClerkLoaded>
      </NavbarContent>
      <NavbarContent className="flex sm:hidden" justify="end">
        <NavbarItem>
          <div
            onClick={() => setIsOpen((pre) => !pre)}
            className="space-y-1 cursor-pointer"
          >
            <div
              className={` w-6 bg-gray-900 h-1 rounded-sm ${
                isOpen ? "rotate-45" : ""
              } origin-left transition-transform ease-in-out duration-120`}
            ></div>
            <div
              className={` w-6 bg-gray-900  h-1 rounded-sm ${
                isOpen ? "opacity-0" : ""
              } transition-opacity ease-in-out duration-100`}
            ></div>
            <div
              className={` w-6 bg-gray-900  h-1 rounded-sm ${
                isOpen ? "-rotate-45" : ""
              } origin-left transition-transform ease-in-out duration-120`}
            ></div>
          </div>
        </NavbarItem>
      </NavbarContent>
      {isOpen && (
        <div
          className={`absolute top-16 right-0 h-[calc(100vh-70px)] rounded-md bg-gray-900 w-[80%] p-4 ${
            isOpen ? "opacity-100" : ""
          }transition-all duration-150 ease-in-out`}
        >
          <ul>
            <li>
              <h1 className="text-xl font-bold text-center  text-slate-100 p-4 border-b-1 border-b-slate-200">
                Social
              </h1>
            </li>
            <li className=" ">
              <Link href="/" className="menuLink">
                Home
              </Link>
            </li>
            <li className=" ">
              <Link href="/" className="menuLink">
                Friends
              </Link>
            </li>
            <li className=" ">
              <Link href="/" className="menuLink">
                About
              </Link>
            </li>
            <li className=" ">
              <Link href="/" className="menuLink">
                Account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Navbar>
  );
}
