import React from "react"
import Laptop from "../Header/freelancer-01.jpg";

const About = () => (
  <section className="about">
    <div id="about"className="container-sm">
      <div class="row">
      <div class="col">
    <h1 className="about--title">About me:</h1>
    <p className="welcome--about">My main languages are as follows:
    <ul>
      <li>HTML</li>
      <li>CSS - Bootstrap</li>
      <li>JavaScript</li>
      <li>ReactJS</li>
      <li>PHP</li>
      <li>My next goal is to learn NodeJS</li>
    </ul>
    </p>
    <p className="welcome--about">I have been designing websites since I first took ICT at school. I am self taught and my main skills are in the core languages.  I am currently experimenting with some libraries, preprocessors and back-end stuff. </p>
    
    </div>
    <div class="col">
      <img src={Laptop} class="img rounded float-right p-4"></img>
    </div>
    </div>
    <div className="container-sm">
    <p className="welcome--about">I have a passion project which is both a blog and guide on plants and growing food. It has been a great learning experience and I have taken full responsibility for working on the site. I have recently been working through expanding my SEO knowledge and this site has been a great tool for this. 
</p>
</div>
    </div>
  </section>
);

export default About;
