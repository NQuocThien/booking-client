"use client";
import { RootState } from "@/redux/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { blogVi } from "@/locales/vi/Blog";
import { blogUs } from "@/locales/en/Blog";
import {
  Blog,
  useGetBlogBySlugQuery,
} from "@/graphql/webbooking-service.generated";
import BlogDetail from "@/components/blogs/BlogDetail";
import { Col, Row } from "react-bootstrap";
import CustomBreadcrumbs from "@/components/subs/Breadcrumbs";
import useNProgress from "@/hooks/useNProgress";

function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [lan, setLan] = useState(blogVi);
  const slug = params.slug;
  const currentLan = useSelector((state: RootState) => state.client.language);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(blogUs);
    } else setLan(blogVi);
  }, [currentLan]);
  const [blog, setBlog] = useState<Blog>();
  // =================================================================
  const { data, loading } = useGetBlogBySlugQuery({
    variables: {
      slug: slug,
    },
  });
  // =================================================================
  useEffect(() => {
    if (data) setBlog(data.getBlogBySlug);
  }, [data]);
  useEffect(() => {
    useNProgress(loading);
  }, [loading]);
  return (
    <div className="container py-2">
      <div className="blog-detail p-2">
        <Row>
          <CustomBreadcrumbs
            paths={[
              {
                label: "Trang chủ",
                url: "/",
              },
              {
                label: "Bài viết",
                url: "/",
              },
              {
                label: blog?.title || "Blog",
                url: "/",
              },
            ]}
          />
        </Row>
        <Row>
          <Col lg={8}>
            <BlogDetail lan={lan} blog={blog} />
          </Col>
          <Col>test</Col>
        </Row>
      </div>
    </div>
  );
}
export default BlogDetailPage;
