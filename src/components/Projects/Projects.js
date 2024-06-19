import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { FaSchool } from "react-icons/fa";
import { GiHospital } from "react-icons/gi";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Hospital Management System Project */}
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>
                  <GiHospital size={50} /> <strong className="purple"> Hospital Management System</strong>
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  This project is a comprehensive Hospital Management System developed using HTML, CSS, JavaScript, and PHP. The system allows hospital staff to manage patient records, appointments, and billing efficiently. I was responsible for the frontend development, creating a responsive and user-friendly interface using HTML, CSS, and JavaScript. My teachers assisted with the backend development using PHP, ensuring secure data handling and robust performance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Academic Performance Tracker Project */}
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>
                  <FaSchool size={50} /> <strong className="purple">Academic Performance Tracker</strong>
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  This project is an Academic Performance Tracker developed using Python and Django. The application allows students and teachers to track academic progress, manage assignments, and generate performance reports. I developed the entire application with guidance from my teacher. The frontend was designed for usability and accessibility, while the backend was implemented with Django to ensure data integrity and ease of use for teachers and students alike.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
