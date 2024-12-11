import { NextResponse } from "next/server";
import { BlogPost } from "@/app/types";
import { excerpts, text, titles } from "@/data/posts";
import getRandomDate from "@/utils/getRandomDate";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = parseInt(searchParams.get("postId") || "1");

  return NextResponse.json({
    id: postId,
    title: titles[(postId - 1) % titles.length],
    excerpt: excerpts[(postId - 1) % titles.length],
    text: text,
    image: `https://picsum.photos/seed/${postId}/400/300`,
    publishDate: getRandomDate(),
  } as BlogPost);
}
