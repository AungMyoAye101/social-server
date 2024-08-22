import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Image5 from "@/components/img/userPhoto.jpg";
import Image1 from "@/components/img/image 11.jpg";

const PostCard = () => {
  return (
    <section className="flex flex-col gap-6">
      <Card className="">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://nextui.org/avatars/avatar-1.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Chris Evan
              </h4>
            </div>
          </div>
        </CardHeader>
        <div className="px-4 flex flex-col gap-2">
          <div className="relative w-full h-40 sm:h-56 md:h-60 lg:h-52">
            <Image src={Image1} alt="photo" fill className="rounded" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            adipisci earum architecto quasi velit nulla aliquid reiciendis
            dolorum, odit nesciunt minima corrupti. Praesentium reiciendis
            voluptatum numquam qui sint error blanditiis.
          </p>
        </div>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
      <Card className="">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://nextui.org/avatars/avatar-1.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Chris Evan
              </h4>
            </div>
          </div>
        </CardHeader>
        <div className="px-4 flex flex-col gap-2">
          <div className="relative w-full h-40 sm:h-56 md:h-60 lg:h-52">
            <Image src={Image1} alt="photo" fill className="rounded" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            adipisci earum architecto quasi velit nulla aliquid reiciendis
            dolorum, odit nesciunt minima corrupti. Praesentium reiciendis
            voluptatum numquam qui sint error blanditiis.
          </p>
        </div>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
      <Card className="">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://nextui.org/avatars/avatar-1.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Chris Evan
              </h4>
            </div>
          </div>
        </CardHeader>
        <div className="px-4 flex flex-col gap-2">
          <div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-64">
            <Image src={Image1} alt="photo" fill className="rounded" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            adipisci earum architecto quasi velit nulla aliquid reiciendis
            dolorum, odit nesciunt minima corrupti. Praesentium reiciendis
            voluptatum numquam qui sint error blanditiis.
          </p>
        </div>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
      <Card className="">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://nextui.org/avatars/avatar-1.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Chris Evan
              </h4>
            </div>
          </div>
        </CardHeader>
        <div className="px-4 flex flex-col gap-2">
          <div className="relative w-full h-40 sm:h-56 md:h-60 lg:h-52">
            <Image src={Image1} alt="photo" fill className="rounded" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            adipisci earum architecto quasi velit nulla aliquid reiciendis
            dolorum, odit nesciunt minima corrupti. Praesentium reiciendis
            voluptatum numquam qui sint error blanditiis.
          </p>
        </div>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default PostCard;
