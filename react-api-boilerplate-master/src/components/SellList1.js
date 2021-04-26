import React, { useEffect, useState } from 'react';
import { Skeleton, Card, Col, Row, Radio, Typography, Button, Avatar, Rate } from 'antd';
import { useProductsList } from '../data/useProductsList';
import { useUserList } from '../data/useUserList';
import ShowError from './ShowError';
import {LoadingOutlined, LogoutOutlined} from "@ant-design/icons";
import {useAuth} from "../providers/Auth";
import Routes from "../constants/routes";

const { Text, Title } = Typography;
const {Meta} = Card;

const SellList1 = ( props ) => {

        const {currentUser} = useAuth();

        const { products, isLoading, isError, mutate } = useProductsList(currentUser && currentUser.id);
        const { users } = useUserList();


        //console.log('productos', products);
        const commentsconcat = [];
        const comments = [];



        if (products !== undefined) {
            for (var i=0; i< (products.length); i++ ){
                commentsconcat.push(products[i].comment);
            }
        }

        for (var n = 0; n < commentsconcat.length; n++ ){
            Array.prototype.push.apply(comments, commentsconcat[n]);
        }



        if (users !== undefined) {
            console.log('usuarios', users);
        }

        console.log('comentarios', comments);



        // const [ articles, setArticles ] = useState( props.articles );

        // useEffect( () => {
        //   console.log( 'props.articles', props.articles );
        //   setArticles( props.articles );
        // }, [ props.articles ] );


        if( isLoading ) {
            return <Row justify='center' gutter={ 30 }>
                {
                    [ ...new Array( 9 ) ].map( ( _, i ) =>
                        <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 20 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
                                <Card title='' extra='' cover='' loading />
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
                        products.map( ( products, i ) => (
                            <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 10 } } key={ i }>
                                { products.name
                                    ? <Card
                                        hoverable
                                        style={{borderRadius: 10}}>
                                        <Row>
                                            <Col span={9}  style={ { marginRight: 20 } }>
                                                        <Meta
                                                            avatar={<Avatar
                                                                shape="square"
                                                                size={100}
                                                                alt={ products.name }
                                                                src="https://www.elcomercio.com/files/article_main/uploads/2017/08/06/5987d8614c821.jpeg"
                                                            />}


                                                            title={`Nombre del Producto: ${products.name}`}
                                                            description={`Descripción: ${products.description}`}

                                                        />
                                            </Col>
                                            <Col span={3} style={ { marginRight: 15 } }>
                                                <Text strong type="secondary">Precio: </Text>
                                                <Text type="secondary">${products.price} </Text>
                                                <br/>
                                                <Text strong type="secondary">Stock: </Text>
                                                <Text type="secondary">{products.stock} </Text>
                                                <br/>
                                                <Text strong type="secondary">Vendidos: </Text>
                                                <Text type="secondary">{products.sales} </Text>
                                                <br/>
                                                <Text strong type="secondary">Disponibles: </Text>
                                                <Text type="secondary">{products.stock - products.sales}</Text>

                                            </Col>
                                            <Col span={5}  style={ { marginTop: 30 } }>
                                                <Text strong type="secondary">Nº de Compradores: </Text>
                                                <Text type="secondary">{products.sales}</Text>
                                            </Col>
                                            <Col span={5}>
                                                <Button type="primary" size="large" style={ { marginTop: 25 } } href={Routes.ARTIST_SELL_DASHBOARD_ID.replace( ':id', products.id )}>
                                                    Contacta con tus compradores</Button>
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
            </>
        );
    }
;

export default SellList1;
