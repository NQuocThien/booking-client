"use client";
import { Button, Container, Form, Row, Col, Image } from "react-bootstrap";
import { FormEvent, useEffect, useRef, useState } from "react";
import { accountInforVi } from "@/locales/vi/Account";
import {
  LinkImage,
  LinkImageInput,
  UpdateUserInput,
  UpdateUserWithPassInput,
  User,
  useUpdateUserMutation,
  useUpdateUserWithPassMutation,
} from "@/graphql/webbooking-service.generated";
import { uploadImage } from "@/utils/upload";
import { showToast } from "../subs/toast";
import { useDispatch, useSelector } from "react-redux";
import { login, setUserInfo, checkExpToken } from "@/redux/store/client";
import useNProgress from "@/hooks/useNProgress";
import { RootState } from "@/redux/store/store";

interface InforUserCpnProps {
  isloginIn: boolean;
  lan: typeof accountInforVi;
  inforUser: User | undefined;
}
function InforUserCpn({ isloginIn, lan, inforUser }: InforUserCpnProps) {
  const avatarRef = useRef<HTMLInputElement | null>(null);
  const [disable, setDisabled] = useState<boolean>(true);
  const [stateUpdatePass, setStateUpdatePass] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null);
  const [formData, setFormData] = useState<UpdateUserWithPassInput>({
    email: "",
    username: "",
    password: "",
    passwordNew: "",
    avatar: {
      filename: "",
      url: "",
      type: "",
    },
    id: "",
  });
  const [updateUser, { data: dataupdateUser, loading: loadingUpdateUser }] =
    useUpdateUserMutation({
      onQueryUpdated: () => {},
    });
  const [
    updateUserWithPass,
    { data: dataupdateUserWithPass, loading: loadingUpdateUserWithPass },
  ] = useUpdateUserWithPassMutation({
    onQueryUpdated: () => {},
  });

  const dispatch = useDispatch();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(checkExpToken());
    if (stateUpdatePass) {
      // đổi pass
      var avatar: LinkImageInput | undefined | null = formData.avatar;
      if (selectedFile) {
        avatar = await uploadImage(selectedFile, "users");
      }
      const input: UpdateUserWithPassInput = {
        id: formData.id,
        email: formData.email,
        password: formData.password,
        passwordNew: formData.passwordNew,
        username: formData.username,
        active: formData.active,
        avatar:
          (avatar && {
            filename: avatar.filename,
            type: avatar.type,
            url: avatar.url,
          }) ||
          undefined,
      };
      await updateUserWithPass({
        variables: {
          input: input,
        },
      })
        .then(() => {
          showToast(lan.messSuccess);
          setDisabled(true);
          setStateUpdatePass(false);
        })
        .catch((error) => {
          if (error.message === "Password Error")
            showToast(lan.messError, "error");
          else showToast(lan.messError, "error");
          console.log(error, "error");
        });
    } else {
      var avatar: LinkImageInput | undefined | null = formData.avatar;
      if (selectedFile) {
        avatar = await uploadImage(selectedFile, "users");
      }
      const input: UpdateUserInput = {
        id: formData.id,
        active: true,
        email: formData.email,
        avatar:
          (avatar && {
            filename: avatar.filename,
            type: avatar.type,
            url: avatar.url,
          }) ||
          undefined,
        username: formData.username,
      };
      await updateUser({
        variables: {
          input: input,
        },
      })
        .then(() => {
          showToast(lan.messSuccess);
          setDisabled(true);
        })
        .catch(() => {
          showToast(lan.messError);
        });
    }
  };

  useEffect(() => {
    if (inforUser) {
      const input: UpdateUserWithPassInput = {
        username: inforUser.username,
        email: inforUser.email,
        avatar: inforUser.avatar,
        active: true,
        id: inforUser.id,
        password: "",
        passwordNew: "",
      };
      setFormData(input);
    }
  }, [inforUser]);
  useEffect(() => {
    useNProgress(loadingUpdateUser);
    if (dataupdateUser) {
      dispatch(setUserInfo(dataupdateUser.updateUser));
    }
  }, [dataupdateUser, loadingUpdateUser]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };
  return (
    <Container className="account">
      {isloginIn && (
        <Row>
          <Col xl={{ span: 8, offset: 2 }}>
            <Form className={""} onSubmit={handleSubmit}>
              <h3>{lan.title}</h3>

              <Form.Group className="mb-3">
                <Form.Label>{lan.titleAvatar}</Form.Label>
                <br></br>
                <Image
                  className={"image-input"}
                  height={180}
                  width={180}
                  src={
                    (selectedFile && URL.createObjectURL(selectedFile)) ||
                    formData.avatar?.url ||
                    "/default.png"
                  }
                  roundedCircle
                  onClick={() => avatarRef.current && avatarRef.current.click()}
                />
                <Form.Control
                  className="d-none"
                  ref={avatarRef}
                  disabled={disable}
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  size="sm"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{lan.titleUsername}</Form.Label>
                <Form.Control
                  required
                  name="username"
                  type="text"
                  value={formData.username}
                  disabled
                  placeholder={lan.holderUsername}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{lan.titleEmail}</Form.Label>
                <Form.Control
                  required
                  name="email-update"
                  type="text"
                  disabled={disable}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((pre) => ({
                      ...pre,
                      email: e.currentTarget?.value,
                    }))
                  }
                  placeholder={lan.holderEmail}
                />
              </Form.Group>

              {!disable && !stateUpdatePass && (
                <Button
                  variant="link"
                  size="sm"
                  style={{ marginBottom: "10px" }}
                  onClick={() =>
                    setStateUpdatePass((pre) => (!pre ? true : false))
                  }>
                  {lan.btnUpdate}
                </Button>
              )}
              {stateUpdatePass && (
                <div>
                  <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Label>{lan.titleOldPass}</Form.Label>
                    <Form.Control
                      required
                      name="password"
                      type="password"
                      disabled={disable}
                      value={formData.password}
                      onChange={(e) => {
                        setFormData((pre) => ({
                          ...pre,
                          password: e.target?.value,
                        }));
                      }}
                      placeholder={lan.holderOldPassword}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{lan.titleNewPass}</Form.Label>
                    <Form.Control
                      required
                      name="passwordNew"
                      type="password"
                      disabled={disable}
                      value={formData.passwordNew}
                      onChange={(e) =>
                        setFormData((pre) => ({
                          ...pre,
                          passwordNew: e.target?.value,
                        }))
                      }
                      placeholder={lan.holderNewPassword}
                    />
                  </Form.Group>
                </div>
              )}
              <div className={"text-end"}>
                <Button
                  className="me-2"
                  size="sm"
                  variant="outline-success"
                  onClick={() => {
                    if (!disable) {
                      setDisabled(true);
                      setStateUpdatePass(false);
                    } else setDisabled(false);
                  }}>
                  {disable ? lan.btnUpdate : lan.btnCancel}
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={disable}>
                  {lan.btnSave}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default InforUserCpn;
