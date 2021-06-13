import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import test from "../../Assets/Projects/test.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Technical</strong> Journey
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I'm proud of.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="1"
              description=""
              ghLink="https://github.com/"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="2"
              description=""
              ghLink="https://github.com/"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="3"
              description=""
              ghLink="https://github.com/"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
