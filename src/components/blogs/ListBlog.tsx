import { blogVi } from "@/locales/vi/Blog";
import { Col, Row } from "react-bootstrap";
import MainBlog from "./MainBlog";
import {
  Blog,
  EnumBlogType,
  useGetAllBlogPaginationForClientQuery,
  useGetTotalBlogsCountForClientQuery,
} from "@/graphql/webbooking-service.generated";
import { IPagination } from "@/assets/contains/item-interface";
import { useEffect, useState } from "react";
import useNProgress from "@/hooks/useNProgress";
import TopBlogs from "./TopBlog";
import BlogsCpn from "./Blogs";
import PaginationCpn from "../subs/Pagination";
interface IProps {
  lan: typeof blogVi;
}
interface IFilter {
  pagination: IPagination;
  search: string;
  type: EnumBlogType | undefined;
}
function ListBlog(props: IProps) {
  const { lan } = props;

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filter, setFilter] = useState<IFilter>({
    pagination: {
      current: 1,
      total: 1,
      limit: 8,
    },
    search: "",
    type: undefined,
  });
  // =================================================================
  const { data, loading, error } = useGetAllBlogPaginationForClientQuery({
    variables: {
      limit: filter.pagination.limit || 20,
      page: filter.pagination.current,
      search: filter.search,
      type: filter.type,
    },
  });

  const { data: dataTotal, loading: loadTotal } =
    useGetTotalBlogsCountForClientQuery({
      variables: {
        search: filter.search,
        type: filter.type,
      },
    });
  // =================================================================
  useEffect(() => {
    if (data) setBlogs(data.getAllBlogPaginationForClient);
  }, [data]);
  useEffect(() => {
    if (dataTotal)
      setFilter((pre) => ({
        ...pre,
        pagination: {
          ...pre.pagination,
          total: dataTotal.getTotalBlogsCountForClient,
        },
      }));
  }, [dataTotal]);

  // useEffect(() => {
  useNProgress(loading || loadTotal);
  // }, [loading, loadTotal]);
  // =================================================================
  const getTopBlog = (): Blog | undefined => {
    if (blogs.length > 0) {
      const topBlog = blogs.reduce((pre, blog) => {
        return blog.priority > pre.priority ? blog : pre;
      }, blogs[0]);
      return topBlog;
    } else return undefined;
  };
  const getTop = (number: number): Blog[] => {
    if (blogs.length > 0) {
      const blogsClone = [...blogs];
      const blogSorted = blogsClone.sort((a, b) => {
        return b.priority - a.priority;
      });
      if (number === 0) return blogSorted;
      if (number > 0) return blogSorted.slice(0, number);
      return blogSorted.slice(number * -1);
    } else return [];
  };
  // =================================================================

  return (
    <div className="container blogs">
      <div className="blogs-top d-flex align-items-center mb-3">
        <div
          className={`fs-3 me-3 type ${filter.type === undefined && "active"}`}
          onClick={() => setFilter((pre) => ({ ...pre, type: undefined }))}>
          {lan.titleBlog}
        </div>
        <div
          className={`px-1 fs-5 me-2 type ${
            filter.type === EnumBlogType.Medical && "active"
          }`}
          onClick={() =>
            setFilter((pre) => ({ ...pre, type: EnumBlogType.Medical }))
          }>
          {" "}
          {lan.titleBlogMedical}
        </div>
        <div
          className={`fs-5 px-1 me-2 type ${
            filter.type === EnumBlogType.Health && "active"
          }`}
          onClick={() =>
            setFilter((pre) => ({ ...pre, type: EnumBlogType.Health }))
          }>
          {lan.titleBlogHealth}
        </div>
        <div
          className={`fs-5 px-1s me-2 type ${
            filter.type === EnumBlogType.Service && "active"
          }`}
          onClick={() =>
            setFilter((pre) => ({ ...pre, type: EnumBlogType.Service }))
          }>
          {lan.titleBlogService}
        </div>
      </div>
      <Row className="blogs-main">
        <Col lg={6} md={6} sm={12} xs={12}>
          <MainBlog lan={lan} blog={getTopBlog()} />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <TopBlogs lan={lan} blogs={getTop(3)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <BlogsCpn lan={lan} blogs={getTop(-3)} />
        </Col>
      </Row>
      <div className="d-flex justify-content-center my-2 ">
        <PaginationCpn
          setPageActive={(page) =>
            setFilter((pre) => ({
              ...pre,
              pagination: {
                ...pre.pagination,
                current: page,
              },
            }))
          }
          totalPage={Math.ceil(
            (filter.pagination.limit &&
              filter.pagination.total / filter.pagination.limit) ||
              filter.pagination.total / 10
          )}
        />
      </div>
    </div>
  );
}
export default ListBlog;
