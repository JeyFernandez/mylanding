import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { MdMail } from "react-icons/md";

 function Btn{
    return (
      <div className="contact">
        <h2>Contact me </h2>
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
          <p className="face">Telegram</p>
          <div id="colorface" class="icon">
            <div className="svg">
              <FaFacebook />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" type="submit" className="submit">
          <p className="face">Correo</p>
          <div id="colorface" class="icon">
            <div className="svg">
              <MdMail />
            </div>
          </div>
        </div>
        {/* btn */}
      </div>
    );
  }
}
export default Btn;
