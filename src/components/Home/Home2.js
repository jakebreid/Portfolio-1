import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A little bit about <span className="purple">me...</span>
            </h1>
            <p className="home-about-body">
              I was first exposed to the world of Computer Science in 6th grade, 
              where I took a class that focused on using Scratch, a highly user-friendly coding language. Since then, 
              I have become extremely passionate about the power of technology and computing. 
              <br />
              <br />My favorite programming languages are: 
              
                <b className="purple"> Python, SQL, and Javascript.</b>
              <br />
              <br />
            My fields of particular interest are:&nbsp;
              <i>
                <b className="purple">Machine Learning, Artificial Intelligence </b> 
                and 
                <b className="purple">
                  {" "}Data Management.
                </b>
              </i>
              <br />
              <br />
              Outside of Computer Science, I am an avid competitive swimmer, and love to spend time by the beach or a lake! 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
