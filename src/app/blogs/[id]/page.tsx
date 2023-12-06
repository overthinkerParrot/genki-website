import {  getPostByName, getPostsMeta } from "../../../../lib/posts"
import { notFound } from "next/navigation";
import Link from "next/link";
import 'highlight.js/styles/github-dark.css'
import { Badge } from "@/components/ui/badge";

export const revalidate = 86400;

type Props = {
    params:{
        id:string
    }
}

export async function generateStaticParams(){
    const posts = await getPostsMeta();

    if(!posts) return []

    return posts.map((post)=>{
        id:post.id
    })
}
// @ts-ignore
export async function generateMetaData({params:{id}}:Props) {
    const post =await getPostByName(`blogs/${id}.mdx`);
    if(!post){
        return {
            title:'Post Not Found'
        }
    }

    return {
        title:post.meta.title
    }
   
}

export default async function page({params:{id}}:Props) {
    
    const post =await getPostByName(`blogs/${id}.mdx`);

    if(!post) notFound();

    const {meta,content} = post;
    const tags = meta.tags.map((tag,i)=>(
        <Badge>
            <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
        </Badge>
    ))

  return (
    <div>
        <h1 className="text-5xl font-bold">{meta.title}</h1>
        <section>{tags}</section>
        <p className="text-slate-400">{meta.description}</p>
        <article className="bg-slate-700 p-5">
           {content}
        </article>
        <Link href={"/"}>Back to home</Link>
    </div>
  )
}
