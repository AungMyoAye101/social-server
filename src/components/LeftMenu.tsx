import React from "react";
import Ads from "./ui/ads";
import UserProfile from "./ui/UserProfile";
import SideMenu from "./SideMenu";

const LeftMenu = () => {
  return (
    <section>
      <UserProfile />
      <SideMenu />
      <Ads />
    </section>
  );
};

export default LeftMenu;
