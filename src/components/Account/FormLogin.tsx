"use client";
import { LoginUserInput } from "@/graphql/webbooking-service.generated";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { accountVi } from "@/locales/vi/Account";

interface IProps {
  onLogin: (input: LoginUserInput) => void;
  lan: typeof accountVi;
}
function FormLogin(props: IProps): JSX.Element {
  const { onLogin, lan } = props;

  const [dataLogin, setDataLogin] = useState<LoginUserInput>({
    username: "",
    password: "",
  });
  const [validated, setValidated] = useState<boolean | undefined>(false);
  const router = useRouter();
  const hanldeChangForm = (e: any) => {
    const { name, value } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    e.stopPropagation();
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      onLogin(dataLogin);
    }
    setValidated(true);
  };

  return (
    <div className="modal-overlay">
      <Row className="bg-light rounded-2">
        <Col>
          <Form
            className="p-5"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{lan.texUsername}</Form.Label>
              <Form.Control
                required
                type="text"
                name="username"
                placeholder={lan.holUsername}
                value={dataLogin.username}
                onChange={hanldeChangForm}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{lan.texPass}</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder={lan.holPass}
                value={dataLogin.password}
                onChange={hanldeChangForm}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              {lan.texBtnLogin}
            </Button>
          </Form>
          {/* <Form onSubmit={handleSubmit}>
            <Button type="submit">Bấm</Button>
          </Form> */}
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

export default FormLogin;
