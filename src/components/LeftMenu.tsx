import React from "react";
import Ads from "./ui/ads";
import UserProfile from "./ui/UserProfile";
import SideMenu from "./ui/SideMenu";

const LeftMenu = () => {
  return (
    <section className="flex flex-col gap-4">
      <UserProfile />
      <SideMenu />
      <Ads />
    </section>
  );
};

export default LeftMenu;
