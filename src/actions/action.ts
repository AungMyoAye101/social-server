"use server";

import { auth } from "@clerk/nextjs/server";

export const PostCreate = async () => {
  const userId = auth();
  console.log(userId);
};
