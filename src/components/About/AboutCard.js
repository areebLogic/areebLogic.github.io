import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Areeb Ali</span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />I am a Computer Scientist with Bachelor of Science in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "AreebLogic has the best Logic."{" "}
          </p>
          <footer className="blockquote-footer">areebLogic</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
