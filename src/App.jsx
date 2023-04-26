import Perfil from './image/jey.jpg'
import './App.css'
function Home() {
  return (
    <div className="presentations">
    <div className="imagen">
        <img src={Perfil} />
        <h2>Hola, <br /> Soy Jasson Ariel Fernandez</h2>
    </div>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Obcaecati dolore in repellat neque rem omnis quos, saepe molestias nobis? Dolor officiis <br /> ducimus beatae necessitatibus illo voluptatem temporibus quae labore facilis.
    </p>
    </div>
);
}

export default Home;
