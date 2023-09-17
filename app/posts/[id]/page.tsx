export const runtime = "edge";

import { Post } from "@/post.model";

export default async function PostDetails({ params }: { params: any }) {
  console.log(params);
  const id = params.id;
  const post: Post = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  ).then((res) => res.json());
  console.log(post);
  return (
    <div className="container mx-auto py-5 h-full">
      <div className="flex gap-1">
        <span>Id: </span>
        <b>{post.id}</b>
      </div>
      <div className="flex gap-1">
        <span>User Id: </span>
        <b>{post.userId}</b>
      </div>
      <div className="flex gap-1">
        <span>Title: </span>
        <b>{post.title}</b>
      </div>
      <div className="flex gap-1">
        <span>Body:</span>
        <b>{post.body}</b>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
