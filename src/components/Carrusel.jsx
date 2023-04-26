import imagen1 from '../image/banner.jpg'
import imagen2 from '../image/banner2.jpg'
import imagen3 from '../image/banner3.jpg'
import './Style.css'
import React, { useRef } from 'react';

function Carrusel() {
  const carruselRef = useRef(null);

  const items = [
    { id: 1, src: imagen1, alt: 'Imagen 1' },
    { id: 2, src: imagen2, alt: 'Imagen 2' },
    { id: 3, src: imagen3, alt: 'Imagen 3' },
  ];

  const handlePrevClick = () => {
    carruselRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: 'smooth',
    });
  };

  const handleNextClick = () => {
    carruselRef.current.scrollBy({
      left: window.innerWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carrusel-container">
      <div className="carrusel" ref={carruselRef}>
        {items.map((item) => (
          <img key={item.id} src={item.src} alt={item.alt} />
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrevClick}>Anterior</button>
        <button onClick={handleNextClick}>Siguiente</button>
      </div>
    </div>
  );
}

export default Carrusel;
