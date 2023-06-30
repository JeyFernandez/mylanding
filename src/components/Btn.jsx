import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Btn.css";

import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Btn() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="cardsbtn">
        <div>
          <div data-aos="fade-right">
            <a href="/#" target="_blank" rel="noreferrer">
              <p>
                <FaWhatsapp />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Btn;
