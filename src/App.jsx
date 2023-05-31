import { useEffect } from "react";
import Perfil from "./image/jey.jpg";
import Banner from "./image/banner.png";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="landing">
      <img className="banner" src={Banner} />
      <div className="container">
        <div className="perfiles">
          <img data-aos="zoom-in" className="foto" src={Perfil} />
          <div className="contact">
            <h2>Contact me </h2>
            <div className="btn">
              <div id="colorwat" className="icon">
                <FaWhatsapp />
              </div>
              <p className="wat">
                <a href="https://wa.me/50555031540?text=Hola%20Como%20estas">
                  WhatsApp
                </a>
              </p>
            </div>
            <div data-aos="fade-right" className="btn">
              <div id="colorface" className="icon">
                <FaTelegram />
              </div>
              <p className="face">Telegram</p>
            </div>
            <div data-aos="fade-right" className="btn">
              <div id="colorface" className="icon">
                <MdMail />
              </div>
              <p className="face">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLBsNVDWxNVqdjPRLgWSVDDmnZkljxZgMXSMHzjpbvxJtcVgcDCgkcdHlpDknHdjRtqNvV">
                  Correo
                </a>
              </p>
            </div>
          </div>
          <div className="contact">
            <h2>Fallow me </h2>

            <p>Instagram</p>
            <p>Telegram</p>
          </div>
        </div>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Obcaecati dolore in repellat neque rem omnis quos, saepe molestias
          nobis? Dolor officiis <br /> ducimus beatae necessitatibus illo
          voluptatem temporibus quae labore facilis.
        </p>
      </div>
    </div>
  );
}

export default Home;
