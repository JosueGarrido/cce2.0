import React from 'react';
import '../styles/InfoPages.css'
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import {Divider, Row, Col, Layout, Typography, Collapse, Carousel} from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Routes from "../constants/routes";
import HowBuy from '../images/ImgPages/comprar-imagen.png';
import letraComprar from '../images/ImgPages/comprar-letras.png';
import logoVertical from '../images/logoVertical.png';
import img1 from  '../images/home_images/como-comprar.png';
import img2 from  '../images/home_images/como-vender.png';
import img3 from  '../images/home_images/como-funciona.png';
const { Title } = Typography;
const {  Content, Sider } = Layout;

const Header = Layout.Header;
const {Panel} =Collapse;


const Politics = props => {

    return(
        <>

            <Row type='flex' justify='center' className='header-wrapper' style={{position:"relative"}}>
                <Col span={24}>
                    <Header className='headerPage'>
                        <Row type='flex' justify='space-between' align='bottom'>


                            <Col span={7} align='left' className='main-menu'>


                            </Col>
                            <Col span={10} align='center'>
                                <a href={Routes.HOME}>
                                    <img className='logoPages' src={letraComprar}/>
                                </a>
                            </Col>



                            <Col span={1}>

                            </Col>
                            <Col span={3}>
                                <nav>
                                    <ul>
                                        <li><a href="#"> <i className="down"></i></a>

                                            <ul style={{textAlign:"center"}}>
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
            <Content className="margin">
               <h1>Politicas y privacidad</h1>
            </Content>


        </>
    );

};

export default Politics;
