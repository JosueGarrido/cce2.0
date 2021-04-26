import React, {useState} from 'react';

import ShowError from '../components/ShowError';
import { useParams, Link } from 'react-router-dom';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Layout} from 'antd';
import {FacebookOutlined, InstagramFilled, TwitterOutlined, UserAddOutlined,ForkOutlined,WhatsAppOutlined} from "@ant-design/icons";
import Routes from "../constants/routes";
import {useCat1Products} from "../data/useCat1Products";
import Category1Products from "../components/Category1Products";
import Category1Filter from "../components/Category1Filter";

const { Text, Title } = Typography;
const {Meta} = Card;
const {  Content, Sider } = Layout;


const Category1 = (props) => {
    let { id } = useParams();
    const category1 = useCat1Products( id );

    console.log('category1', category1.cat1);

    return (
        <>

            <Row>
                <Col span={ 6 }>
                <Category1Filter/>
                </Col>

                <Col span={ 18 } >

                    <Content style={{ margin: '2px 18px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                            <Title style={ { marginTop:15, textAlign: 'center' } }>Productos</Title>

                            <Category1Products/>

                        </div>
                    </Content>
                </Col>


            </Row>
        </>
    );

};

export default ( Category1 );
