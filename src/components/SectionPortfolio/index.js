import React, { useState, useEffect } from 'react';
import './index.css';
import { Container, Row } from 'react-bootstrap';
import Portfolio from '../Portfolio';
import PortfolioArray from '../../utils/portfolio'
import ScrollableSection, { configureAnchors } from 'react-update-url-on-scroll';

function PortfolioSection() {
  useEffect(() => {
    configureAnchors({});
  }, []);
  
  // Setting this.state.portfolio to the portfolio json array
  const [portfolioArray, setPortfolioArray] = useState(PortfolioArray);

  return (
    <section id="portfolio">
      <Container>
        <ScrollableSection name={'portfolio'}>
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
                      html={portfolio.html}
                      css={portfolio.css}
                      js={portfolio.js}
                      node={portfolio.node}
                      react={portfolio.react}
                    />
                  )
                )}
              </Row>
            </div>
          </Row>
        </ScrollableSection>
      </Container>
    </section>
  )
}

export default PortfolioSection