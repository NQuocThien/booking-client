"use client";
import { ApolloError } from "@apollo/client";
import { useEffect, useState } from "react";
import { Form, Button, FormControl, InputGroup, Row } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import {
  EAcademicTitle,
  EDegree,
  EGender,
  FilterDoctorInput,
} from "@/graphql/webbooking-service.generated";
import StatusCpn from "../subs/Status";
import { GetEAcademicTitle, GetEDegree } from "@/assets/contains/emun";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { filterVi } from "@/locales/vi/Facility";
import { filterUs } from "@/locales/en/Facility";
interface IProps {
  // filter: FilterDoctorInput;
  onChangeFilter: (filter: FilterDoctorInput | undefined) => void;
  specialties: { id: string; name: string }[];
  loading?: boolean;
  error?: ApolloError | undefined;
}
function FilterDoctorShort(props: IProps) {
  const { onChangeFilter, loading, error, specialties } = props;
  const [filter, setFilter] = useState<FilterDoctorInput>();
  const currentLan = useSelector((state: RootState) => state.client.language);
  const [lan, setLan] = useState(filterVi);
  const handleChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    var gender: EGender | undefined = undefined;
    if (e.currentTarget.value === EGender.Male) gender = EGender.Male;
    else if (e.currentTarget.value === EGender.Female) gender = EGender.Female;
    setFilter((pre) => ({
      ...pre,
      gender: gender,
    }));
  };
  const handleChangeSpecialty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    var spcialtyId: string | undefined = e.currentTarget.value;
    console.log("test change spec", spcialtyId);
    setFilter((pre) => ({
      ...pre,
      specialistId: spcialtyId,
    }));
    onChangeFilter({ ...filter, specialistId: spcialtyId });
  };
  const handleChangeAcademiTitle = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    var academicTitle: EAcademicTitle | undefined = undefined;
    switch (e.currentTarget.value) {
      case EAcademicTitle.AssociateProfesso:
        academicTitle = EAcademicTitle.AssociateProfesso;
        break;

      case EAcademicTitle.Professor:
        academicTitle = EAcademicTitle.Professor;
        break;

      default:
        academicTitle = undefined;
    }
    setFilter((pre) => ({ ...filter, academicTitle: academicTitle }));
    onChangeFilter({ ...filter, academicTitle: academicTitle });
  };
  const handleChangeDegree = (e: React.ChangeEvent<HTMLSelectElement>) => {
    var degree: EDegree | undefined = undefined;
    switch (e.currentTarget.value) {
      case EDegree.Doctor:
        degree = EDegree.Doctor;
        break;

      case EDegree.DoctorS1:
        degree = EDegree.DoctorS1;
        break;

      case EDegree.DoctorS2:
        degree = EDegree.DoctorS2;
        break;

      case EDegree.Doctorate:
        degree = EDegree.Doctorate;
        break;

      case EDegree.MasterDoctor:
        degree = EDegree.MasterDoctor;
        break;
      default:
        degree = undefined;
    }
    setFilter((pre) => ({ ...filter, degree: degree }));
    onChangeFilter({ ...filter, degree: degree });
  };
  const handleChangName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) setFilter((pre) => ({ ...pre, name: e.target.value }));
    else setFilter((pre) => ({ ...pre, name: undefined }));
  };

  useEffect(() => {
    if (currentLan.code === "vn") {
      setLan(filterVi);
    } else {
      setLan(filterUs);
    }
  }, [currentLan]);
  return (
    <Row className="d-flex gap-3">
      <Form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          onChangeFilter(filter);
        }}>
        <Row>
          <InputGroup size="sm" className="mb-2">
            <FormControl
              size="sm"
              placeholder={lan.holderDoctorName}
              aria-label="Search"
              aria-describedby="basic-search"
              onChange={handleChangName}
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup size="sm" className="mb-2">
            <Form.Select onChange={handleChangeAcademiTitle}>
              <option value={undefined}>{lan.optAcademicTitle}</option>
              <option value={EAcademicTitle.Professor}>
                {lan.optProfessor}
              </option>
              <option value={EAcademicTitle.AssociateProfesso}>
                {lan.optAssociateProfesso}
              </option>
            </Form.Select>

            <Form.Select onChange={handleChangeDegree}>
              <option value={undefined}>{lan.optDegree}</option>
              <option value={EDegree.Doctor}>{lan.optDoctor}</option>
              <option value={EDegree.DoctorS1}>{lan.optDoctorS1}</option>
              <option value={EDegree.DoctorS2}>{lan.optDoctorS2}</option>
              <option value={EDegree.Doctorate}>{lan.optDoctorS2}</option>
              <option value={EDegree.MasterDoctor}>
                {GetEDegree.MasterDoctor}
              </option>
            </Form.Select>
            <Form.Select onChange={handleChangeGender}>
              <option value={undefined}>{lan.optGender}</option>
              <option value={EGender.Male}>{lan.optGenderMale}</option>
              <option value={EGender.Female}>{lan.optGenderFemale}</option>
            </Form.Select>
            <Form.Select onChange={handleChangeSpecialty}>
              <option value={""}>{lan.otpSpecialty}</option>
              {specialties.map((specialty, i) => (
                <option key={i} value={specialty.id}>
                  {specialty.name}
                </option>
              ))}
            </Form.Select>
            <Button variant="outline-secondary" type="submit">
              {!loading && <IoSearch />}
              {loading && (
                <StatusCpn size="sm" error={error} loading={loading} />
              )}
            </Button>
          </InputGroup>
        </Row>
      </Form>
    </Row>
  );
}
export default FilterDoctorShort;
