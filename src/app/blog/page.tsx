"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../app/style.css";

const Blog = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <div>
      <Link
        href="/blog"
        className={
          isActive("/") ? "font-bold text-red-500" : "text-blue-500 mr-4"
        }
      >
        Blog
      </Link>
    </div>
  );
};

export default Blog;
