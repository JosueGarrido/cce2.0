import React from 'react';
import Routes from '../constants/routes';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import { Layout, Row, Col, Button, Popover, Input } from 'antd';
import { FacebookFilled, InstagramFilled, TwitterCircleFilled, GithubOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import logoW from '../images/logoW.png';
import logo from '../images/logo-menta.png';
import moment from 'moment';
import { AudioOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';
import logoCCE from '../images/cce-logo.png';
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const { Search } = Input;

/**
 * Este componente renderiza los elementos comunes para toda la aplicación
 *
 * Header (menu), Content y Footer
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Header2 = props => {
    console.log( 'props', props );
    return (
        <div className='app'>


                <Row type='flex' justify='center' className='header-wrapper'>
                    <Col span={ 20 }>
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
                            { /*
                <Row>
                  <Col span={6}></Col>

                  <Col span={12} align='center' className="search__container">
                    <input className="search__input" type="text" placeholder="¿Qué desea buscar?"/>
                  </Col>

                  <Col span={6}></Col>

                </Row>*/}
              </Header>

                    </Col>

                </Row>


        </div >
    );
};

export default Header2;


