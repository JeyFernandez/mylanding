import Perfil from "./image/jey.jpg";
import "./App.css";
function Home() {
  return (
    <div className="landing">
      <div className="perfiles">
        <img src={Perfil} />
        <p>Jasson Fernandez</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Obcaecati dolore in repellat neque rem omnis quos, saepe molestias
        nobis? Dolor officiis <br /> ducimus beatae necessitatibus illo
        voluptatem temporibus quae labore facilis.
      </p>
    </div>
  );
}

export default Home;
