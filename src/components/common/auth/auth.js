import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import logo from "../../../assets/img/logo/logo.png";
import { settings } from "../../../helpers/settings";
import { RiCloseCircleLine, RiHome7Line } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import "./auth.scss";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [key, setKey] = useState("login");
  const navigate = useNavigate();

  useEffect(() => {
    setKey(searchParams.get("key") || "login");
  }, [searchParams]);

  return (
    <Container fluid className="auth">
      <Row>
        <Col lg={7} className="banner">
          <img src={logo} alt={settings.siteName} />
          <div className="toolbar">
            <RiCloseCircleLine onClick={() => navigate(-1)} />
            <RiHome7Line onClick={() => navigate("/")} />
          </div>
        </Col>
        <Col lg={5} className="forms">
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="login" title="Login">
              <LoginForm />
            </Tab>
            <Tab eventKey="register" title="Register">
              <RegisterForm setKey={setKey} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
