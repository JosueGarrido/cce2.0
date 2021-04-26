import React, { useEffect, useState } from 'react';
import {Card, Avatar, Skeleton, Table, Tag, Space, Row, Col, Typography, Button, Modal, Divider, message} from 'antd';
import Routes from '../constants/routes';
import {Link, useParams} from 'react-router-dom';
import { usePublicationList } from '../data/usePublicationList';
import ShowError from './ShowError';
import {Form, Input, Select} from "../pages/Antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Publications from "../pages/Publications";
import API from "../data";
import ErrorList from "./ErrorList";
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";

const { Text } = Typography;
const {Meta} = Card;

const ProductsList = () => {
        let { id } = useParams();
        const user = useUser( id );
        const { products, isLoading, isError, mutate } = usePublicationList();
        const { users} = useUserList();

        const [loading, setLoading] = useState(true);
        if( isLoading ) {
            return <Row justify='center' gutter={ 30 }>
                {
                    [ ...new Array( 9 ) ].map( ( _, i ) =>
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
                                <Skeleton.Image style={ { width: 200 } } />

                            </div>
                        </Col>
                    )
                }
            </Row>;
        }

        if( isError ) {
            return <ShowError error={ isError } />;
        }

        return (
            <>

                <Row justify='center' gutter={ 30 }>
                    {
                        users === undefined
                            ? <Text>No cargan los datos</Text>
                            :
                            products.map((product)=>{
                                if(product.user_id===user.user.id){
                                    return (

                                        <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 20 } } >
                                            <Card
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
                                                        {  /*     <iframe
                                                            src={product.description}
                                                            frameBorder="0" allowFullScreen="true" scrolling="no"
                                                            height="378" width="620"></iframe>  */ }
                                                    </Col>


                                                </Row>
                                            </Card>
                                        </Col>
                                    )
                                }

                            })
                    }
                </Row>
            </>
        );
    };

export default (ProductsList);
