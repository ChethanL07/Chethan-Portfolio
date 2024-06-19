import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { ImPointRight } from "react-icons/im";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <Row className="experience-section" style={{ justifyContent: "center" }}>
          <Col md={8} className="job-experience">
            <h3 style={{ fontSize: "2em" }}>Front-End Developer Intern At</h3>
            <h4 style={{ fontSize: "1.5em" }} className="purple" > HR Labs</h4>
            <p style={{ fontSize: "1.2em" }}><strong>1st Feb 2024 - Present</strong></p>
            <div style={{ textAlign: "left", fontSize: "1.2em" }}>
              <p><ImPointRight /> Developed and maintained web applications using React.js.</p>
              <p><ImPointRight /> Collaborated with the design team to create responsive and user-friendly interfaces.</p>
              <p><ImPointRight /> Implemented various features and functionality based on client requirements.</p>
              <p><ImPointRight /> Participated in code reviews and team meetings to enhance project development.</p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row className="experience-section" style={{ justifyContent: "center" }}>
          <Col md={8} className="job-experience">
            <h3 style={{ fontSize: "2em" }}>Prepurchase Verification Analyst At </h3>
            <h4 style={{ fontSize: "1.5em" }} className="purple ">Invensis</h4>
            <p style={{ fontSize: "1.2em" }}><strong>1st Oct 2023 - 30th May 2024</strong></p>
            <div style={{ textAlign: "left", fontSize: "1.2em" }}>
              <p><ImPointRight /> Conducted thorough verification of purchase orders and related documents.</p>
              <p><ImPointRight /> Coordinated with various departments to ensure the accuracy of information.</p>
              <p><ImPointRight /> Prepared detailed reports on purchase verification processes.</p>
              <p><ImPointRight /> Assisted in streamlining the verification process to improve efficiency.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
