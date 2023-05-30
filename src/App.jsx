import Perfil from "./image/jey.jpg";
import Banner from "./image/banner.png";
import "./App.css";
function Home() {
  return (
    <div className="landing">
      <img className="banner" src={Banner} />
      <div className="container">
        <div className="perfiles">
          <img className="foto" src={Perfil} />
          <div className="contact">
            <h2>Contact me </h2>
            <p>Gmail</p>
            <p>WhatsApp</p>
            <p>Telegram</p>
          </div>
          <div className="contact">
            <h2>Fallow me </h2>
            <p>Facebook</p>
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
