"use server";

import prisma from "@/db/script";
import { auth } from "@clerk/nextjs/server";

export const PostCreate = async (formData: FormData) => {
  const { userId } = auth();
  const title = formData.get("title") as string;
  if (!userId) return;
  try {
    const res = await prisma.post.create({
      data: {
        authorId: userId,
        title,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
