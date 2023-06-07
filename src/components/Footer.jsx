import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Footer.css";
function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 20);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="footer-content"
      >
        <p>© 2023 Mi Sitio Web. Todos los derechos reservados.</p>
        <ul>
          <li>
            <p
              onClick={scrollToTop}
              id="btn-scroll-top"
              style={{ display: isVisible ? "block" : "none" }}
            >
              Inicio
            </p>
          </li>
          <li>
            <a href="/#">Acerca de</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
