import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

import { GoHome } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TbCircleDashedPlus } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageRoundedDots } from "react-icons/bi";

export default function App() {
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

      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem>
          <HiOutlineUserGroup className="text-xl hover:text-blue-400" />
        </NavbarItem>
        <NavbarItem>
          <BiMessageRoundedDots className="text-xl hover:text-blue-400" />
        </NavbarItem>
        <NavbarItem>
          <IoNotificationsOutline className="text-xl hover:text-blue-400" />
        </NavbarItem>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </NavbarContent>
    </Navbar>
  );
}
