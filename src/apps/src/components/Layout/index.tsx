import React, { FC } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container, Col } from "react-bootstrap";
import { Row, Card, Form, Button } from "react-bootstrap";
import Sidebar from "../Sidebar";
import "./layout.scss";

const Layout: FC = (props: any) => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <div className="layout-container">{props.children}</div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
