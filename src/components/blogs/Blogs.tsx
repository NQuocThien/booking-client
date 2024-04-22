import { Blog, EnumBlogType } from "@/graphql/webbooking-service.generated";
import { blogVi } from "@/locales/vi/Blog";
import { formatDate } from "@/utils/tools";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { FaCircleDot } from "react-icons/fa6";
interface IProps {
  lan: typeof blogVi;
  blogs: Blog[] | undefined;
}
function BlogsCpn(props: IProps) {
  const { lan, blogs } = props;
  return (
    <Row className="blog-normal mt-3 p-3">
      {blogs?.map((blog, i) => (
        <Col
          lg={4}
          md={4}
          sm={6}
          xs={12}
          key={i}
          className=" blog-normal-item p-2">
          <div className="image">
            <img src={blog?.mainPhoto.url || ""} />
          </div>
          <div className="ps-1">
            <Link
              href={`/blogs/${blog.slug}`}
              className="title mb-1 text-primary">
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
        </Col>
      ))}
    </Row>
  );
}
export default BlogsCpn;
