import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Btn.css";

import {
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FcContacts, FcApproval } from "react-icons/fc";
function Btn() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="contact">
        <h2>
          <FcContacts />
        </h2>
        {/* btn */}
        <div data-aos="fade-right" type="submit" className="submit">
          <p className="wat">WhatsApp</p>
          <div id="colorwat" class="icon">
            <div className="svg">
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" type="submit" className="submit">
          <p className="tel">Telegram</p>
          <div id="colortel" class="icon">
            <div className="svg">
              <FaTelegram />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" type="submit" className="submit">
          <p className="mail">Correo</p>
          <div id="colormail" class="icon">
            <div className="svg">
              <MdMail />
            </div>
          </div>
        </div>
        {/* btn */}
      </div>

      <div className="contact">
        <h2>
          <FcApproval />
        </h2>
        {/* btn */}
        <div data-aos="fade-right" type="submit" className="submit">
          <p className="git">GitHub</p>
          <div id="colorgit" class="icon">
            <div className="svg">
              <BsGithub />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" type="submit" className="submit">
          <p className="face">Facebook</p>
          <div id="colorface" class="icon">
            <div className="svg">
              <FaFacebook />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" type="submit" className="submit">
          <p className="insta">Instagram</p>
          <div id="colorinsta" class="icon">
            <div className="svg">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" type="submit" className="submit">
          <p className="mail">Instagram</p>
          <div id="colormail" class="icon">
            <div className="svg">
              <FaInstagram />
            </div>
          </div>
        </div>
        {/* btn */}
      </div>
    </div>
  );
}
export default Btn;
