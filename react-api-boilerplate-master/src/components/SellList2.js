import {Comment, List, Tooltip, Form, Input, Button, Avatar, message, Skeleton, Card, Typography, Col, Row} from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import API from '../data/index';
import { translateMessage } from '../utils/translateMessage';
import ErrorList from './ErrorList';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
const { Text, Title } = Typography;


const SellList2 = ( { sales, productId } ) => {

    console.log( 'sales', sales );
    console.log( 'product', productId );

    return (
        <>
            <List
                className='comment-list'
                header="Datos del Comprador"
                itemLayout='horizontal'
                dataSource={ processSellData( sales.sales ) }
                renderItem={ ( item ) => {
                    if( item.author ) {
                        return (
                            <Row justify='center' gutter={ 30 }>
                                <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 20 } }>
                            <Card hoverable
                                  style={{borderRadius: 10}}>
                                <Row>
                                <Col span={3}>
                                { item.avatar }
                                </Col>
                                <Col span={8}>
                                { item.datetime }
                                <br/>
                                <Text strong>Nombre del comprador: </Text>
                                { item.author }
                                <br/>
                                { item.content }
                                </Col>
                                    <Col span={7}>
                                        <Text strong>Datos del producto</Text>
                                        <br/>
                                        { item.content2 }
                                        <br/>
                                    </Col>
                                    <Col span={6}>
                                        <Button type="primary" size="large" style={ { marginTop: 25 } } >
                                            Imprimir constancia</Button>
                                    </Col>
                                </Row>
                            </Card>
                                </Col>
                            </Row>
                        );

                    } else {
                        return <Skeleton loading={ true } active avatar />;
                    }
                } }
            />
        </>
    );
};

export default SellList2;

const processSellData = ( sales ) => {
    return sales.map( ( sales ) => {
        console.log( 'sales', sales );
        if( sales.id ) {
            return ({

                author: <Text strong>{ sales.user.name } { sales.user.last_name }</Text>,
                avatar: <Avatar
                    size={100}
                    src={ `http://localhost:8000/storage/${ sales.user.profile_picture }` }
                />,
                content: <>
                    <Text strong> Número de Telefono: 0{ sales.user.phone } </Text>
                    <br/>
                    <Text strong> Correo: { sales.user.email } </Text>
                    <br/>
                    <Text strong> CI: { sales.user.identity } </Text>
                    <br/>
                    <Text strong> Ubicación: { sales.user.location } </Text>
                    </>,
                datetime: <Tooltip title={ moment( sales.created_at ).format( 'YYYY-MM-DD HH:mm:ss' ) }>
                    <span>{ moment( sales.created_at ).fromNow() }</span>
                </Tooltip>,
                content2: <>
                    <Text strong> Nombre del producto: { sales.product.name } </Text>
                    <br/>
                    <Text strong> Precio: ${ sales.product.price } </Text>
                    <br/>
                    <Text strong> Stock: { sales.product.stock } </Text>
                    <br/>
                    <br/>
                    <Text strong> Ubicación: { sales.product.location } </Text>
                </>,
            });
        } else {
            return {};
        }
    } );
};
