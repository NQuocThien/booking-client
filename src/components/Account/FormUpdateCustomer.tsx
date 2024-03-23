"use client";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";
import { formCustomerVi } from "@/locales/vi/Account";
import {
  Customer,
  EGender,
  UpdateCustomerInput,
  User,
  useUpdateCustomerMutation,
} from "@/graphql/webbooking-service.generated";
import { useDispatch } from "react-redux";
import { checkExpToken } from "@/redux/store/client";
import useNProgress from "@/hooks/useNProgress";
import { getEnumValueGender } from "@/utils/getData";
import { showToast } from "../subs/toast";
import { formatDate } from "@/utils/tools";

interface InforUserCpnProps {
  isloginIn: boolean;
  lan: typeof formCustomerVi;
  inforUser: User;
  onChangeCustomer: (customer: Customer) => void;
}
function InforCustomerCpn({
  isloginIn,
  lan,
  inforUser,
  onChangeCustomer,
}: InforUserCpnProps) {
  const [disable, setDisabled] = useState<boolean>(true);
  const [formData, setFormData] = useState<UpdateCustomerInput>({
    id: "",
    address: "",
    email: "",
    ethnic: "",
    gender: EGender.Male,
    dateOfBirth: "",
    fullname: "",
    numberPhone: "",
  });
  const [validated, setValidated] = useState(false);
  const [
    updateCustomer,
    { data: dataupdateCustomer, loading: loadingUpdateUser },
  ] = useUpdateCustomerMutation({
    onQueryUpdated: () => {},
  });
  const dispatch = useDispatch();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      dispatch(checkExpToken());
      // console.log("submit", formData);
      const input: UpdateCustomerInput = {
        id: formData.id,
        address: formData.address,
        dateOfBirth: formData.dateOfBirth,
        email: formData.email,
        ethnic: formData.ethnic,
        gender: formData.gender,
        fullname: formData.fullname,
        numberPhone: formData.numberPhone,
      };
      await updateCustomer({
        variables: {
          input: input,
        },
      })
        .then(() => {
          showToast(lan.messUpdateSuccess);

          setDisabled(true);
        })
        .catch((err) => {
          showToast(lan.messError, "error");
          console.log(err);
        });
    }
  };

  useEffect(() => {
    useNProgress(loadingUpdateUser);
    if (dataupdateCustomer) {
      const newCus: Customer = dataupdateCustomer.updateCustomer;
      onChangeCustomer(newCus);
    }
  }, [dataupdateCustomer, loadingUpdateUser]);

  useEffect(() => {
    if (inforUser.customer) {
      const customer: Customer = inforUser.customer;
      const input: UpdateCustomerInput = {
        ...customer,
        gender: getEnumValueGender(customer.gender),
      };
      setFormData(input);
    }
    useNProgress(loadingUpdateUser);
  }, [inforUser]);
  // console.log("test form data: ", formData);
  return (
    <Container className="account">
      {isloginIn && formData && (
        <Row>
          <Form validated={validated} onSubmit={handleSubmit}>
            <h4 className="text-center my-3"> {lan.titleUpdate}</h4>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {lan.titleFullname}: <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    disabled={disable}
                    type="text"
                    value={formData?.fullname}
                    onChange={(e) =>
                      setFormData(
                        (pre) =>
                          pre && {
                            ...pre,
                            fullname: e.target.value,
                          }
                      )
                    }
                    placeholder={lan.holderFullname}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {lan.titlePhone}: <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    disabled={disable}
                    type="text"
                    placeholder={lan.holderPhone}
                    value={formData.numberPhone}
                    onChange={(e) =>
                      setFormData(
                        (pre) =>
                          pre && {
                            ...pre,
                            numberPhone: e.target.value,
                          }
                      )
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {lan.titleGender} <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    required
                    disabled={disable}
                    defaultValue={formData.gender}
                    onChange={(e) =>
                      setFormData(
                        (pre) =>
                          pre && {
                            ...pre,
                            gender: getEnumValueGender(e.target.value),
                          }
                      )
                    }>
                    <option>{lan.labelGender}</option>
                    <option value={EGender.Male}>{lan.labelMale}</option>
                    <option value={EGender.Female}>{lan.labelFemale}</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {lan.titleDateOfBirth}:{" "}
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    disabled={disable}
                    value={formatDate(formData.dateOfBirth)}
                    onChange={(e) =>
                      setFormData(
                        (pre) =>
                          pre && {
                            ...pre,
                            dateOfBirth: e.target.value,
                          }
                      )
                    }
                    type="date"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {lan.titleEmail}: <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    disabled={disable}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData(
                        (pre) =>
                          pre && {
                            ...pre,
                            email: e.target.value,
                          }
                      )
                    }
                    placeholder={lan.holderMail}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {lan.titleEthnic}: <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    disabled={disable}
                    type="text"
                    placeholder="Kinh"
                    value={formData.ethnic}
                    onChange={(e) =>
                      setFormData(
                        (pre) =>
                          pre && {
                            ...pre,
                            ethnic: e.target.value,
                          }
                      )
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {lan.titleAddress} : <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    disabled={disable}
                    type="text"
                    placeholder={lan.holderAddress}
                    value={formData.address}
                    onChange={(e) =>
                      setFormData(
                        (pre) =>
                          pre && {
                            ...pre,
                            address: e.target.value,
                          }
                      )
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="my-3 text-end">
              <Button
                className="me-2"
                size="sm"
                variant="outline-success"
                active={!disable}
                onClick={() => setDisabled((pre) => !pre)}>
                {lan.btnUpdate}{" "}
              </Button>
              <Button type="submit" size="sm" disabled={disable}>
                {lan.btnSave}{" "}
              </Button>
            </div>
          </Form>
        </Row>
      )}
    </Container>
  );
}

export default InforCustomerCpn;
