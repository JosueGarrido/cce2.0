import React from 'react';
import {Carousel, Row, Col} from "antd";

import '../styles/carousel.css';
import img1 from  '../images/home_images/como-comprar.png';
import img2 from  '../images/home_images/como-vender.png';
import img3 from  '../images/home_images/como-funciona.png';


const contentStyle2 = {
    height: '471px',
    color: '#ffffff',
    width: '100%'

};

function carousel2()  {
    const items = [
        {
            key: '1',
            title: '¿CÓMO COMPRAR?',
            content: '¡Comprar una obra de arte o artesanía hecha en Ecuador es muy sencillo con Wasi Wallpay! Crea tu cuenta personal de forma gratuita y contáctate con los creadores directamente. Acuerda el pago y la entrega del producto. ',
            image: img1,
            page: '/como-comprar',

        },
        {
            key: '2',
            title: '¿CÓMO VENDER?',
            content: '¡Wasi Wallpay fomenta el comercio electrónico de obras de arte y artesanías hechas en Ecuador! Si eres un creador y deseas comercializar tus productos, regístrate como vendedor sin costo, ni comisiones, ni recargos. ',
            image: img2,
            page: '/como-vender',
        },
        {
            key: '3',
            title: '¿CÓMO FUNCIONA?',
            content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. ',
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
                                        <div  style={contentStyle2}>
                                            <div key={item.key} style={{backgroundImage: `url(${item.image})`}} className="images" >
                                                <Row>
                                                    <Col span={13}>
                                                    </Col>
                                                    <Col span={10}>
                                                        <div><br/><br/><br/>
                                                            <h1 className="title1">
                                                                {item.title}
                                                            </h1>

                                                        </div>
                                                        <div>
                                                            <p className="text">
                                                                {item.content}
                                                            </p>
                                                        </div>

                                                        <div style={{textAlign:'center'}}>
                                                            <a href={`${item.page}`} >
                                                                <button type="button" className="btn-General" > VER MÁS</button>
                                                            </a>

                                                        </div><br/><br/><br/><br/>
                                                    </Col>
                                                    <Col span={1}>

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

export default carousel2;
