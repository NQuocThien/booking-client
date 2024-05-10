import { Evaluate } from "@/graphql/webbooking-service.generated";
import { formatDateFull } from "@/utils/tools";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
interface IProps {
  list: Evaluate[];
}
function ListEvaluate({ list }: IProps) {
  return (
    <div>
      <div className="border mb-3"></div>
      <div>
        {list.map((item, key) => (
          <Row
            style={{ maxHeight: 200 }}
            key={key}
            className="overflow-y-auto shadow p-3 mb-5 bg-body-tertiary rounded">
            <Col className="col-2">
              <Image src="/default.png" width={"100%"} roundedCircle />
            </Col>
            <Col>
              <h6>
                <strong>{item.customerName}</strong>
              </h6>
              <div>
                <i
                  className={`${
                    item.rating >= 1 && "text-warning"
                  } bi bi-star-fill`}></i>
                <i
                  className={`${
                    item.rating >= 2 && "text-warning"
                  } bi bi-star-fill`}></i>
                <i
                  className={`${
                    item.rating >= 3 && "text-warning"
                  } bi bi-star-fill`}></i>
                <i
                  className={`${
                    item.rating >= 4 && "text-warning"
                  } bi bi-star-fill`}></i>
                <i
                  className={`${
                    item.rating >= 5 && "text-warning"
                  } bi bi-star-fill`}></i>
              </div>
              <div dangerouslySetInnerHTML={{ __html: item.comment }}></div>
              <i style={{ fontSize: 12 }}>
                {(item.updatedAt && formatDateFull(item.updatedAt)) ||
                  formatDateFull(item.createdAt)}
              </i>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}
export default ListEvaluate;
