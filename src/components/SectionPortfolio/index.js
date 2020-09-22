import React, { useState } from 'react';
import './index.css';
import { Container, Row } from 'react-bootstrap';
import Portfolio from '../Portfolio';
import PortfolioArray from '../../utils/portfolio'

function PortfolioSection() {
  // Setting this.state.portfolio to the portfolio json array
  const [portfolioArray, setPortfolioArray] = useState(PortfolioArray);

  return (
    <section id="section-portfolio">
      <Container>
        <Row>
          <div className="portfolio col-md-12 flex">
            <h2 data-aos="fade-right">Portfolio</h2>
            <div className="header-bar" data-aos="fade-left" />
            <Row id="portfolio-row">
              {portfolioArray.map(portfolio => (
                  <Portfolio 
                    image={portfolio.image}
                    app={portfolio.app}
                    name={portfolio.name}
                    github={portfolio.github}
                  />
                )
              )}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default PortfolioSection

// portfolio.forEach(element => {
//   const $portfolioRowDivEl = $("#portfolio-row");
//   const $portfolioColDivEl = $("<div>").attr("class", "col-lg-3 col-md-4 col-sm-6 col-xs-12").attr("data-aos", "zoom-in-up");
//   const $hoverEffectDivEl = $("<div>").attr("class", "hovereffect");
//   const $responsiveImgEl = $("<img>").attr("class", "img-responsive").attr("alt", "").attr("src", element.image);
//   const $overlayDivEl = $("<div>").attr("class", "overlay");
//   const $appLinkEl = $("<a>").attr("href", element.app).attr("target", "_blank");
//   const $pEl = $("<p>");
//   const $repoLinkEl = $("<a>").attr("href", element.github).attr("target", "_blank");
//   const $githubFontEl = $("<i>").attr("class", "fab fa-github");

//   $portfolioRowDivEl.append($portfolioColDivEl);
//   $portfolioColDivEl.append($hoverEffectDivEl);
//   $hoverEffectDivEl.append($responsiveImgEl);
//   $hoverEffectDivEl.append($overlayDivEl);
//   $overlayDivEl.append($appLinkEl);
//   $appLinkEl.html("<h2>" + element.name + "</h2>");
//   $overlayDivEl.append($pEl);
//   $pEl.append($repoLinkEl);
//   $repoLinkEl.append($githubFontEl);
// });