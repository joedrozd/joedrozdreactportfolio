import React from "react"
import './Header/Cards.css'
import veggrowguideblock from './veggrowguideblock.jpg'


const CardVGG = () => (
    <section className="cards">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src={veggrowguideblock} alt="Avatar"/>
      </div>
      <a href="https://www.veggrowguide.com"><div class="flip-card-back">
        <h2>VegGrowGuide</h2>
        <p>Personal Project</p>
        <p>I enjoy spending time on an allotment and have turned
          this hobby into a site aimed at new gardeners.
        </p>
      </div></a>
    </div>
  </div>
    </section>
  );
  
  export default CardVGG;