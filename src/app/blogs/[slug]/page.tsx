"use client";
import { RootState } from "@/redux/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { blogVi } from "@/locales/vi/Blog";
import { blogUs } from "@/locales/en/Blog";
import {
  Blog,
  EnumBlogType,
  useGetAllBlogPaginationForClientQuery,
  useGetBlogBySlugQuery,
} from "@/graphql/webbooking-service.generated";
import BlogDetail from "@/components/blogs/BlogDetail";
import { Col, Row } from "react-bootstrap";
import CustomBreadcrumbs from "@/components/subs/Breadcrumbs";
import useNProgress from "@/hooks/useNProgress";
import TopBlogs from "@/components/blogs/TopBlog";
import { getEnumBlogType } from "@/utils/getData";

function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [lan, setLan] = useState(blogVi);
  const slug = params.slug;
  const currentLan = useSelector((state: RootState) => state.client.language);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(blogUs);
    } else setLan(blogVi);
  }, [currentLan]);
  // =================================================================
  const [blog, setBlog] = useState<Blog>();
  const [topBlogs, setTopBlog] = useState<Blog[]>();
  // =================================================================
  const { data, loading } = useGetBlogBySlugQuery({
    variables: {
      slug: slug,
    },
  });

  const { data: dataBlogSame, loading: loadingBlogSame } =
    useGetAllBlogPaginationForClientQuery({
      variables: {
        limit: 4,
        page: 1,
        type: getEnumBlogType(blog?.type),
      },
    });
  // =================================================================
  useEffect(() => {
    if (data) setBlog(data.getBlogBySlug);
  }, [data]);
  useEffect(() => {
    if (dataBlogSame) setTopBlog(dataBlogSame.getAllBlogPaginationForClient);
  }, [dataBlogSame]);
  useEffect(() => {
    useNProgress(loading || loadingBlogSame);
  }, [loading, loadingBlogSame]);
  return (
    <div className="container py-2">
      <div className="blog-detail p-2">
        <Row>
          <CustomBreadcrumbs
            paths={[
              {
                label: lan.bcHome,
                url: "/",
              },
              {
                label: lan.bcBlog,
                url: "/blogs",
              },
              {
                label: blog?.title || "Blog",
                url: "/",
              },
            ]}
          />
        </Row>
        <Row>
          <Col lg={8}>{blog && <BlogDetail lan={lan} blog={blog} />}</Col>
          <Col className="p-2 same-blog ">
            <h5 className="text-dark title text-center pt-2">{lan.topBlog}</h5>
            <TopBlogs blogs={topBlogs} lan={lan} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default BlogDetailPage;
