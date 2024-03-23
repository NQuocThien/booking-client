"use client";
import { Col, Container, Row } from "react-bootstrap";
import TypeOfServive from "./TypeOfService";
import { useEffect, useState } from "react";
import { EtypeService } from "@/assets/contains/emun";
import { Profile } from "@/graphql/webbooking-service.generated";
import { Session } from "inspector";

interface IProps {
  facilityId: string;
  type: EtypeService | undefined;
}

enum EServiceType {
  doctor,
  specialty,
  package,
  vaccination,
}

interface EStateRegis {
  type: EServiceType | undefined;
  date: Date | undefined;
  session: Session | undefined;
  profile: Profile | undefined;
}

function Register(props: IProps) {
  const { facilityId, type } = props;
  const [stateRegis, setStateRegis] = useState<EStateRegis>({
    type: undefined,
    date: undefined,
    session: undefined,
    profile: undefined,
  });
  useEffect(() => {}, []);
  return (
    <Container>
      {!stateRegis.type && <TypeOfServive />}
      {stateRegis.type && (
        <Row>
          <Col lg={4} md={4}></Col>
          <Col lg={8} md={8}></Col>
        </Row>
      )}
    </Container>
  );
}
export default Register;
