import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Btn.css";

import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Btn() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="cardsbtn">
        <h2>Contact Me</h2>
        <div className="btn" data-aos="fade-right">
          <a
            href="
          https://api.whatsapp.com/send?phone=50555031540
          "
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <FaWhatsapp />
            </p>
          </a>
        </div>
        <div className="btn" data-aos="fade-right">
          <a
            href="
          https://www.facebook.com/jasson.fernandez.714
          "
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <FaFacebook />
            </p>
          </a>
        </div>
        <div className="btn" data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/jasson-fernandez-4b19a2259/"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <FaLinkedin />
            </p>
          </a>
        </div>
        <div className="btn" data-aos="fade-right">
          <a
            href="https://github.com/JeyFernandez"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <FaGithub />
            </p>
          </a>
        </div>
        <div className="btn" data-aos="fade-right">
          <a href="/#" target="_blank" rel="noreferrer">
            <p>
              <FaEnvelope />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Btn;
