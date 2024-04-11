import { Blog } from "@/graphql/webbooking-service.generated";
import { blogVi } from "@/locales/vi/Blog";
import Head from "next/head";
import { FacebookProvider, Comments } from "react-facebook";
interface IProps {
  blog: Blog | undefined;
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
  const data_href = `${blog?.slug ? blog.slug : "blog"}`;
  return (
    <FacebookProvider appId="732089505674284">
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
        <div className="border-top border-dark my-4"></div>

        {data_href && <Comments href={`http://localhost:3000/blogs`} />}
      </div>
    </FacebookProvider>
  );
}
export default BlogDetail;
