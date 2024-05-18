"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const BlogDetailLayout = dynamic(
  () => import("@/components/blogs/BlogDetailLayout"),
  {
    ssr: false,
  }
);
function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  if (client) {
    return <BlogDetailLayout params={params} />;
  }
  return null;
}
export default BlogDetailPage;
