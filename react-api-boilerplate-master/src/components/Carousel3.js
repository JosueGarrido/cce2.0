import React from 'react';
import {Carousel, Row, Col} from "antd";

import '../styles/carousel.css';
import img1 from  '../images/home_images/banner-promociones.png';
import img2 from  '../images/home_images/banner-streaming.png';
import img3 from  '../images/home_images/banner-subastas.png';

const contentStyle3 = {
    height: '471px',
    color: '#ffffff',
    width: '100%'

};




function carousel3()  {
    const items = [
        {
            key: '1',
            title: 'VISITA NUESTRAS',
            content: 'PROMOCIONES',
            image: img1,
            page: '/como-comprar',

        },
        {
            key: '2',
            title: 'ESTE ES EL TEXTO PARA',
            content: 'STREAMING',
            image: img2,
            page: '/como-vender',
        },
        {
            key: '3',
            title: 'ESTE ES EL TEXTO PARA',
            content: 'SUBASTAS',
            image: img3,
            page: '/como-comprar',
        },
    ]
    const images=[img1,img2,img3]
    console.log('items',items)
    return (
        <Row>
            <Col span={24}>
                <div>
                    <div >
                        <Carousel className="images" autoplay>

                            {items.map(item => {
                                return (
                                    <div key={item.key}>
                                        <div  style={contentStyle3}>
                                            <div key={item.key} style={{backgroundImage: `url(${item.image})`}} className="images" >
                                                <Row>
                                                    <Col span={1}>
                                                    </Col>
                                                    <Col span={10}>
                                                        <div><br/><br/><br/><br/><br/>
                                                            <h1 className="title12">
                                                                <b>{item.title}</b>
                                                            </h1>

                                                        </div>
                                                        <div>
                                                            <p className="title13">
                                                                {item.content}
                                                            </p>
                                                        </div>

                                                        <div style={{textAlign:'center'}}>
                                                            <a href={`${item.page}`} >
                                                                <button type="button" className="btn-General" > VER MÁS</button>
                                                            </a>

                                                        </div><br/><br/><br/><br/>
                                                    </Col>
                                                    <Col span={13}>

                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>

                                    </div>


                                );
                            })
                            }
                        </Carousel>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default carousel3;
