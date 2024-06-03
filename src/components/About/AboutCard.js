import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! My name is <span className="purple">Jake Reid! </span>
            <br></br>
            <br></br> I am a Computer Science and Mathematics <i>(concentration: Statistics and Data Science)  </i>  student at <span className="purple">UMass Amherst!</span>
            <br />
            <br></br>
            Last summer, I interned at Bicycle Therapeutics on their Data Management team. I am actively pursuing internship opportunities for summer of 2025. 
            <br />
            <br />
            Some fun facts about me: 
            <br />
          </p>
          <ul>
            <li className="about-activity">
              I am a competitive swimmer, and have been swimming competitively for over 10 years! I currently swim for UMass Club's Swimming team, and 
              manage the team as their secretary.
            </li>
            <br></br>
            <li className="about-activity">
              I am an avid traveler! I have been to 30+ states, and many countries in the Caribbean. I hope to travel to Europe soon! 
            </li>
            <br></br>
            <li className="about-activity">
              I have 2 dogs, named Benny and Cooper. Cooper is 13 and Benny is 7. Benny is a miniature dachshund, and Cooper is a Doxen mix. They have TONS of personality. 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
