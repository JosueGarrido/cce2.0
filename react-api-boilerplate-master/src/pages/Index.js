import React, { useState } from 'react';
import Carousel2 from '../components/Carousel2';
import Carousel from '../components/Carousel';
import Carousel3 from '../components/Carousel3';
import '../styles/app.css';
import {Row, Col, Button} from "antd";
import Routes from "../constants/routes";
import logoW from "../images/logoW.png";
import artesanias from '../images/Categories_logos/artesanias.png';
import escénicas from '../images/Categories_logos/escénicas.png';
import literarias from '../images/Categories_logos/literarias.png';
import musicales from '../images/Categories_logos/musicales.png';
import plasticas from '../images/Categories_logos/plasticas.png'
import visuales from '../images/Categories_logos/visuales.png';
const contentStyle = {
    background: '#fff',

};
const HomePage = () => {


  return (
      <div style={contentStyle}>
          <Carousel/>
          <section>
              <div className="imgExplanation" >

                  <Row>
                      <Col span={7}>
                      </Col>
                      <Col span={10}>
                          <div><br/><br/><br/>
                              <h1  className="title">
                                  EXPLICACIÓN
                              </h1>

                          </div><br/><br/>
                          <p className="text">
                              Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
                              Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
                              Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
                          </p><br/><br/><br/><br/>

                      </Col>
                      <Col span={7}>

                      </Col>
                  </Row>

              </div>

          </section>

          <section ><br></br><br></br><br></br>
              <h1 className="subtitle2">CATEGORÍAS</h1>
              <div>
                  <Row>
                      <Col span={4} align='center' >
                          {/*<a href={Routes.HOME}>
                              <img className='categories' src={musicales}/>
                              <h1 className="btnCategories"><span className="btnCategories-text">Artes Musicales</span>
                              </h1>
                          </a>*/}
                          <a href={Routes.CATEGORY1.replace( ':id', 3 )}>
                              <label  className="image-categories imageMusicales"></label>
                              <h1 className="btnCategories"><span className="btn-General">Artes Musicales</span>
                              </h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.CATEGORY1.replace( ':id', 2 )}>
                              <label  className="image-categories imageLiterarias"></label>
                              <h1 className="btnCategories"><span className="btn-General">Artes Literarias</span>
                              </h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.CATEGORY1.replace( ':id', 4 )}>
                              <label  className="image-categories imageEscenicas" ></label>
                              <h1 className="btnCategories"><span className="btn-General">Artes Escénicas</span>
                              </h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.CATEGORY1.replace( ':id', 1 )}>
                              <label  className="image-categories imagesPlasticas"></label>
                              <h1 className="btnCategories"><span className="btn-General">Artes Plásticas</span>
                              </h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.CATEGORY1.replace( ':id', 5 )}>
                              <label  className="image-categories imagesVisuales"></label>
                              <h1 className="btnCategories"><span className="btn-General">Artes Visuales</span>
                              </h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.CATEGORY1.replace( ':id', 6 )}>
                              <label  className="image-categories imageArtesanias"></label>
                              <h1 className="btnCategories"><span className="btn-General">Artes Artesanías</span>
                              </h1>
                          </a>
                      </Col>

                  </Row>

              </div>
          </section>


          {/*<section><br/><br/><br/><br/>
              <div className="imgHowBuy">

                  <Row>
                      <Col span={13}>
                      </Col>
                      <Col span={10}>
                          <div><br/><br/><br/><br/>
                              <h1 className="title1">
                                  ¿CÓMO COMPRAR?
                              </h1>

                          </div>
                          <p className="text">
                              Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall
                              studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
                          </p>
                          <div className="button-container-2">

                              <button type="button" className="btn-verMas">VER MÁS</button>

                          </div>
                          <br/><br/><br/>
                      </Col>
                      <Col span={1}>

                      </Col>
                  </Row>

              </div>
          </section>*/}

            <br/><br/><br/>
            <Carousel2/>
            <Carousel3/>

        </div>





  );
};


export default HomePage;
