import React from "react";
import "./css/Cards.css";

function Cards() {
  return (
    <div className="card">
      <div className="header">Frontend</div>
      <div className="body">
        <div className="skill">
          <div className="skill-name">HTML</div>
          <div className="skill-level">
            <div className="skill-percent" style={{ width: "90%" }} />
          </div>
          <div className="skill-percent-number">90%</div>
        </div>
        <div className="skill">
          <div className="skill-name">CSS</div>
          <div className="skill-level">
            <div className="skill-percent" style={{ width: "80%" }} />
          </div>
          <div className="skill-percent-number">80%</div>
        </div>
        <div className="skill">
          <div className="skill-name">JavaScript</div>
          <div className="skill-level">
            <div className="skill-percent" style={{ width: "75%" }} />
          </div>
          <div className="skill-percent-number">75%</div>
        </div>
        <div className="skill">
          <div className="skill-name">React</div>
          <div className="skill-level">
            <div className="skill-percent" style={{ width: "50%" }} />
          </div>
          <div className="skill-percent-number">50%</div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
