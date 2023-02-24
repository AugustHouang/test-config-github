import React from "react";
import "./Player.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Icon, CardTitle, Row, Col, Card, Container } from "react-materialize";
import { Link } from "react-router-dom";
import { Players } from "../../shared/ListOfPlayer";

export default function Player() {
  return (
    <Container style={{ marginTop: 20 }}>
      <Row>
        {Players.map((Player) => (
          <Col s={4} key={Player.id}>
            <Card
              header={<CardTitle image={Player.img} reveal waves="light" />}
              reveal={<p>{Player.info}</p>}
              revealIcon={<Icon>more_vert</Icon>}
              title={Player.name}
            >
              <Link to={`detail/${Player.id}`}>
                <p>
                  <button>Detail</button>
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
