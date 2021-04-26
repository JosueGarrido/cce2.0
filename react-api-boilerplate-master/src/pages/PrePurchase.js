import React, {useEffect, useState} from 'react';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image, Layout, Divider} from 'antd';
import API from '../data/index';
import {Tabs, Button} from 'antd';
import ShowError from "../components/ShowError";
import {useParams, Link} from "react-router-dom";
import {useProduct} from "../data/useProduct";
import {useCategories} from "../data/useCategories";
import {useProductsList} from "../data/useProductsList";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useReputationList} from "../data/useReputationList";
import Routes from '../constants/routes';
import '../styles/prepurchase.css';
import {useProductSell} from "../data/useProductSell";
import logoVertical from "../images/logoVertical.png";

const {TabPane} = Tabs;
const {Text, Title} = Typography;
const {Meta} = Card;
const Header = Layout.Header;


const PrePurchase = (props) => {


    let {id} = useParams();
    const product = useProduct(id);
    const category = useCategories(id);
    const products = useProductsList(id);

    const {sales} = useProductSell(id);
    const [submitting, setSubmitting] = useState(false);


    console.log(products)

    const handleSubmit = async (values) => {
        console.log('values', values);

        try {
            // setValue( '' );

            await API.post(`/products/${product.product.id}/sales`, {
                // product_id: product.product.id,
            });
            sales.mutate(); // get updated data

        } catch (error) {
            console.log('error', error);
        }
    };
    return (
        <>
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
            <br/><br/><br/><br/><br/><br/>
            <Row>


                <Col span={16} align={'center'}>
                   <br/><br/> <h1 className={"subtitulo"}>REVISA Y CONFIRMA TU COMPRA</h1>
                    <Col span={14} align={'left'} className={"subtitulo-texto"}>
                        <h2>No olvides:</h2>
                    </Col>
                    <Col span={16} align={'left'} className={"texto-iz"}>
                        <p>1. Acordar detalles del envío.</p>
                        <p>2. Acordar detalles del pago.</p>
                        <p>3. Calificar en función de lo acordado.</p>
                    </Col>

                </Col>

                <Col span={8}>

                    {
                        product.isLoading
                            ? <div>Cargando...</div>
                            : product.isError
                            ? <ShowError error={product.isError}/>
                            :
                            <div>
                                <Col span={15} align='center'>
                                    <img className={"borde-imagen"}
                                         height={230}
                                         width={230}
                                         src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                                    />

                                </Col>
                                <br/>
                                <Col span={15} align='center' className={"texto"}>
                                    <p>NOMBRE DEL PRODUCTO: {product.product.name}  </p>
                                    <p>STOCK: {product.product.stock}</p>
                                    <p>Cantidad</p>
                                    <Divider orientation="center"></Divider>

                                    <p>TOTAL: ${product.product.price} </p>

                                </Col>
                                <Col span={15} align='center'>
                                    <Button className={"boton-comprar"} id="boton" onclick={handleSubmit()}
                                            href={Routes.HOME}>CONFIRMA TU
                                        COMPRA</Button><br/><br/>
                                    <Col span={20} align='left' className={"texto"}>
                                        <p>Al confirmar tu compra, Wasi Wallpay mostrará tus datos
                                            personales y los del vendedor.</p>
                                    </Col>
                                </Col>
                            </div>

                    }

                </Col>
            </Row>

        </>
    );

};

export default PrePurchase;
