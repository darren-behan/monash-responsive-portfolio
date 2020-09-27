import React from 'react';

function Portfolio(props) {
  console.log(props);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" data-aos="zoom-in-up">
      <div className="hovereffect">
        <img src={ props.image } className="img-responsive" alt="portfolio" />
        <div className="overlay">
          <i class={ props.html }></i>
          <i class={ props.css }></i>
          <i class={ props.js }></i>
          <i class={ props.node }></i>
          <i class={ props.react }></i>
          <a href={ props.app } target="_blank" rel="noopener noreferrer">
            <h2>{ props.name }</h2>
          </a>
          <p>
            <a href={ props.github } target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio