import { Link } from "@nextui-org/react";
import Image from "next/image";
import UserPhoto from "@/components/img/userPhoto.jpg";
import Image1 from "@/components/img/image 11.jpg";
import Image2 from "@/components/img/image 7.jpg";
import Image3 from "@/components/img/image 8.jpg";
import Image4 from "@/components/img/image 9.jpg";
import Image5 from "@/components/img/userPhoto.jpg";
import Image6 from "@/components/img/image 6.jpg";

const UserMedia = () => {
  return (
    <section className="card-container">
      <div className="flex justify-between">
        <h1 className="font-sans font-medium">User Infomation </h1>
        <Link href="/" color="primary" size="sm">
          See all
        </Link>
      </div>
      <div className="flex flex-wrap justify-between gap-1">
        {/* <Image
          src={UserPhoto}
          width={100}
          height={100}
          alt="user media photos"
        /> */}
        <div className="relative w-1/4 h-24">
          <Image
            src={Image1}
            fill
            alt="user media photos"
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/3 h-24 ">
          <Image
            src={Image2}
            fill
            alt="user media photos"
            className="object-cover"
          />
        </div>
        <div className="relative w-1/3 h-24">
          <Image
            src={Image3}
            fill
            alt="user media photos"
            className="object-cover"
          />
        </div>

        <div className="relative w-1/4 h-24">
          <Image
            src={Image4}
            fill
            alt="user media photos"
            className="object-cover"
          />
        </div>
        <div className="relative w-1/3 h-24">
          <Image
            src={Image6}
            fill
            alt="user media photos"
            className="object-cover"
          />
        </div>
        <div className="relative w-1/3 h-24">
          <Image
            src={Image5}
            fill
            alt="user media photos"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default UserMedia;
