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

export default function App() {
  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">Social</h1>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link href="#" className="linkText">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="linkText">
              Friends
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="linkText">
              Story
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem></NavbarItem>
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
