"use client";
import {
  CreateProfileInput,
  EGender,
  GetProfileByCustomerKeyQuery,
  Profile,
  UpdateProfileInput,
  useCreateProfileMutation,
  useDeleteProfileMutation,
  useGetProfileByCustomerIdQuery,
  useGetProfileByCustomerKeyQuery,
  useShareProfileMutation,
  useUpdateProfileMutation,
} from "@/graphql/webbooking-service.generated";
import useNProgress from "@/hooks/useNProgress";
import { getEnumValueGender } from "@/utils/getData";
import { formatDate } from "@/utils/tools";
import { FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AiFillFileAdd } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaPeopleGroup, FaRegShareFromSquare } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiShareDuotone } from "react-icons/pi";
import {
  MdAddLocation,
  MdDeleteForever,
  MdEdit,
  MdModeEdit,
  MdOutlineEmail,
  MdOutlineTransgender,
} from "react-icons/md";
import { showToast } from "../subs/toast";
import { formCustomerVi } from "@/locales/vi/Account";
import { useDispatch } from "react-redux";
import { checkExpToken } from "@/redux/store/client";
import ModalCpn from "../subs/Modal";
import { SiStaffbase } from "react-icons/si";
import { GiMedicalPackAlt } from "react-icons/gi";
enum Estate {
  add,
  list,
  update,
  ticked,
  share,
}
interface IProps {
  customerId: string;
  customerKey: string;
  lan: typeof formCustomerVi;
}
function ManaProfile({ customerId, lan, customerKey }: IProps) {
  const dispatch = useDispatch();
  const [state, setState] = useState<Estate>(Estate.list);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [profileDetail, setProfileDetail] = useState<Profile>();
  const [modal, setModal] = useState(false);
  const [modalShare, setModalShare] = useState(false);
  const [validated, setValidated] = useState<boolean>(false);
  const [shareInput, setShareInput] = useState({
    customerKey: "",
    profileId: "",
  });
  const [profileShare, setProfileShare] =
    useState<GetProfileByCustomerKeyQuery["getProfileByCustomerKey"]>();
  const [createProfileInput, setCreateProfileInput] =
    useState<CreateProfileInput>({
      fullname: "",
      address: "",
      customerId: customerId,
      dataOfBirth: "",
      email: "",
      ethnic: "",
      gender: EGender.Male,
      identity: "",
      job: "",
      medicalInsurance: "",
      numberPhone: "",
      relationship: "",
    });
  // =================================================================
  const { data, loading, error } = useGetProfileByCustomerIdQuery({
    variables: {
      input: customerId,
    },
  });
  const {
    data: dateShare,
    loading: loadingShare,
    error: errorShare,
  } = useGetProfileByCustomerKeyQuery({
    fetchPolicy: "no-cache",
    variables: {
      customerKey: customerKey,
    },
  });
  const [createProfile, { data: dataCreate, loading: loadingCreate }] =
    useCreateProfileMutation();

  const [share, { loading: loadShare }] = useShareProfileMutation({
    fetchPolicy: "no-cache",
  });

  const [updateProfile, { data: dataUpdate, loading: loadingUpdate }] =
    useUpdateProfileMutation();

  const [updateProfileInput, setUpdateProfileInput] =
    useState<UpdateProfileInput>();

  const [deleteProfile, { loading: loadingDelete }] =
    useDeleteProfileMutation();
  // =====================================================================
  useEffect(() => {
    if (data) {
      setProfiles(data.getProfileByCustomerId);
    }
  }, [data]);
  useEffect(() => {
    if (dateShare?.getProfileByCustomerKey) {
      setProfileShare(dateShare.getProfileByCustomerKey);
    }
  }, [dateShare]);
  useNProgress(
    loading ||
      loadingCreate ||
      loadingUpdate ||
      loadingDelete ||
      loadingShare ||
      loadShare
  );
  useEffect(() => {
    if (dataCreate) {
      const newProfile = dataCreate.createProfile;
      setProfiles((pre) => [...pre, newProfile]);
    }
  }, [dataCreate]);
  useEffect(() => {
    if (dataUpdate) {
      const newProfile = dataUpdate.updateProfile;
      setProfiles((pre) =>
        pre.map(
          (profile) => (profile.id === newProfile.id && newProfile) || profile
        )
      );
    }
  }, [dataUpdate]);
  //  =========================================================================

  const handleClickUpdate = (profile: Profile) => {
    const input: UpdateProfileInput = {
      id: profile.id,
      address: profile.address,
      dataOfBirth: profile.dataOfBirth,
      email: profile.email,
      gender: getEnumValueGender(profile.gender),
      ethnic: profile.ethnic,
      fullname: profile.fullname,
      identity: profile.identity,
      job: profile.job,
      medicalInsurance: profile.medicalInsurance,
      numberPhone: profile.numberPhone,
      relationship: profile.relationship,
    };
    setUpdateProfileInput(input);
    setState(Estate.update);
  };

  const handleCreateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setValidated(true);
    dispatch(checkExpToken());
    if (form.checkValidity()) {
      console.log("test validation");
      await createProfile({
        variables: {
          input: createProfileInput,
        },
      })
        .then(() => {
          showToast(lan.messCreatedProfile);
          setValidated(false);
          setState(Estate.list);
        })
        .catch((err) => {
          showToast(lan.messError, "error");
        });
    }
  };

  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setValidated(true);
    dispatch(checkExpToken());
    if (form.checkValidity() && updateProfileInput) {
      //   console.log("test validation");
      await updateProfile({
        variables: {
          input: updateProfileInput,
        },
      })
        .then(() => {
          showToast(lan.messUpdateProfile);
          setValidated(false);
          setState(Estate.list);
        })
        .catch((err) => {
          showToast(lan.messError, "error");
        });
    }
  };

  const handleDeleteProfile = async (profile: Profile) => {
    const idDelete = profile.id;
    const confirm = window.confirm(lan.askDeleteProfile);
    if (confirm) {
      deleteProfile({
        variables: {
          input: idDelete,
        },
      })
        .then(() => {
          showToast(lan.messDeletePropfile, "success");
          setProfiles((pre) =>
            pre.filter((profile) => profile.id !== idDelete)
          );
        })
        .catch(() => {
          showToast(lan.messError, "error");
        });
    }
  };
  const handleShowModalDetail = (profile: Profile) => {
    setProfileDetail(profile);
    setModal(true);
  };
  const handleShowModalShare = (profile: Profile) => {
    setShareInput((pre) => ({ ...pre, profileId: profile.id }));
    setModalShare(true);
  };
  const handleShare = async () => {
    await share({
      variables: {
        customerKey: shareInput.customerKey,
        profileId: shareInput.profileId,
      },
    })
      .then(() => {
        showToast(lan.mesShare);
        setModalShare(false);
      })
      .catch((err) => {
        showToast(err.message);
      });
  };
  // =================================================================
  return (
    <div className="py-3">
      <Row>
        <Col lg={2} md={2} sm={2}>
          <div className="d-flex flex-column gap-3">
            <Button
              variant="outline-success"
              onClick={() => setState(Estate.list)}
              active={state === Estate.list}
              size="sm">
              <ImProfile /> {lan.btnListProfile}
            </Button>
            <Button
              variant="outline-success"
              onClick={() => setState(Estate.share)}
              active={state === Estate.share}
              size="sm">
              <FaRegShareFromSquare /> {lan.btnListProfileShare}
            </Button>

            <Button
              variant="outline-success"
              onClick={() => setState(Estate.add)}
              active={state === Estate.add}
              size="sm">
              <AiFillFileAdd /> {lan.btnCreateProfile}
            </Button>

            {state === Estate.update && (
              <Button
                variant="outline-success"
                onClick={() => setState(Estate.update)}
                active={state === Estate.update}
                size="sm">
                <MdEdit /> {lan.btnUpdateProfile}
              </Button>
            )}
          </div>
        </Col>
        <Col>
          {state === Estate.list && profiles?.length === 0 && (
            <Col>
              <h4 className="fw-bold">{lan.titleProfileNone} 🙌🙌🙌</h4>
              <h5 className="fw-bold">{lan.titleProfileSay} ➕➕➕</h5>
            </Col>
          )}
          {state === Estate.share && profileShare?.length === 0 && (
            <Col>
              <h4 className="fw-bold">{lan.titleProfileNone} 🙌🙌🙌</h4>
            </Col>
          )}
          {state === Estate.list && profiles && (
            <Col className="col-12">
              <h4 className="fw-bold">{lan.titleProfile}</h4>
              {profiles.map((profile, i) => (
                <div key={i} className="shadow-lg bg-light p-3 mt-3">
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <IoPersonCircleOutline />
                      </span>
                      {lan.titleFullname}:{" "}
                      <strong className="text-success ms-2">
                        {profile.fullname}{" "}
                      </strong>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <CiCalendarDate />
                      </span>
                      {lan.titleDateOfBirth}:
                      <span className="text-info ms-2">
                        {formatDate(profile.dataOfBirth)}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <FaPhone />
                      </span>
                      {lan.titleFullname}:
                      <span className="text-info ms-2">
                        {profile.numberPhone}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <MdOutlineTransgender />
                      </span>
                      {lan.titleGender}:
                      <span className="text-info ms-2">{profile.gender}</span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <MdAddLocation />
                      </span>
                      {lan.titleAddress}:
                      <span className="text-info ms-2">{profile.address}</span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <FaPeopleGroup />
                      </span>
                      {lan.titleEthnic}:
                      <span className="text-info ms-2">{profile.ethnic}</span>
                    </h6>
                  </div>
                  {profile.shares && profile.shares?.length > 0 && (
                    <div className="px-3">
                      <div className="d-flex">
                        <span className="text-primary me-1">
                          <PiShareDuotone />
                        </span>
                        {lan.titleShared}:
                        <div className="d-flex text-warning ms-2">
                          {profile?.shares?.map((customerKey, index) => (
                            <span className="me-2 " key={index}>
                              {" "}
                              <span className="user-select-all">
                                {customerKey}
                              </span>
                              {profile.shares &&
                              index === profile.shares?.length - 1
                                ? "."
                                : ","}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="text-end">
                    <Button
                      variant="outline-danger"
                      className="mx-1"
                      size="sm"
                      onClick={() => handleDeleteProfile(profile)}>
                      <MdDeleteForever />
                    </Button>
                    <Button // sửa
                      variant="outline-warning"
                      className=" mx-1"
                      size="sm"
                      onClick={() => handleClickUpdate(profile)}>
                      <MdModeEdit />
                    </Button>
                    <Button
                      variant="outline-info"
                      className="mx-1"
                      onClick={() => handleShowModalDetail(profile)}
                      size="sm">
                      <BiMessageAltDetail />
                    </Button>
                    <Button
                      variant="outline-success"
                      className="mx-1"
                      onClick={() => handleShowModalShare(profile)}
                      size="sm">
                      <FaRegShareFromSquare />
                    </Button>
                  </div>
                </div>
              ))}
            </Col>
          )}
          {state === Estate.share && profileShare && (
            <Col className="col-12">
              <h4 className="fw-bold">{lan.titleProfile}</h4>
              {profileShare.map((item, i) => (
                <div key={i} className="shadow-lg bg-light p-3 mt-3">
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <IoPersonCircleOutline />
                      </span>
                      {lan.titleFullname}:{" "}
                      <strong className="text-success ms-2">
                        {item.fullname}{" "}
                      </strong>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <CiCalendarDate />
                      </span>
                      {lan.titleDateOfBirth}:
                      <span className="text-info ms-2">
                        {formatDate(item.dataOfBirth)}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <FaPhone />
                      </span>
                      {lan.titleFullname}:
                      <span className="text-info ms-2">{item.numberPhone}</span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <MdOutlineTransgender />
                      </span>
                      {lan.titleGender}:
                      <span className="text-info ms-2">{item.gender}</span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <MdAddLocation />
                      </span>
                      {lan.titleAddress}:
                      <span className="text-info ms-2">{item.address}</span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <FaPeopleGroup />
                      </span>
                      {lan.titleEthnic}:
                      <span className="text-info ms-2">{item.ethnic}</span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary me-1">
                        <FaRegShareFromSquare />
                      </span>
                      {lan.titleShare}:
                      <span className="text-success ms-2">
                        {item.customer?.fullname}
                      </span>
                    </h6>
                  </div>
                  <div className="text-end">
                    <Button
                      variant="outline-info"
                      className="mx-1"
                      onClick={() => {
                        const { customer, ...profile } = item;
                        handleShowModalDetail(profile);
                      }}
                      size="sm">
                      <BiMessageAltDetail />
                    </Button>
                  </div>
                </div>
              ))}
            </Col>
          )}

          {state === Estate.add && (
            <Col className="col-12 form-add px-3 py-2">
              <Form validated={validated} onSubmit={handleCreateProfile}>
                <h4 className="text-center py-3">{lan.titleCreateProfile}</h4>
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleFullname}{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={createProfileInput?.fullname}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            fullname: e.target.value,
                          }))
                        }
                        placeholder={lan.holderFullname}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titlePhone}: <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="0789624614"
                        value={createProfileInput.numberPhone}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            numberPhone: e.target.value,
                          }))
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleGender}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        required
                        aria-label="Default select example"
                        value={createProfileInput.gender}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            gender: e.target.value as EGender,
                          }))
                        }>
                        <option>{lan.labelGender}</option>
                        <option value={EGender.Male}>{lan.labelMale}</option>
                        <option value={EGender.Female}>
                          {lan.labelFemale}
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleDateOfBirth}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        // defaultValue={createProfileInput.dataOfBirth}
                        value={formatDate(createProfileInput.dataOfBirth)}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            dataOfBirth: e.target.value,
                          }))
                        }
                        type="date"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleJob}: <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={lan.holderJob}
                        required
                        value={createProfileInput.job}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            job: e.target.value,
                          }))
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleEmail}: <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="email"
                        value={createProfileInput.email}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            email: e.target.value,
                          }))
                        }
                        placeholder={lan.holderMail}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>{lan.titleIndentity}:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={lan.holderIndentity}
                        value={createProfileInput.identity}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            identity: e.target.value,
                          }))
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>{lan.titleMedicalInsurance}:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={lan.holderMedicalInsurance}
                        value={createProfileInput.medicalInsurance}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            medicalInsurance: e.target.value,
                          }))
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleEthnic}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder={lan.holderEthnic}
                        value={createProfileInput.ethnic}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            ethnic: e.target.value,
                          }))
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleAddress}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder={lan.holderAddress}
                        value={createProfileInput.address}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            address: e.target.value,
                          }))
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleRelationship}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        required
                        value={createProfileInput.relationship}
                        onChange={(e) =>
                          setCreateProfileInput((pre) => ({
                            ...pre,
                            relationship: e.target.value,
                          }))
                        }>
                        <option>{lan.labelRelationship}</option>
                        <option value="Tôi">{lan.labelMyself}</option>
                        <option value="Vợ/Chồng">
                          {lan.labelHusbandOrWife}{" "}
                        </option>
                        <option value="Mẹ">{lan.labelMother}</option>
                        <option value="Bố">{lan.labelFather}</option>
                        <option value="Con">{lan.labelSon}</option>
                        <option value="Khác">{lan.labelOther}</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Button type="submit">
                    Lưu{" "}
                    {/* {loadingCreate && (
                      <Spinner animation="border" variant="light" size="sm" />
                    )}{" "} */}
                  </Button>
                </Row>
              </Form>
            </Col>
          )}
          {state === Estate.update && updateProfileInput && (
            <Col className="col-12 bg-light rounded px-3 py-2">
              <Form validated={validated} onSubmit={handleUpdateProfile}>
                <h4 className="text-center py-3">{lan.titleUpdateProfile}</h4>
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleFullname}{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={
                          (updateProfileInput.fullname &&
                            updateProfileInput.fullname) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
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
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titlePhone}: <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="0789624614"
                        value={
                          (updateProfileInput.numberPhone &&
                            updateProfileInput.numberPhone) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
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
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleGender}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        required
                        aria-label="Default select example"
                        value={
                          (updateProfileInput.gender &&
                            updateProfileInput.gender) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
                            (pre) =>
                              pre && {
                                ...pre,
                                gender: e.target.value as EGender,
                              }
                          )
                        }>
                        <option>{lan.labelGender}</option>
                        <option value={EGender.Male}>{lan.labelMale}</option>
                        <option value={EGender.Female}>
                          {lan.labelFemale}
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleDateOfBirth}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        // defaultValue={updateProfileInput.dataOfBirth && updateProfileInput.dataOfBirth || ''}
                        value={formatDate(updateProfileInput.dataOfBirth)}
                        onChange={(e) =>
                          setUpdateProfileInput(
                            (pre) =>
                              pre && {
                                ...pre,
                                dataOfBirth: e.target.value,
                              }
                          )
                        }
                        type="date"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleJob}: <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={lan.holderJob}
                        required
                        value={
                          (updateProfileInput.job && updateProfileInput.job) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
                            (pre) =>
                              pre && {
                                ...pre,
                                job: e.target.value,
                              }
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleEmail}: <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        value={
                          (updateProfileInput.email &&
                            updateProfileInput.email) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
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
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>{lan.titleIndentity}:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={lan.holderIndentity}
                        value={
                          (updateProfileInput.identity &&
                            updateProfileInput.identity) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
                            (pre) =>
                              pre && {
                                ...pre,
                                identity: e.target.value,
                              }
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>{lan.titleMedicalInsurance}:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={lan.holderMedicalInsurance}
                        value={
                          (updateProfileInput.medicalInsurance &&
                            updateProfileInput.medicalInsurance) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
                            (pre) =>
                              pre && {
                                ...pre,
                                medicalInsurance: e.target.value,
                              }
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleEthnic}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder={lan.holderEthnic}
                        value={
                          (updateProfileInput.ethnic &&
                            updateProfileInput.ethnic) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
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
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleAddress}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder={lan.holderAddress}
                        value={
                          (updateProfileInput.address &&
                            updateProfileInput.address) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
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
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        {lan.titleRelationship}:{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        required
                        value={
                          (updateProfileInput.relationship &&
                            updateProfileInput.relationship) ||
                          ""
                        }
                        onChange={(e) =>
                          setUpdateProfileInput(
                            (pre) =>
                              pre && {
                                ...pre,
                                relationship: e.target.value,
                              }
                          )
                        }>
                        <option>{lan.labelRelationship}</option>
                        <option value="Tôi">{lan.labelMyself}</option>
                        <option value="Vợ/Chồng">
                          {lan.labelHusbandOrWife}{" "}
                        </option>
                        <option value="Mẹ">{lan.labelMother}</option>
                        <option value="Bố">{lan.labelFather}</option>
                        <option value="Con">{lan.labelSon}</option>
                        <option value="Khác">{lan.labelOther}</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Button type="submit">
                    Lưu{" "}
                    {/* {loadingCreate && (
                             <Spinner animation="border" variant="light" size="sm" />
                           )}{" "} */}
                  </Button>
                </Row>
              </Form>
            </Col>
          )}
        </Col>
        <ModalCpn
          handleSave={() => {
            setModal(false);
          }}
          handleClose={() => {
            setModal(false);
            setProfileDetail(undefined);
          }}
          closeButton={false}
          textButtonSave={lan.modalClose}
          headerText={lan.modalHeader}
          openRequest={modal}>
          <div className="shadow-lg bg-light p-3 mt-3">
            {profileDetail && (
              <>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <IoPersonCircleOutline />
                    </span>
                    {lan.titleFullname}:{" "}
                    <span className="text-success ms-2">
                      {profileDetail.fullname}{" "}
                    </span>
                  </h6>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <CiCalendarDate />
                    </span>
                    {lan.titleDateOfBirth}:
                    <span className="text-info ms-2">
                      {profileDetail.dataOfBirth}
                    </span>
                  </h6>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <FaPhone />
                    </span>
                    {lan.titlePhone}:
                    <span className="text-info ms-2">
                      {profileDetail.numberPhone}
                    </span>
                  </h6>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <MdOutlineEmail />
                    </span>
                    {lan.titleEmail}:
                    <span className="text-info ms-2">
                      {profileDetail.email}
                    </span>
                  </h6>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <MdOutlineTransgender />
                    </span>
                    {lan.titleGender}:
                    <span className="text-info ms-2">
                      {profileDetail.gender}
                    </span>
                  </h6>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <SiStaffbase />
                    </span>
                    {lan.titleJob}:
                    <span className="text-info ms-2">{profileDetail.job}</span>
                  </h6>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <SiStaffbase />
                    </span>
                    {lan.titleIndentity}:
                    <span className="text-info ms-2">
                      {profileDetail.identity}
                    </span>
                  </h6>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <GiMedicalPackAlt />
                    </span>
                    {lan.titleMedicalInsurance}:
                    <span className="text-info ms-2">
                      {profileDetail.medicalInsurance}
                    </span>
                  </h6>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <FaPeopleGroup />
                    </span>
                    {lan.titleEthnic}:
                    <span className="text-info ms-2">
                      {profileDetail.ethnic}
                    </span>
                  </h6>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-primary">
                      <FaPeopleGroup />
                    </span>
                    {lan.titleRelationship}:
                    <span className="text-info ms-2">
                      {profileDetail.relationship}
                    </span>
                  </h6>
                </div>
              </>
            )}
          </div>
        </ModalCpn>
        {/* MODAL SHARE */}
        <ModalCpn
          handleSave={() => {
            setModalShare(false);
          }}
          handleClose={() => {
            setModalShare(false);
            setProfileDetail(undefined);
          }}
          closeButton={false}
          textButtonSave={lan.modalClose}
          headerText={lan.modalHeaderShare}
          openRequest={modalShare}>
          <div className="shadow-lg bg-light p-3 mt-3">
            <Form>
              <Form.Group className="mb-3" controlId="customerkey">
                <Form.Label>{lan.labelCustomerKey}</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    const customerKey = e.currentTarget.value;
                    setShareInput((pre) => ({
                      ...pre,
                      customerKey: customerKey,
                    }));
                  }}
                  placeholder="kh--123456"
                />
              </Form.Group>
              <Button size="sm" onClick={() => handleShare()}>
                <FaRegShareFromSquare />
              </Button>
            </Form>
          </div>
        </ModalCpn>
      </Row>
    </div>
  );
}
export default ManaProfile;
