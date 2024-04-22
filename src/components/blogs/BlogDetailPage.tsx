"use client";
import { blogVi } from "@/locales/vi/Blog";
import { Blog } from "@/graphql/webbooking-service.generated";
import BlogDetail from "@/components/blogs/BlogDetail";
import { Col, Row } from "react-bootstrap";
import CustomBreadcrumbs from "@/components/subs/Breadcrumbs";
import TopBlogs from "./TopBlog";
interface IProp {
  blog: Blog;
  lan: typeof blogVi;
  onChange: (blog: Blog | undefined) => void;
  topBlogs: Blog[];
}
function BlogDetailLayout({ blog, lan, onChange, topBlogs }: IProp) {
  // =================================================================

  return (
    <div className="container p-2 mb-4">
      <div className="blog-detail p-2">
        <div className="custom-breadcrumb my-4 ps-3 py-2">
          <CustomBreadcrumbs
            paths={[
              {
                label: "Trang chủ",
                url: "/",
              },
              {
                label: "Bài viết",
                url: "#",
                onClick: () => onChange(undefined),
              },
              {
                label: blog?.title || "Blog",
                url: "/",
              },
            ]}
          />
        </div>
        <Row className="">
          <Col lg={8} md={8} sm={12} xs={12}>
            <BlogDetail lan={lan} blog={blog} />
          </Col>
          <Col className="p-2 same-blog ">
            <h5 className="text-dark title text-center pt-2">{lan.topBlog}</h5>
            <TopBlogs blogs={topBlogs} lan={lan} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default BlogDetailLayout;
