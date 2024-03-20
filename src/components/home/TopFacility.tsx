import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MedicalFacilities,
  useGetTopMedicalFacilitiesQuery,
} from "@/graphql/webbooking-service.generated";
import { Button, Card } from "react-bootstrap";
import { GetETypeOfFacility } from "@/assets/contains/emun";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";

interface IText {
  titleTop: string;
  titleSub: string;
  btnRegis: string;
  btnDetail: string;
}
interface IProps {
  lan: IText;
  type: GetETypeOfFacility;
}

function TopFacilitiesCpn(props: IProps) {
  const { lan, type } = props;

  const [items, setItems] = useState<MedicalFacilities[]>([]);
  const [slidesToShow, setSlidesToShow] = useState<number>(5);

  const { data, loading } = useGetTopMedicalFacilitiesQuery({
    variables: {
      limit: 5,
      typeFacility: type,
    },
  });

  useEffect(() => {
    if (data?.getTopMedicalFacilities) {
      const topMedicalFacilities = data?.getTopMedicalFacilities;
      setItems(topMedicalFacilities);
      if (topMedicalFacilities.length <= 5) {
        setSlidesToShow(topMedicalFacilities.length);
      } else {
        setSlidesToShow(5);
      }
    }
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(Math.min(items.length, 5));
      } else if (window.innerWidth >= 992) {
        setSlidesToShow(Math.min(items.length, 2));
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(Math.min(items.length, 2));
      } else {
        setSlidesToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [items]);

  function isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  if (items.length === 0) return null;
  if (items.length === 1) {
    return (
      <div className="container">
        <h2 className="title-top text-center text-primary">{lan.titleTop}</h2>
        <h3 className="title-buttom text-center text-success">
          {lan.titleSub}
        </h3>
        <div className="d-flex justify-content-center">
          {items.map((item, i) => (
            <Card key={i} style={{ width: "18rem" }} className="">
              <Card.Img
                variant="top"
                height={180}
                src={(isValidUrl(item.image.url) && item.image.url) || ""}
              />
              <Card.Body>
                <Card.Title>{item.medicalFacilityName}</Card.Title>
                <Card.Text>
                  <CiLocationOn />: {item.address}
                </Card.Text>
                <Button variant="primary" className="me-2" size="sm">
                  {lan.btnRegis}
                </Button>
                <Button variant="outline-primary" size="sm">
                  {lan.btnDetail}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="title-top text-center text-primary">{lan.titleTop}</h2>
      <h3 className="title-buttom text-center text-success">{lan.titleSub}</h3>
      <div className="text-center">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          centerPadding="0px">
          {items.map((item, i) => (
            <div key={i}>
              <Card style={{ width: "18rem" }} className="">
                <Card.Img
                  variant="top"
                  height={180}
                  src={(isValidUrl(item.image.url) && item.image.url) || ""}
                />
                <Card.Body>
                  <Card.Title>{item.medicalFacilityName}</Card.Title>
                  <Card.Text>
                    <CiLocationOn />: {item.address}
                  </Card.Text>
                  <Button variant="primary" className="me-2" size="sm">
                    {lan.btnRegis}
                  </Button>
                  <Button variant="outline-primary" size="sm">
                    {lan.btnDetail}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopFacilitiesCpn;
