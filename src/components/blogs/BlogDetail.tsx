import { Blog } from "@/graphql/webbooking-service.generated";
import { blogVi } from "@/locales/vi/Blog";
import { useLayoutEffect, useState } from "react";
import DisqusComments from "../subs/Comment";
import { formatDate } from "@/utils/tools";
interface IProps {
  blog: Blog;
  lan: typeof blogVi;
}
function BlogDetail(props: IProps) {
  const { blog, lan } = props;

  const renderKeyword = (keywords: string | undefined): string[] => {
    if (keywords) {
      const trimKeywords = keywords.trim();
      const arr = trimKeywords.split(",").map((item) => item.trim());
      return arr;
    }
    return [];
  };
  const [dataHref, setDataHref] = useState<string>();
  useLayoutEffect(() => {
    if (blog?.slug) setDataHref(`http://localhost:3000/blogs/${blog.slug}`);
  }, [blog?.slug]);
  return (
    <div className="main p-3 ">
      <div className="title mb-4 ">
        <h2 className=" fw-bold mb-4 text-primary">{blog?.title}</h2>
      </div>
      <div className="short-content">
        <i>{blog?.shortContent}</i>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: blog?.content || "",
        }}></div>
      <div className="border-top  my-4"></div>
      <div className="keywords">
        <span className="me-1">{lan.lableKeyword}:</span>
        {renderKeyword(blog?.keywords).map((item, i) => (
          <span className="keyword-item p-1" key={i}>
            {item}{" "}
          </span>
        ))}
      </div>
      <div className="mt-3">
        {formatDate(new Date(blog?.createdAt).toDateString())} --{" "}
        {blog.createdBy.showName}
      </div>
      <div className="border-top border-dark my-4"></div>
      <DisqusComments
        shortname="bookingcare"
        identifier={blog.id}
        title={"phong-chong-sot-xuat-huyet"}
        url={`https://localhost:3000/blogs/${blog.slug}`}
      />
    </div>
  );
}
export default BlogDetail;
