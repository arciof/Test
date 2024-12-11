import Image from "next/image";
import { BlogPost } from "../app/types";
import Link from "next/link";

interface IPostCardProps extends BlogPost {}

const PostCard = ({ id, title, excerpt, image }: IPostCardProps) => {
  return (
    <Link
      id={`post-${id}`}
      href={id.toString()}
      className="rounded-md pb-[12px] hover:bg-[#e7e7e7]"
    >
      <Image
        src={image}
        width={400}
        height={300}
        alt={title}
        className="rounded-md"
      />
      <h3 className="text-xl font-bold mt-[12px] px-[6px]">{title}</h3>
      <p className="text-dark-gray mt-[2px] px-[6px]">{excerpt}</p>
    </Link>
  );
};

export default PostCard;
