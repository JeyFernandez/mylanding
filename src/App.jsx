import { useEffect } from "react";
import Perfil from "./image/jey.jpg";
import Banner from "./image/banner.png";
import "./App.css";
import AOS from "aos";
import Btn from "./components/Btn";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

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
          <Btn />
        </div>
        <div>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Obcaecati dolore in repellat neque rem omnis quos, saepe molestias
            nobis? Dolor officiis <br /> ducimus beatae necessitatibus illo
            voluptatem temporibus quae labore facilis.
          </p>
        </div>
        <div>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Obcaecati dolore in repellat neque rem omnis quos, saepe molestias
            nobis? Dolor officiis <br /> ducimus beatae necessitatibus illo
            voluptatem temporibus quae labore facilis.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
