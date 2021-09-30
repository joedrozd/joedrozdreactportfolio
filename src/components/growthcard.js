import React from "react"
import './Header/Cards.css'
import growthblock from './growthblock.jpg'


const CardGrowth = () => (
    <section className="cards">
   
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src={growthblock} alt="Avatar"/>
      </div>
         <a href="https://www.grow-th.org"><div class="flip-card-back">
        <h2>GrowTH</h2>
        <p>Project for therapeutical and educational company</p>
        <p>I created a site for a therapeutical and educational company as an introduction 
            to wordpress for myself. I am hoping to continue adding to
            this site once they have free time to create their content. I had used wordpress in the pase
            but explored a number of plug-ins and SEO tools with this project. 
        </p>
      </div></a>
    </div>
  </div>
  
    </section>
  );
  
  export default CardGrowth;