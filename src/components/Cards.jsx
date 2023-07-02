import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import "./css/Cards.css";

function Cards() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="card" data-aos="fade-left">
        <div className="header">Developers</div>
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
      <div className="card" data-aos="fade-left">
        <div className="header">Other</div>
        <div className="body">
          <div className="skill">
            <div className="skill-name">Photoshop</div>
            <div className="skill-level">
              <div className="skill-percent" style={{ width: "50%" }} />
            </div>
            <div className="skill-percent-number">50%</div>
          </div>
          <div className="skill">
            <div className="skill-name">Ilustrator</div>
            <div className="skill-level">
              <div className="skill-percent" style={{ width: "60%" }} />
            </div>
            <div className="skill-percent-number">60%</div>
          </div>
          <div className="skill">
            <div className="skill-name">Adobe XD</div>
            <div className="skill-level">
              <div className="skill-percent" style={{ width: "75%" }} />
            </div>
            <div className="skill-percent-number">75%</div>
          </div>
          <div className="skill">
            <div className="skill-name">Figma</div>
            <div className="skill-level">
              <div className="skill-percent" style={{ width: "20%" }} />
            </div>
            <div className="skill-percent-number">50%</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
