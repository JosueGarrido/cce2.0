import React, {useState} from 'react';

import ShowError from '../components/ShowError';
import { useParams, Link } from 'react-router-dom';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image,Button,Modal, Divider} from 'antd';
import Routes from "../constants/routes";
import {useCat1Products} from "../data/useCat1Products";

const { Text, Title } = Typography;
const {Meta} = Card;

const Category1Products = (props) => {
    let { id } = useParams();
    const category1 = useCat1Products( id );


    console.log('category1', category1.cat1);


    return (
        <>

            {
                category1.isLoading
                    ? <div>Cargando...</div>
                    : category1.isError
                    ? <ShowError error={ category1.isError } />
                    : <Row justify='center' gutter={ 30 }>
                        {
                            category1.cat1.map( ( product, i ) => (
                                <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 10 } } key={ i }>
                                    { product.name
                                        ? <Card
                                            title={ product.name }
                                            extra={ <Link to={ Routes.PRODUCT.replace( ':id', product.id ) }>Más</Link> }
                                            style={{
                                                width: 1000,
                                                marginRight: 20,
                                                marginBottom: 30,
                                                background: '#fffff'

                                            }}
                                        >
                                            <Row >
                                                <Col span={14}>
                                                    <Meta
                                                        avatar={<Avatar size={150} src={ `http://localhost:8000/storage/${ product.image }` }/>}
                                                        title={`Autor: ${product.name}`}
                                                        description={`Descripción: ${product.description}
                                            `}

                                                    />
                                                </Col>

                                                <Col span={8} align='center'>
                                                    <p>user_id: {product.user_id}</p>
                                                    <p>Precio: ${product.price} </p>
                                                    <p>Stock: {product.stock} </p>
                                                    <p>Venta: {product.sales} </p>
                                                    <p>Ubicación: {product.location} </p>

                                                </Col>
                                            </Row>
                                        </Card>
                                        : <div style={ { textAlign: 'center' } }>
                                            <Card title='' extra='' cover='' loading />
                                        </div>
                                    }
                                </Col>
                            ) )
                        }

                    </Row>
            }


        </>
    );

};

export default ( Category1Products );
