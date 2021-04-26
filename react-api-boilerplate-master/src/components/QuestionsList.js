import React, { useEffect, useState } from 'react';
import {Skeleton, Card, Col, Row, Radio, Typography, Button, Avatar, Menu, Divider} from 'antd';
import { useProductsList } from '../data/useProductsList';
import { useUserList } from '../data/useUserList';
import ShowError from './ShowError';
import {LoadingOutlined, LogoutOutlined} from "@ant-design/icons";
import {useAuth} from "../providers/Auth";
import {QuestionCircleOutlined , QuestionOutlined} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Text, Title } = Typography;
const {Meta} = Card;

const QuestionsList = ( props ) => {

        const {currentUser} = useAuth();

        const { products, isLoading, isError, mutate } = useProductsList(currentUser && currentUser.id);


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
                                    ? <Card>
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
                                                <Text strong type="secondary">Precio: $ </Text>
                                                <Text type="secondary">{products.price} </Text>
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

                                            </Col>
                                            <Col span={5}>


                                                <Menu

                                                    style={{ marginTop:5, width: 300}}
                                                    defaultSelectedKeys={['1']}
                                                    defaultOpenKeys={['sub1']}
                                                    mode="inline"
                                                >
                                                    <SubMenu
                                                        key="Preguntas"
                                                        title={
                                                            <span>
            <QuestionCircleOutlined />
              <span>Preguntas</span>
            </span>
                                                        }
                                                    >


                                                        {

                                                            <p>Preguntas 1: Saepe rerum quam nobis ea ex. </p>

                                                           }
                                                        {
                                                            <p>Preguntas 2: Sit enim ad error harum quia quae.</p>

                                                        }


                                                    </SubMenu>


                                                </Menu>



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

export default QuestionsList;
