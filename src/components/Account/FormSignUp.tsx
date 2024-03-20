"use client";
import {
  CreateUserInput,
  LoginUserInput,
} from "@/graphql/webbooking-service.generated";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { accountVi } from "@/locales/vi/Account";

interface IProps {
  onLogin: (input: CreateUserInput) => void;
  lan: typeof accountVi;
}
function FormSignUp(props: IProps): JSX.Element {
  const { onLogin, lan } = props;

  const [createUserInput, setCreateUserInput] = useState<CreateUserInput>({
    username: "",
    password: "",
    email: "",
    fullname: "",
  });
  const [validated, setValidated] = useState<boolean | undefined>(false);
  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const form = e.currentTarget;

  //     e.stopPropagation();
  //     if (form.checkValidity() === false) {
  //       setValidated(true);
  //     } else {
  //       onLogin(dataLogin);
  //     }
  //     setValidated(true);
  //   };

  return (
    <div className="modal-overlay">
      <Row className="bg-light rounded-2">
        <Col>
          <h4>{lan.titleSignUp}</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên: </Form.Label>
              <Form.Control
                type="text"
                placeholder={lan.holUsername}
                onChange={(e) => {
                  setCreateUserInput((pre) => ({
                    ...pre,
                    fullname: e.target.value,
                  }));
                }}
                value={createUserInput.fullname}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{lan.texUsername} </Form.Label>
              <Form.Control
                type="text"
                placeholder={lan.holUsername}
                onChange={(e) => {
                  setCreateUserInput((pre) => ({
                    ...pre,
                    username: e.target.value,
                  }));
                }}
                value={createUserInput.username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Địa chỉ email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
                onChange={(e) => {
                  setCreateUserInput((pre) => ({
                    ...pre,
                    email: e.target.value,
                  }));
                }}
                value={createUserInput.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setCreateUserInput((pre) => ({
                    ...pre,
                    password: e.target.value,
                  }));
                }}
                value={createUserInput.password}
              />
            </Form.Group>
            <Button type="submit">Lưu</Button>
          </Form>
        </Col>
        <Col>
          <Image
            src={`/imgs/poster.png`}
            height={380}
            width={290}
            alt="login-image"
          />
        </Col>
      </Row>
    </div>
  );
}

export default FormSignUp;
