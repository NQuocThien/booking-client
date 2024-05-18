import { Blog, EnumBlogType } from "@/graphql/webbooking-service.generated";
import { blogVi } from "@/locales/vi/Blog";
import { formatDate } from "@/utils/tools";
import Link from "next/link";
import { Col, Row, Image } from "react-bootstrap";
import { FaCircleDot } from "react-icons/fa6";
interface IProps {
  lan: typeof blogVi;
  blogs: Blog[] | undefined;
}
function TopBlogs(props: IProps) {
  const { lan, blogs } = props;
  return (
    <div className="blog-priority">
      {blogs?.map((blog, i) => (
        <div key={i} className="d-flex blog-priority-item p-2">
          <div className="image">
            <img
              src={blog?.mainPhoto.url || ""}
              alt={blog.mainPhoto.filename}
            />
          </div>
          <div className="col-8 ps-1">
            <Link href={`/blogs/${blog.slug}`} className="title  text-primary">
              {blog?.title}
            </Link>
            {blog?.type === EnumBlogType.Health && (
              <div className="type ">
                <FaCircleDot className="text-primary" />{" "}
                <span>{lan.labelHealth}</span>
              </div>
            )}
            {blog?.type === EnumBlogType.Medical && (
              <div className="type ">
                <FaCircleDot className="text-info" />{" "}
                <span>{lan.labelMedical}</span>
              </div>
            )}
            {blog?.type === EnumBlogType.Service && (
              <div className="type">
                <FaCircleDot className="text-secondary" />{" "}
                <span>{lan.labelMedical}</span>
              </div>
            )}
            <div className="calendar">
              <i className="bi bi-calendar-check-fill text-secondary me-2"></i>
              <i>
                {blog?.createdAt &&
                  formatDate(new Date(blog?.createdAt).toDateString())}
              </i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TopBlogs;
