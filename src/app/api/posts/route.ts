import { NextResponse } from "next/server";
import { BlogPost } from "@/app/types";
import { titles, excerpts, text } from "@/data/posts";
import getRandomDate from "@/utils/getRandomDate";

const generateRandomPost = (id: number) => {
  return {
    id,
    title: titles[(id - 1) % titles.length],
    excerpt: excerpts[(id - 1) % titles.length],
    text: text,
    image: `https://picsum.photos/seed/${id}/400/300`,
    publishDate: getRandomDate(),
  } as BlogPost;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const numPosts = parseInt(searchParams.get("n") || "5");

  const posts = Array.from({ length: numPosts }, (_, i) =>
    generateRandomPost(i + 1)
  );

  return NextResponse.json(posts);
}
