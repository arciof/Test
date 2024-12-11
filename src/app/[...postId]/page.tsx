import Image from "next/image";
import getFormattedDate from "@/utils/getFormattedDate";
import { BlogPost } from "../types";

const Post = async ({ params }: { params: { postId: string } }) => {
  const { postId } = await params;

  const postResponse = await fetch(
      `http://localhost:3000/api/post?postId=${postId}`
    ),
    postData: BlogPost = await postResponse.json();

  return (
    <div>
      <h1 className="text-4xl font-bold">{postData.title}</h1>
      <h2 className="text-xl text-dark-gray mt-[6px]">{postData.excerpt}</h2>
      <div className="flex flex-row gap-[12px] mt-[18px]">
        <Image
          src={postData.image}
          width={400}
          height={300}
          alt={postData.title}
          className="rounded-md"
        />
        <div>
          <span>{getFormattedDate(new Date(postData.publishDate))}</span>
          <p className="mt-[12px]">{postData.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
