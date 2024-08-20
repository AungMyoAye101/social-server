import { Avatar, Textarea } from "@nextui-org/react";
import React from "react";

const Post = () => {
  return (
    <section className="p-4 rounded shadow border border-gray-300">
      <div className="flex gap-4 justify-between py-2">
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
        </div>
      </div>
    </section>
  );
};

export default Post;
