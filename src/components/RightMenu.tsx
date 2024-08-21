import React from "react";
import FriendsReq from "./ui/FriendsReq";
import BirthDay from "./ui/BirthDay";

const RightMenu = () => {
  return (
    <section className="w-full flex flex-col gap-4 ">
      <FriendsReq />
      <BirthDay />
    </section>
  );
};

export default RightMenu;
