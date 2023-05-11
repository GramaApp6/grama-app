import React, { useEffect, useState } from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { useAuthContext } from "@asgardeo/auth-react";

function ProfilePage() {
  const { getBasicUserInfo } = useAuthContext();
  const [user_attribute, setAttributeList] = useState<Record<string, string>>();

  useEffect(() => {
    getBasicUserInfo().then((response) => {
      setAttributeList(response);
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      <ProfileNavbar />

      <Container>
        <Row className="justify-content-md-center mb-3">
          <Col md="auto">
            {user_attribute && (
              <Image
                src={user_attribute["picture"]}
                roundedCircle
                width={200} // set the width to 150 pixels
                height={200} // set the height to 150 pixels
              />
            )}
          </Col>
        </Row>
        <Row className="mt-3 justify-content-md-center">
          <Col md="auto">
            {user_attribute && (
              <h1>{user_attribute["displayName"]}</h1>
            )}
          </Col>
        </Row>
        <ListGroup>
          <ListGroup.Item>
            <Row>
              <Col>
                <h4 className="text-muted">Full name : </h4>
              </Col>
              <Col>
                {user_attribute && (
                  <Form.Control
                    type="text"
                    placeholder={user_attribute["name"]}
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                )}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <h4 className="text-muted">Email : </h4>
              </Col>
              <Col>
                {user_attribute && (
                  <Form.Control
                    type="text"
                    placeholder={user_attribute["email"]}
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                )}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <h4 className="text-muted">Role : </h4>
              </Col>
              <Col>
                {user_attribute && (
                  <Form.Control
                    type="text"
                    placeholder={user_attribute["groups"]}
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                )}
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}

export default ProfilePage;
