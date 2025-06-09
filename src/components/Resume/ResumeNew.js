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
            <p style={{ fontSize: "1.2em" }}><strong>1st Feb 2024 - 30 September 2024</strong></p>
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
            <h3 style={{ fontSize: "2em" }}>Technical /Data Analyst At </h3>
            <h4 style={{ fontSize: "1.5em" }} className="purple ">Commerical Tax Dept(GST)</h4>
            <p style={{ fontSize: "1.2em" }}><strong>7th Oct 2023 - Present</strong></p>
            <div style={{ textAlign: "left", fontSize: "1.2em" }}>
              <p><ImPointRight /> Handled GST-related data using digital systems and tools.</p>
              <p><ImPointRight /> Monitored and verified GST returns through online portals and backend systems.</p>
              <p><ImPointRight /> Participated in designing and conducting awareness sessions using digital platforms.</p>
              <p><ImPointRight /> Supported officers in audits by preparing required datasets and digital documents.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
