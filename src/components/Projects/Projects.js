import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import mCar from "../../Assets/Projects/mCar.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          A diverse selection of some of my favorite projects!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rise and Shine!"
              description="A web application devoted to putting all of the information you need in the morning right in once place! Fetches data from weather, news, stock, and spotify APIs to maximize the amount of information to present to the user. Utilizes fluent front-end/back-end integration."
              tech="Technologies Utilized: Javascript, HTML, CSS, ExpressJS."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mCar}
              isBlog={false}
              title="Reinforcement Learning Mountain Car"
              description="Utilizes the Reinforcement Learning Sarsa-Lambda algorithm to train a car stuck in a ditch the most effective way to manuever itself out. Applies the epsilon-greedy algorithm to ensure proper trial and error occurs in the training process."
              tech="Technologies Utilized: Python, Numpy"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sensor Scramble"
              description="Sensor Scramble is a game inspired by the hit handheld game Bop It! By seamlessly integrating sensor hardware, an OLED screen, and arduino software, Sensor Scramble rapidly assigns you tasks to complete in a short amount of time. The time allotted to complete each task gets faster as the game goes on!"
              tech="Technologies Utilized: Arduino Programming"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Connect4 AI"
              description="Developed an Artificially Intelligent agent that plays against the user in a modified game of Connect4. The agent was submitted to a tournament of approximately 100 students, and placed in the top 10 agents among all students!"
              tech="Technologies Utilized: Python"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Massachusetts Governor Supervised Learning Model"
              description="Using a large dataset of all Massachusetts towns, a supervised decision tree is constructed based on the training data to determine whether or not the majority of individuals in each Massachusetts town voted for Diehl or Healey in the 2022 governor election. The model averaged a correctness rate of >80%!"
              tech="Technologies Utilized: Python"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Mental Health Journal"
              description="This was my first personal project of my undergraduate career! I programmed a Mental Health Journal in Java provides an easy way for those enrolled in counseling services to monitor their
              mental health over time and to share key information with counseling professionals. I used the Swing GUI toolkit to have users fill out a form similar to the PHQ-9, which assists professionals in
              the detection of depression, anxiety, and other mental health conditions. The program would also analyze user inputs by generating a report to an output file."
              tech="Technologies Used: 2Java, Swing GUI Toolkit"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
