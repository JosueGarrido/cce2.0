import React from 'react';
import CommentsList from '../components/CommentsList';
import ShowError from '../components/ShowError';
import {Link, useParams} from 'react-router-dom';
import {useProductsList} from '../data/useProductsList';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image, Layout, Form} from 'antd';
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import ProductsList from '../components/ProductsList';
import {useProduct} from "../data/useProduct";
import {useCategories} from "../data/useCategories";
import {Tabs, Button} from 'antd';
import Routes from "../constants/routes";
import letraVender from "../images/ImgPages/vender-letras.png";
import logoVertical from "../images/logoVertical.png";
import '../styles/product.css';

const {TabPane} = Tabs;
const {Text, Title} = Typography;
const {Meta} = Card;
const Header = Layout.Header;

function callback(key) {
    console.log(key);
}

const Product = () => {
    let {id} = useParams();
    const product = useProduct(id);
    const category = useCategories(id);
    const products = useProductsList(id);


    return (
        <>
            {
                <Row type='flex' justify='center' className='header-wrapper' style={{position: "relative"}}>
                    <Col span={24}>
                        <Header className='headerPage'>
                            <Row type='flex' justify='space-between' align='bottom'>


                                <Col span={7} align='left' className='main-menu'>


                                </Col>
                                <Col span={10} align='center'>
                                    <a href={Routes.HOME}>

                                    </a>
                                </Col>


                                <Col span={1}>

                                </Col>
                                <Col span={3}>
                                    <nav>
                                        <ul>
                                            <li><a href="#"> <i className="down"></i></a>

                                                <ul style={{textAlign: "center"}}>
                                                    <li><a href="#">Categorias</a></li>
                                                    <li><a href="#">Artistas</a></li>
                                                    <li><a href="#">Comprar</a></li>
                                                    <li><a href="#">Vender</a></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </nav>
                                </Col>
                                <Col span={3}>
                                    <img src={logoVertical} className='logoPages'/>
                                </Col>


                            </Row>

                        </Header>

                    </Col>

                </Row>

            }
            <br/><br/><br/><br/>
            {

                <Row>
                    < Col span={3} align={'right'}>

                        <Col>

                            <img className={"borde-imagen"}
                                 height={90}
                                 width={90}
                                 src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                            />
                        </Col> <br/>


                        <Col>

                            <img className={"borde-imagen"}
                                 height={90}
                                 width={90}
                                 src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                            />
                        </Col> <br/>


                        <Col>

                            <img className={"borde-imagen"}
                                 height={90}
                                 width={90}
                                 src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                            />
                        </Col> <br/>
                    </Col>

                    <Col span={10} align={'center'}>

                        <img className={"borde-imagen"}
                             height={400}
                             width={400}
                             src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                        />
                    </Col>


                    {

                        product.isLoading
                            ? <div>Cargando...</div>
                            : product.isError
                            ? <ShowError error={product.isError}/>
                            : <>

                                < Col span={7} align={'left'}>

                                    <Col>
                                        <h2 className={"subtitulo"}>
                                            {product.product.name}
                                        </h2>
                                        <p className={"texto"}>
                                            Categoría:
                                        </p>
                                        <p className={"texto"}>
                                            Autor:
                                        </p>
                                        <p className={"texto"}>
                                            Ubicación: {product.product.location}
                                        </p>

                                        <h2 className={"subtitulo"}>
                                            FICHA TÉCNICA
                                        </h2>
                                        <p className={"texto"}>
                                            Estilo: Impresionismo
                                        </p>
                                        <p className={"texto"}>
                                            Técnica: Óleo sobre madera
                                        </p>
                                        <p className={"texto"}>
                                            Temática: Libre
                                        </p>
                                        <p className={"texto"}>
                                            Soporte: Placa chapadur
                                        </p>
                                        <p className={"texto"}>
                                            Formato: xxx
                                        </p>
                                        <p className={"texto"}>
                                            Tamaño: 50 x 70 cm
                                        </p>
                                        <p className={"texto"}>
                                            Color: café
                                        </p>

                                    </Col>

                                    <h2 className={"subtitulo"}>
                                        DESCRIPCIÓN
                                    </h2>
                                    <p className={"texto"}>
                                        {product.product.description}
                                    </p>

                                </Col>
                                <Col>

                                </Col>


                                <Col span={3} align={'left'}>

                                    <strong className={"precio"}>
                                        $ {product.product.price}
                                    </strong>
                                    <p align={'center'} className={"texto"}>
                                        Stock: {product.product.stock}
                                    </p>


                                </Col>

                                <Col span={13} align={'center'}>

                                </Col>

                                <Col span={7} align={'center'}>
                                    <br/> <br/>
                                    <Button className={"boton-comprar"}
                                            href={Routes.PREPURCHASE.replace(':id', product.product.id)}>COMPRAR</Button>


                                </Col>

                            </>
                    }


                </Row>

            }

            {


            }
            <br/><br/><br/>
            {

                <Row>
                    <Col span={24} align={'center'}>


                        <strong>Preguntas del producto </strong>
                    </Col>
                </Row>
            }


        </>
    );

};

export default (Product);
