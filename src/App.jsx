import { useEffect } from "react";
import Perfil from "./image/jey.jpg";
import Banner from "./image/banner.png";
import "./App.css";
import AOS from "aos";
import Btn from "./components/Btn";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Info from "./components/Informations";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="landing">
      <img className="banner" src={Banner} />
      <div className="container">
        <div className="perfiles">
          <img data-aos="zoom-in" className="foto" src={Perfil} alt="logo" />
          <div className="felx">
            <Btn />
          </div>
        </div>
        <div className="container-btw">
          <div className="info">
            <p className="p">
              <label>JASSON ARIEL FERNÁNDEZ ESPINOZA</label>
            </p>
            <Info />
          </div>
        </div>
        <div className="cards"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
