import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      {post.cover && (
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <CardContent className="p-6 flex-1">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        {post.description && (
          <p className="text-muted-foreground text-sm mb-4">
            {post.description}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {post.date && (
            <div className="flex items-center">
              <Calendar className="mr-1 h-3.5 w-3.5" />
              {post.date}
            </div>
          )}
          {post.readTime && (
            <div className="flex items-center">
              <Clock className="mr-1 h-3.5 w-3.5" />
              {post.readTime.minutes} min read
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-primary hover:underline flex items-center"
        >
          Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
