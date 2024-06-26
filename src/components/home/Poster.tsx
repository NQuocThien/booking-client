"use client";
import { ETypeOfServiceParameters } from "@/assets/contains/emun";
import { homeVi } from "@/locales/vi/Home";
import Link from "next/link";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import Select, { ActionMeta, components, StylesConfig } from "react-select";
interface IProps {
  lan: typeof homeVi;
}
interface OptionType {
  value: string;
  label: string;
}
function PosterCpn(props: IProps) {
  const { lan } = props;

  const customStyles: StylesConfig<OptionType, false> = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#007bff" : "white",
      cursor: "pointer",
    }),
    control: (provided) => ({
      ...provided,
      fontSize: "18px",
    }),
  };
  const SearchIndicator = (props: any) => {
    return (
      <components.IndicatorsContainer {...props}>
        <div
          style={{ cursor: "pointer", marginRight: "5px", color: "#000" }}
          onClick={props.selectProps.onMenuOpen}>
          <CiSearch size={20} /> {/* Đặt kích thước của biểu tượng search */}
        </div>
      </components.IndicatorsContainer>
    );
  };

  const options = [
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
    { value: "vue", label: "Vue.js" },
    { value: "nextjs", label: "Next.js" },
    { value: "gatsby", label: "Gatsby" },
  ];
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const handleChange = (
    newValue: OptionType | null,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSelectedOption(newValue);
  };

  return (
    <Row>
      <Row className="my-5">
        <Col sm={12} md={12} lg={8}>
          <h1 className="text-light title-top mt-5 mb-3">{lan.title1}</h1>
          {/* <h4 className="text-light title-top mt-5 mb-3">{lan.title2}</h4> */}
          {/* <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            components={{ IndicatorsContainer: SearchIndicator }} // Sử dụng component tùy chỉnh để thay đổi biểu tượng search
            styles={customStyles}
            isClearable
            placeholder="Chọn hoặc nhập từ khóa"
            className="custom-select"
          /> */}
        </Col>
      </Row>
      <Row className="mt-3 g-2 ">
        <Col lg={3} md={4} sm={6} xs={6}>
          <Link
            href={`/regis-services?type=${ETypeOfServiceParameters.Doctor}`}
            className="service-item py-2">
            <img
              className="img-icon mb-3"
              src="/imgs/icons/doctor-icon.png"
              alt="doctor"
            />
            <p className="text-dark text-center caption">{lan.srvDoctor}</p>
          </Link>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6}>
          <Link
            className="service-item py-2"
            href={`/regis-services?type=${ETypeOfServiceParameters.Specialty}`}>
            <img
              className="img-icon mb-3"
              src="/imgs/icons/specialty-icon.png"
              alt="specialty"
            />
            <p className="text-dark text-center caption">{lan.srvSpecialty}</p>
          </Link>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6}>
          <Link
            className="service-item py-2"
            href={`/regis-services?type=${ETypeOfServiceParameters.Package}`}>
            <img
              className="img-icon mb-3"
              src="/imgs/icons/package-icon.png"
              alt="package"
            />
            <p className="text-dark text-center caption">{lan.srvPackage}</p>
          </Link>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6}>
          <Link
            className="service-item py-2"
            href={`/regis-services?type=${ETypeOfServiceParameters.Vaccine}`}>
            <img
              className="img-icon mb-3"
              src="/imgs/icons/vaccination-icon.png"
              alt="vaccination"
            />
            <p className="text-dark text-center caption">
              {lan.srvVaccination}
            </p>
          </Link>
        </Col>
      </Row>
    </Row>
  );
}
export default PosterCpn;
