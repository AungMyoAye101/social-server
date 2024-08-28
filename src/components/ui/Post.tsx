import { PostCreate } from "@/actions/action";
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
            size="md"
          />
        </div>
        <div className="flex-1">
          <form action={PostCreate} className="flex items-end gap-2">
            <Textarea
              isRequired
              placeholder="What's on your mind..."
              className="flex-1"
              name="title"
            />
            <button
              className="text-sm font-serif py-2 px-4 border border-gray-200 rounded shadow-md"
              type="submit"
            >
              Post
            </button>
          </form>
          {/* post options */}
          <div className="flex flex-wrap gap-3 py-2">
            <div className="flex items-center gap-1">
              <Image
                src={"/photo.svg"}
                alt="photo icon"
                width={25}
                height={25}
              />
              <p className="font-serif ">Photo</p>
            </div>

            <div className="flex items-center gap-1">
              <Image
                src={"/video.svg"}
                alt="video icon"
                width={20}
                height={20}
              />
              <p className="font-serif ">Video</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src={"/live.svg"} alt="live icon" width={25} height={25} />
              <p className="font-serif ">Live</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/event.svg"}
                alt="live icon"
                width={19}
                height={19}
              />
              <p className="font-serif ">Event</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
