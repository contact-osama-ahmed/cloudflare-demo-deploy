import { Post } from "@/post.model";
import Link from "next/link";

export default async function Posts() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  console.log(posts);
  return (
    <div className="container my-5 mx-auto">
      {posts.map((post) => (
        <Link href={"./posts/" + post.id} className="flex items-center gap-2">
          <span>{post.id}</span>
          <span>{post.title}</span>
        </Link>
      ))}
    </div>
  );
}
