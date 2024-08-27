import React from "react";
import Ads from "./ui/Ads";
import UserProfile from "./ui/UserProfile";
import SideMenu from "./ui/SideMenu";

const LeftMenu = () => {
  return (
    <section className="flex flex-col gap-4">
      <SideMenu />
      <Ads />
    </section>
  );
};

export default LeftMenu;
