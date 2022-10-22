import React from "react";
import "./portfolio.css";
import "../about/about.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>
      <div className=".container portfolio__container">
        <article className="portfolio__item ">
          <div className="portfolio__item-image ">
            <img className="educationWebsite" src={IMG1} alt="" />
          </div>
          <h3>Responsive Education Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/WahabAfridi789/Responsive_Educational-Website"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://afridi-education-website.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#home" className="btn">
              Github
            </a>
            <a href="#home" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#home" className="btn">
              Github
            </a>
            <a href="#home" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#home" className="btn">
              Github
            </a>
            <a href="#home" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#home" className="btn">
              Github
            </a>
            <a href="#home" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#home" className="btn">
              Github
            </a>
            <a href="#home" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
