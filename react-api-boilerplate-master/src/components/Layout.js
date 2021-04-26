import React, {useState} from 'react';
import Routes from '../constants/routes';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import { Layout, Row, Col, Button, Popover, Input, TreeSelect } from 'antd';
import { FacebookFilled, InstagramFilled, TwitterCircleFilled, GithubOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import logoWV from '../images/logoVertical.png';
import logo from '../images/logo-menta.png';
import moment from 'moment';
import { AudioOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';
import logoCCE from '../images/cce-logo.png';
import SearchCores from '../components/SearchCores';
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const { Search } = Input;
const { TreeNode } = TreeSelect;

/**
 * Este componente renderiza los elementos comunes para toda la aplicación
 *
 * Header (menu), Content y Footer
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */


const MainLayout = props => {
  console.log( 'props', props );

  return (
      <div className='app'>
        <Layout>

          <Row type='flex' justify='center' className='header-wrapper'>
            <Col span={ 20 }>
              {/*<Header className='header'>
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
              </Header>*/}

            </Col>

          </Row>


          <Content className='app'>
            <Row type='flex' justify='center' style={ { flex: 'auto' } }>
              <Col span={24}>
                { props.children }
              </Col>
            </Row>
          </Content>

          <Footer className='footer'>
            <Row>
              <Col span={8} className='logo-w'>
                <img src={logoWV}  height={ 120 }/>
              </Col>

              <Col span={8}
                   className='footerTitle'>
                Encuéntranos en: <br /><br />
                {/*<input className="search__input" type="text" placeholder="Encuentranos"/>*/}
                <SearchCores/>
               <Row className='redes' >
                 <Col span={8}><br/>
                   <a href='https://www.facebook.com'
                      target='_blank'
                      rel='noopener noreferrer' >

                     <FacebookFilled  style={{textAlign:'right'}}/>
                   </a>
                 </Col>
                 <Col span={8}><br/>
                   <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                     <InstagramFilled style={{textAlign:'center'}}/>
                   </a>
                 </Col>
                 <Col span={8}><br/>
                   <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                     <TwitterCircleFilled style={{textAlign:'left'}}/>
                   </a>
                 </Col>

               </Row>





              </Col>

              <Col span={8} align='right'>
                <br/>
                <Link to={ Routes.ABOUT }  style={ {
                  marginLeft: 70,
                  marginRight: 10,
                  textDecoration: 'none',
                  textAlign:'right',
                } }  className='questions'>¿Quiénes Somos? </Link>
                <br/>
                <Link to={ Routes.ABOUT }  style={ {
                  marginLeft: 70,
                  marginRight: 10,
                  textDecoration: 'none',
                  textAlign:'right',
                } }  className='questions'>Términos y Condiciones </Link>
                <br/>
                <Link to={ Routes.QUESTIONPAGE }  style={ {
                  marginLeft: 70,
                  marginRight: 10,
                  textDecoration: 'none',
                  textAlign:'right',
                } }  className='questions'>Preguntas Frecuentes </Link>
                <br/>
                <Link to={ Routes.POLITICS }  style={ {
                  marginLeft: 70,
                  marginRight: 10,
                  textDecoration: 'none',
                  textAlign:'right',
                } }  className='questions'>Políticas de Privacidad </Link>

              </Col>
            </Row>
            <Row>
              <Col span={8}>

              </Col>
              <Col span={8}  className='logo-blanco'>

                  <p className='questions1'>Con el aval de:</p>
                  <img src={logoCCE}height={ 50 } style={{textAlign:'center'}}/><br/><br/>
                  <p>© 2020 CCE Quito-Ecuador - Todos los derechos reservados -</p>
              </Col>
              <Col span={8}>

              </Col>
            </Row>

          </Footer>
        </Layout>
      </div >
  );
};

export default MainLayout;


