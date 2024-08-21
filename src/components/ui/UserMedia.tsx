import { Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const UserMedia = () => {
  return (
    <section className="card-container">
      <div className="flex justify-between">
        <h1 className="font-sans font-medium">User Infomation </h1>
        <Link href="/" color="primary" size="sm">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-1"></div>
      <Image src={"/"} width={100} height={100} alt="user media photos" />
      <Image src={"/"} width={100} height={100} alt="user media photos" />
      <Image src={"/"} width={100} height={100} alt="user media photos" />
      <Image src={"/"} width={100} height={100} alt="user media photos" />
      <Image src={"/"} width={100} height={100} alt="user media photos" />
      <Image src={"/"} width={100} height={100} alt="user media photos" />
      <Image src={"/"} width={100} height={100} alt="user media photos" />
      <Image src={"/"} width={100} height={100} alt="user media photos" />
    </section>
  );
};

export default UserMedia;
