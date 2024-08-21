import Link from "next/link";
import React from "react";

const FriendsReq = () => {
  return (
    <section className="flex flex-col gap-4 p-4 rounded shadow-md ">
      <div className="flex justify-between">
        <h2 className="text-sm ">Friend Requests</h2>
        <Link href={"/"}>See all</Link>
      </div>
      <div></div>
    </section>
  );
};

export default FriendsReq;
