"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const Page = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <div>
      <Link
        href="/"
        className={
          isActive("/") ? "font-bold text-red-500" : "text-blue-500 mr-4"
        }
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={isActive("/blog") ? "font-bold mr-4" : "text-blue-500 mr-4"}
      >
        Blog
      </Link>
      <Link
        href="/products"
        className={
          isActive("/products") ? "font-bold mr-4" : "text-blue-500 mr-4"
        }
      >
        Products
      </Link>
    </div>
  );
};

export default Page;
