"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ManagerBlogs = dynamic(() => import("@/components/blogs/ManagerBlog"), {
  ssr: false,
});
function AccountDetailPage() {
  const [client, setClient] = useState(false);
  useEffect(() => setClient(true), []);
  if (client) {
    return <ManagerBlogs />;
  }

  return null;
}
export default AccountDetailPage;
