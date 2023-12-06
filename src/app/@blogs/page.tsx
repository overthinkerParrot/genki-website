import React from "react";
import BlogCard from "./components/BlogCard";
import { getPostsMeta } from "../../../lib/posts";

async function page() {
  const posts = await getPostsMeta();
  if(!posts){
    return(
      <p>Sorry no posts are available</p>
    )
  }
  return (
    <>
    <div className="text-center text-4xl font-bold">Blogs</div>
    <div className="grid grid-cols-3 gap-4 w-full p-7">
      {posts.map(post=>(
        <BlogCard id={post.id} title={post.title} description={post.description} tags={post.tags}/>
      ))}
    </div>
    </>
  );
}

export default page;
