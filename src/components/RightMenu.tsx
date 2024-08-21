import React from "react";
import FriendsReq from "./ui/FriendsReq";
import BirthDay from "./ui/BirthDay";

import UserInfo from "./ui/UserInfo";
import UserMedia from "./ui/UserMedia";
import Ads from "./ui/ads";

const RightMenu = () => {
  return (
    <section className="w-full flex flex-col gap-4 ">
      <UserInfo />
      <UserMedia />
      <FriendsReq />
      <BirthDay />
      <Ads />
    </section>
  );
};

export default RightMenu;
