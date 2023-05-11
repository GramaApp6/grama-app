import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

function ProfilePage() {
  return (
    <>
      <ProfileNavbar />

      <Container>
        <Row className="justify-content-md-center mb-3">
          <Col md="auto">
            <Image
              src="https://lh3.googleusercontent.com/a-/ACB-R5TVvAuWG4_G3mhfXP7Qcx86PL0T8sCazTywSivf=s88-w88-h88-c-k-no"
              roundedCircle
              width={200} // set the width to 150 pixels
              height={200} // set the height to 150 pixels
            />
          </Col>
        </Row>
        <Row className="mt-3 justify-content-md-center">
          <Col md="auto">
            <h1>User name</h1>
          </Col>
        </Row>
        <ListGroup>
          <ListGroup.Item>
            <Row>
              <Col>
                <h4 className="text-muted">Full name : </h4>
              </Col>
              <Col>
              <Form.Control
                type="text"
                placeholder="Ashokkumar"
                aria-label="Disabled input example"
                disabled
                readOnly
              />
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <h4 className="text-muted">Email : </h4>
              </Col>
              <Col>
              <Form.Control
                type="text"
                placeholder="ahokkumar@wso2.com"
                aria-label="Disabled input example"
                disabled
                readOnly
              />
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <h4 className="text-muted">Role : </h4>
              </Col>
              <Col>
              <Form.Control
                type="text"
                placeholder="user"
                aria-label="Disabled input example"
                disabled
                readOnly
              />
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}

export default ProfilePage;
