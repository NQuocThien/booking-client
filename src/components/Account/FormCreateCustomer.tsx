"use client";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";
import { formCustomerVi } from "@/locales/vi/Account";
import {
  CreateCustomerInput,
  Customer,
  EGender,
  User,
  useCreateCustomerByUserIdMutation,
} from "@/graphql/webbooking-service.generated";
import { useDispatch } from "react-redux";
import { checkExpToken } from "@/redux/store/client";
import useNProgress from "@/hooks/useNProgress";
import { getEnumValueGender } from "@/utils/getData";
import { showToast } from "../subs/toast";

interface InforUserCpnProps {
  isloginIn: boolean;
  lan: typeof formCustomerVi;
  inforUser: User;
  onCreate: (user: Customer) => void;
}
function FormCreateCustomer({
  isloginIn,
  lan,
  inforUser,
  onCreate,
}: InforUserCpnProps) {
  // console.log("test:11 ", inforUser);
  // console.log("test:22 ", isloginIn);

  const [formData, setFormData] = useState<CreateCustomerInput>({
    address: "",
    email: "",
    ethnic: "",
    gender: EGender.Male,
    dateOfBirth: "",
    fullname: "",
    numberPhone: "",
    userId: "",
  });
  const [validated, setValidated] = useState(false);
  const [createCustomer, { data: dataupdateUser, loading: loadingUpdateUser }] =
    useCreateCustomerByUserIdMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(checkExpToken());
    setValidated(true);
    if (e.currentTarget.checkValidity()) {
      await createCustomer({
        variables: {
          input: formData,
        },
      })
        .then(() => {
          showToast(lan.messCreatedProfile);
        })
        .catch((err) => {
          console.log(err);
          showToast(lan.messError, "error");
        });
    }
  };
  useEffect(() => {
    if (inforUser) {
      setFormData((pre) => ({
        ...pre,
        userId: inforUser.id,
      }));
    }
  }, [inforUser]);
  useEffect(() => {
    useNProgress(loadingUpdateUser);
  }, [loadingUpdateUser]);
  useEffect(() => {
    if (dataupdateUser?.createCustomer) onCreate(dataupdateUser.createCustomer);
  }, [dataupdateUser]);

  return (
    <Container className="account">
      {isloginIn && formData && (
        <Row>
          <Form validated={validated} onSubmit={handleSubmit}>
            <h4 className="text-center my-3">{lan.titleCreate}</h4>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {lan.titleFullname}
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
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
                    {lan.titlePhone} <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
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
                    aria-label="Default select example"
                    value={formData.gender}
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
                    <option value="Nam">{lan.labelMale}</option>
                    <option value="Nữ">{lan.labelFemale}</option>
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
                    value={formData.dateOfBirth}
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
                    value={formData.email || ""}
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
                    type="text"
                    placeholder={lan.holderEthnic}
                    value={formData.ethnic || ""}
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
                    Địa chỉ : <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Long Xuyên, An Giang"
                    value={formData.address || ""}
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
            <Row>
              <Button type="submit">Lưu </Button>
            </Row>
          </Form>
        </Row>
      )}
    </Container>
  );
}

export default FormCreateCustomer;
