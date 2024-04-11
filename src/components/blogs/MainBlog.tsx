import { Blog, EnumBlogType } from "@/graphql/webbooking-service.generated";
import { blogVi } from "@/locales/vi/Blog";
import { formatDate } from "@/utils/tools";
import Link from "next/link";
import { Col, Row, Image } from "react-bootstrap";
import { FaCircleDot } from "react-icons/fa6";
interface IProps {
  lan: typeof blogVi;
  blog: Blog | undefined;
  onClick: (blog: Blog) => void;
}
function MainBlog(props: IProps) {
  const { lan, blog, onClick } = props;
  if (blog)
    return (
      <div className="blog-main">
        <div className="image">
          <img src={blog?.mainPhoto.url} />
        </div>
        {blog?.type === EnumBlogType.Health && (
          <div className="type text-primary">
            <FaCircleDot /> <span>{lan.labelHealth}</span>
          </div>
        )}
        {blog?.type === EnumBlogType.Medical && (
          <div className="type text-info">
            <FaCircleDot /> <span>{lan.labelMedical}</span>
          </div>
        )}
        {blog?.type === EnumBlogType.Service && (
          <div className="type text-secondary">
            <FaCircleDot /> <span>{lan.labelMedical}</span>
          </div>
        )}
        <div className="title fs-4 text-primary" onClick={() => onClick(blog)}>
          {blog?.title}
        </div>
        <div className="short">
          <i>{blog?.shortContent}</i>
        </div>
        <div className="calendar">
          <i className="bi bi-calendar-check-fill text-secondary me-2"></i>
          <i>
            {blog?.createdAt &&
              formatDate(new Date(blog?.createdAt).toDateString())}
          </i>
        </div>
      </div>
    );
}
export default MainBlog;
