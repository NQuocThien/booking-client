"use client";

import { RootState } from "@/redux/store/store";
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListBlog from "@/components/blogs/ListBlog";
import { blogVi } from "@/locales/vi/Blog";
import { blogUs } from "@/locales/en/Blog";

function AccountDetailPage() {
  const [lan, setLan] = useState(blogVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(blogUs);
    } else setLan(blogVi);
  }, [currentLan]);
  return (
    <div className="blog-page">
      <ListBlog lan={lan} />
    </div>
  );
}
export default AccountDetailPage;
