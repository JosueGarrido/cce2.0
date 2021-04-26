import React from 'react';
import { Menu, Divider, Row, Col } from 'antd';
import {LoadingOutlined, LogoutOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Routes from "../constants/routes";
import {Link} from "react-router-dom";

const { SubMenu } = Menu;

const ClientMenuDashboard = () => (
    <>


        <Menu

            style={{ marginTop:50, width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu
                key="ventas"
                title={
                    <span>
              <ShoppingOutlined />
              <span>Ventas</span>
            </span>
                }
            >

                <Menu.Item key="Resumen" >Resumen
                    <Link to={ Routes.ABOUT } className='artist-dashboard'/>
                </Menu.Item>
                <Menu.Item key="Compras" >Compras
                    <Link to={ Routes.ABOUT } className='artist-publications-dashboard'/>
                </Menu.Item>
                <Menu.Item key="Preguntas">Preguntas
                    <Link to={ Routes.ABOUT } className='artist-questions-dashboard'/>
                </Menu.Item>
                <Menu.Item key="Reputacion">Reputación
                    <Link to={ Routes.ABOUT } className='artist-sell-dashboard'/>
                </Menu.Item>
            </SubMenu>
            <Divider/>

            <SubMenu
                key="configuracion"
                title={
                    <span>
              <SettingOutlined />
              <span>Configuración</span>
            </span>
                }
            >
                <Menu.Item key="Mis Datos">Mis Datos
                    <Link to={ Routes.DASHBOARD_MY_DATA } />
                </Menu.Item>
                <Menu.Item key="Seguridad">Seguridad
                    <Link to={ Routes.DASHBOARD_SECURITY } />
                </Menu.Item>
                <Menu.Item key="Privacidad">Privacidad
                    <Link to={ Routes.DASHBOARD_PRIVACY } />
                </Menu.Item>
                <Menu.Item key="E-mails">E-mails
                    <Link to={ Routes.DASHBOARD_EMAILS } />
                </Menu.Item>
                <Menu.Item key="Alertas de Búsqueda">Alertas de Búsqueda
                    <Link to={ Routes.DASHBOARD_ALERTS } />
                </Menu.Item>
            </SubMenu>
        </Menu>

    </>
);

export default ClientMenuDashboard;

