import PostCard from "../components/PostCard";
import { BlogPost } from "./types";

export default async function Home() {
  const postsResponse = await fetch("http://localhost:3000/api/posts");
  const postsData: BlogPost[] = await postsResponse.json();

  return (
    <div className="flex justify-center my-[24px]">
      <div className="grid grid-cols-3 gap-x-[24px] gap-y-[24px]">
        {postsData.map((post: BlogPost, key: number) => (
          <PostCard key={key} {...post} />
        ))}
      </div>
    </div>
  );
}
