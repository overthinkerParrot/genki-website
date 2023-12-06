import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CardContent = {
  id: string;
  title: string;
  description: string;
  tags:string[]
};

function BlogCard({ id, title, description,tags }: CardContent) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {tags.map((tag)=>(
          <Badge variant="outline">{tag}</Badge>
        ))}
      </CardContent>
      <CardFooter>
        <Button>
        <Link href={`http://localhost:3000/${id}`}>Read</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
