import React from "react";
import "./css/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div id="btn-abrir-popup" className="container">
        <h2>Web Front-end</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <ul>
            <li>Boostrap</li>
            <li>Tailwins</li>
            <li>Bulma</li>
          </ul>
        </ul>
      </div>
      <div id="btn-abrir-popup" className="container">
        <h2>Developer</h2>
        <ul>
          <li>React</li>
          <li>View</li>
          <li>Angular</li>
        </ul>
      </div>
      <div className="container">
        <h2>Backend</h2>
        <ul>
          <li>PHP</li>
          <li>PYTHON</li>
        </ul>
      </div>
    </div>
  );
}
export default Cards;
