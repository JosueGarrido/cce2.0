import React, { useEffect, useState } from 'react';
import { Skeleton, Card, Col, Row, Radio, Typography, Button, Avatar, Rate } from 'antd';
import { useReputationList} from '../data/useReputationList';
import { useUserList } from '../data/useUserList';
import ShowError from './ShowError';
import {LoadingOutlined, LogoutOutlined} from "@ant-design/icons";
import {useAuth} from "../providers/Auth";

const { Text, Title } = Typography;
const {Meta} = Card;

const ReputationList = ( props ) => {

    const {currentUser} = useAuth();

        const { reputations, isLoading, isError, mutate } = useReputationList(currentUser && currentUser.id);
        const { users } = useUserList();
        const [ visible, setVisible ] = useState( 4 );


    if (users !== undefined) {
        console.log('usuarios', users);
    }

    console.log('comentarios', reputations);

    const handleloadmore = () => {
        setVisible(visible+3);
    }



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
                        reputations.slice(0,visible).map( ( reputations, i ) => (
                            <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 20 } } key={ i }>
                                { reputations.comment
                                    ? <Card hoverable
                                    style={{borderRadius: 10}}>
                                        <Row>
                                            <Col span={14} >
                                        {
                                            users === undefined
                                                ? <Text>No cargan los datos</Text>
                                                :
                                                <Meta
                                                      avatar={<Avatar
                                                        size={100}
                                                        alt={ users[reputations.user_id-1].name }
                                                        src={ `http://localhost:8000/storage/${ users[reputations.user_id-1].profile_picture }` }
                                                      />}


                                                    title={`Nombre del Comprador: ${users[reputations.user_id-1].name} ${users[reputations.user_id-1].last_name}`}
                                                    description={`Comentario: ${reputations.comment}`}
                                                />
                                        }
                                            </Col>
                                            <Col span={8} align='end'>

                                        <Text type='secondary'><Text strong>Valoración: </Text>
                                            <Rate disabled defaultValue={ reputations.score } />

                                        </Text>
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
                    {
                        visible < reputations.length
                            ?
                            <Col span={22}>
                                <hr/>
                                <div style={ { textAlign: 'center' } }>
                                    <Button
                                        type={'primary'} onClick={handleloadmore}>
                                        Ver más
                                    </Button>
                                </div>
                            </Col>
                            :<>
                            </>
                    }

                </Row>
            </>
        );
    }
;

export default ReputationList;
