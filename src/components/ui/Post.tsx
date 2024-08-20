import { Avatar, Textarea } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <section className="p-4 rounded shadow border border-gray-300">
      <div className="flex gap-4 justify-between ">
        <div>
          <Avatar
            showFallback
            color="primary"
            name="John"
            src="https://images.unsplash.com/broken"
            size="lg"
          />
        </div>
        <div className="flex-1">
          <div>
            <Textarea
              isRequired
              placeholder="What's on your mind..."
              className="flex-1"
            />
          </div>
          {/* post options */}
          <div className="flex flex-wrap gap-3 py-2">
            <div className="flex items-center gap-1">
              <Image
                src={"/photo.svg"}
                alt="photo icon"
                width={25}
                height={25}
              />
              <p className="font-serif font-semibold">Photo</p>
            </div>

            <div className="flex items-center gap-1">
              <Image
                src={"/video.svg"}
                alt="video icon"
                width={20}
                height={20}
              />
              <p className="font-serif font-semibold">Video</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src={"/live.svg"} alt="live icon" width={25} height={25} />
              <p className="font-serif font-semibold">Live</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/event.svg"}
                alt="live icon"
                width={19}
                height={19}
              />
              <p className="font-serif font-semibold">Event</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
