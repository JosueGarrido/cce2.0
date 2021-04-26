import React from 'react';
import '../styles/InfoPages.css'
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Routes from "../constants/routes";
import HowSale from '../images/ImgPages/vender-imagen.png';
import letraVender from '../images/ImgPages/vender-letras.png';
import logoVertical from '../images/logoVertical.png';
const { Title } = Typography;
const {  Content, Sider } = Layout;

const Header = Layout.Header;

const AboutPage = props => {
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
                                    <img className='logoPages' src={letraVender}/>
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
                <img src={HowSale} className="imagesPageHB" />

                <div className="imgPage">
                    <Col span={24} >
                        <Row >
                            <Col span={2}>
                            </Col>

                            <Col span={11}><br/><br/><br/><br/>
                                <img src={logoVertical} />
                            </Col>

                            <Col span={9}><br/><br/><br/><br/><br/><br/>
                                <p className="text">
                                    Wasi Wallpay es una plataforma online que incentiva y fomenta el e-commerce de productos culturales a nivel artístico y artesanal dentro de Ecuador. Según cifras oficiales del año 2019, la “economía naranja” de nuestro país apenas alcanza el 1,93% del PIB. Esta es una de las razones, entre otras, que justifican la necesidad a escala nacional de fortalecer el consumo de este tipo de productos.
                                    En este contexto, la Casa de la Cultura Ecuatoriana Benjamín Carrión apela también al crecimiento de las industrias creativas al considerarse, según la Ley Orgánica de Cultura, como un espacio de encuentro común, de convivencia y de ejercicio de los derechos culturales en diversidad cultural, artística, memoria social e interculturalidad, que procura la circulación, promoción y difusión de las obras de los creadores, gestores y colectivos culturales en diferentes artes, letras y expresiones de la cultura en su Sede Nacional ubicada en Quito y en sus 24 núcleos provinciales.
                                </p>

                                <div style={{textAlign:'right'}}><br/><br/><br/>
                                    <a href={Routes.REGISTER} >
                                        <button type="button" className="btn-verMas" > REGISTRATE GRATIS</button>
                                    </a>

                                </div><br/><br/><br/><br/>

                            </Col>

                            <Col span={2}>
                            </Col>
                        </Row>
                    </Col>



                </div>
            </Content>


        </>
    );

};

export default AboutPage;
