"use client";

import { RootState } from "@/redux/store/store";
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListBlog from "@/components/blogs/ListBlog";
import { blogVi } from "@/locales/vi/Blog";
import { blogUs } from "@/locales/en/Blog";
import { Blog } from "@/graphql/webbooking-service.generated";
import BlogDetailLayout from "@/components/blogs/BlogDetailPage";

function AccountDetailPage() {
  const [lan, setLan] = useState(blogVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const [blog, setBlog] = useState<Blog>();
  const [topBlogs, setTopBlogs] = useState<Blog[]>([]);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(blogUs);
    } else setLan(blogVi);
  }, [currentLan]);
  return (
    <div className="blog-page">
      {blog === undefined && (
        <ListBlog
          setTopBlogs={(blogs) => setTopBlogs(blogs)}
          onChange={(blog) => setBlog(blog)}
          lan={lan}
        />
      )}
      {blog && (
        <BlogDetailLayout
          onChange={(blog) => setBlog(blog)}
          topBlogs={topBlogs}
          blog={blog}
          lan={lan}
        />
      )}
    </div>
  );
}
export default AccountDetailPage;
