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
    <Row className="row">
      <Col lg={8} md={6} sm={12} xs={12}>
        <Form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(value);
          }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {/* <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          /> */}

            <Button variant="outline-secondary" type="submit">
              {!loading && <IoSearch />}
              {/* {loading && <StatusCpn size="sm" error={error} loading={loading} />} */}
            </Button>
          </InputGroup>
        </Form>
      </Col>
      <Col lg={4} md={6} sm={12} xs={12}>
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
      </Col>
    </Row>
  );
};

export default FillterCpn;
