import React from "react"
import './Cards.css'
import img_avatar from './img_avatar.png';

const Cards = () => (
  <section className="cards">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img_avatar} alt="Avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>Joe Drozd</h1>
      <p>Web Developer and Engineer</p>
      <p>"10/10 bloke" - his mother</p>
    </div>
  </div>
</div>
  </section>
);

export default Cards;
