import React from 'react';
import {Carousel, Row, Col, Input, Layout} from "antd";

import { Button } from 'antd';
import '../styles/carousel.css';
import img1 from  '../images/home_gifs/artes-plasticas.gif';
import img2 from  '../images/home_gifs/artes-literarias.gif';
import img3 from  '../images/home_gifs/artes-escenicas.gif';
import img4 from  '../images/home_gifs/artes-musicales.gif';
import img5 from  '../images/home_gifs/artes-visuales.gif';
import img6 from  '../images/home_gifs/artesanias.gif';
import Navigation from "./Navigation";
import Routes from "../constants/routes";
import logoW from "../images/logoW.png";
import Navigation2 from "./Navigation2";
const Header = Layout.Header;
const contentStyle = {
    height: '800px',
    color: '#000000',
    width: '100%'
};

function carousel()  {
    const images=[img1,img2,img3,img4,img5,img6]
    console.log('iamgenes',images)
    return (
        <Row>
            <Col span={24}>
                <div>
                    <div >
                        <Carousel className="images" >

                            {images.map((image,index) => {
                                return (
                                    <div key={index} >
                                        {console.log('el id',index)}
                                        <div style={contentStyle} >
                                            {console.log('el url',image)}
                                            <div style={{backgroundImage: "url(" + image + ")"}} className="images">
                                                <Header className='header'>
                                                    <Row type='flex' justify='space-between' align='bottom'>


                                                        <Col span={6} align='left' className='main-menu'>
                                                            <Navigation mode='horizontal'/>

                                                        </Col>
                                                        <Col span={10} align='center'>
                                                            <a href={Routes.HOME}>
                                                                <img className='logoW' src={logoW}/>
                                                            </a>
                                                        </Col>
                                                        <Col span={8} align='right'>
                                                            <Navigation2 mode='horizontal'/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col span={6}></Col>

                                                        <Col span={12} align='center' className="search__container">
                                                            <input className="search__input" type="text" placeholder="¿Qué desea buscar?"/>
                                                        </Col>

                                                        <Col span={6}></Col>

                                                    </Row>
                                                </Header>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default carousel;
