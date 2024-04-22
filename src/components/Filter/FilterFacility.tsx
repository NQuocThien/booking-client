"use client";
import { useEffect, useState } from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  FormSelect,
  Row,
  Col,
} from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { Sort } from "@/assets/contains/item-interface";
import { ApolloError } from "@apollo/client";
import { facilityVi } from "@/locales/vi/Facility";
import { GetETypeOfFacility } from "@/assets/contains/emun";
// import StatusCpn from "./Status";

interface Iprop {
  lan: typeof facilityVi;
  onSearch: (search: string) => void;
  onChangeType: (type: GetETypeOfFacility | undefined) => void;
  onChangeSearchField: (field: "address" | "medicalFacilityName") => void;
  typeOfFacility: GetETypeOfFacility | undefined;
  loading?: boolean;
  error?: ApolloError | undefined;
}

const FillterCpn = ({
  lan,
  typeOfFacility,
  onSearch,
  loading = undefined,
  onChangeType,
  onChangeSearchField,
  error = undefined,
}: Iprop) => {
  const [value, setValue] = useState<string>("");
  // const [sort, setSort] = useState<Sort>("asc");
  const [type, setType] = useState<GetETypeOfFacility | undefined>(
    typeOfFacility
  );
  useEffect(() => {
    if (typeOfFacility) {
      setType(typeOfFacility);
    }
  }, [typeOfFacility]);
  return (
    <div>
      <div className="mb-2">
        <FormSelect
          className=""
          value={type}
          onChange={(e) => {
            setType(e.target.value as GetETypeOfFacility | undefined);
            onChangeType(e.target.value as GetETypeOfFacility | undefined);
          }}>
          <option value={""}>{lan.labelfillter}</option>
          <option value={GetETypeOfFacility.publicHospital}>
            {lan.labelPublishHospital}
          </option>
          <option value={GetETypeOfFacility.privateHospital}>
            {lan.labelPrivateHospital}
          </option>
          <option value={GetETypeOfFacility.clinic}>{lan.labelClinic}</option>
          <option value={GetETypeOfFacility.vaccinationCenter}>
            {lan.labelVaccination}
          </option>
        </FormSelect>
      </div>
      <Row className="">
        <Form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(value);
          }}>
          <Row className="mb-3">
            <Col lg={8}>
              <FormControl
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Col>
            <Col lg={4}>
              <div className="d-flex">
                <Form.Select
                  className="col-4"
                  onChange={(e) => {
                    const value = e.currentTarget.value as string;
                    if (value === "address") {
                      onChangeSearchField("address");
                    } else if (value === "medicalFacilityName")
                      onChangeSearchField("medicalFacilityName");
                  }}>
                  <option value="medicalFacilityName">{lan.otpName}</option>
                  <option value="address">{lan.otpAddress}</option>
                </Form.Select>
                <Button variant="outline-secondary" type="submit">
                  {!loading && <IoSearch />}
                  {/* {loading && <StatusCpn size="sm" error={error} loading={loading} />} */}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};

export default FillterCpn;
