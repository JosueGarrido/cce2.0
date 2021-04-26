import React, {useState} from 'react';

import ShowError from '../components/ShowError';
import { useParams, Link } from 'react-router-dom';
import { useProductsList } from '../data/useProductsList';
import { useReputationList } from "../data/useReputationList";
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image,Button,Modal, Divider} from 'antd';
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import ProductsList from '../components/ProductsList';
import NewComment from "../components/NewComment";
import moment from "moment";
import {FacebookOutlined, InstagramFilled, TwitterOutlined, UserAddOutlined,ForkOutlined,WhatsAppOutlined} from "@ant-design/icons";
import Header2 from '../components/Header2';
import CommentsList from "../components/CommentsList";

const { Text, Title } = Typography;
const {Meta} = Card;

const Artist = (props) => {
    let { id } = useParams();
    const user = useUser( id );
    const products = useProductsList( id );

    const {location, match} = props;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const { reputations } = useReputationList( id );


    const { users } = useUserList();
    const [ visible, setVisible ] = useState( 2 );

    console.log('productos', products);
    console.log('user', user);

    console.log('location', location);
    console.log('match', match);
    const commentsconcat = [];
    const comments = [];
    console.log('users', users);

    const sales =[];
    let totalsales =0;
    let totalproducts;
    let totalscore=0;


    if (products.products !== undefined) {
        for (let i=0; i< (products.products.length); i++ ){
            sales.push(products.products[i].sale);
        }
        totalproducts = products.products.length;
    }

    if (reputations !== undefined) {
        for (let i=0; i< (reputations.length); i++ ){
            totalscore += reputations[i].score;
        }
        totalscore = (totalscore/reputations.length)
    }

    console.log('ventas', sales);

    console.log('total products', totalproducts);


    for (let n = 0; n < sales.length; n++ ){
        totalsales +=  sales[n].length
    }

    console.log('ventas totales', totalsales);
    console.log('score total', totalscore);
    console.log('comentarios', reputations);


    const handleloadmore = () => {
        setVisible(visible+3);
    }


    return (
        <>
            <Header2/>
            <img
                height={550}
                width={1450}
                src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
            />


            {
                user.isLoading
                    ? <div>Cargando...</div>
                    : user.isError
                    ? <ShowError error={ user.isError } />
                    : <>

                        <Card hoverable>

                        <Divider orientation="center">
                            <h1 >Usuario: { user.user.name }</h1>
                            <p>{ user.last_name }</p>
                        </Divider>

                        <br/>
                        <Row >


                            <Col span={3}  align={'center' } md={6}>


                                {<Avatar
                                    size={100}
                                    alt={ user.user.name }
                                    src={ `http://localhost:8000/storage/${ user.user.profile_picture }` }

                                />}

                                
                                <Col align={'center' }  span={10}>
                                    <Button  >Seguir </Button >

                                </Col>

                            </Col>

                            <Col span={10}>
                                <h4>{ user.user.name} { user.user.last_name } </h4>
                                <p>{ user.user.email } Artista escénico, actor que ha incursionado en la dramaturgia y
                                    la dirección. Amante del cine. Trabajó como periodista y fotógrafo por diez años en
                                    grupo El Comercio, también pasó por  Revista Q y Radio Pública del Ecuador. Los
                                    temas que aborda desde el arte tienen que ver con la violencia de género, el
                                    racismo, la discriminación y los derechos humanos.</p>

                                <Row justify="space-around">
                                    <Col align={'center' } span={4}><Text type="secondary">{totalproducts}</Text></Col>
                                    <Col align={'center' } span={4}><Text type="secondary">{totalsales}</Text></Col>
                                    <Col align={'center' }  span={4}><Text type="secondary">{totalproducts}</Text></Col>
                                </Row>
                                <Row justify="space-around">
                                    <Col align={'center' }  span={4}><Text type="secondary">SEGUIDORES</Text></Col>
                                    <Col align={'center' }  span={4}><Text type="secondary">VENTAS</Text></Col>
                                    <Col align={'center' }  span={4}><Text type="secondary">PRODUCTOS</Text></Col>
                                </Row>
                                <Rate disabled defaultValue={totalscore}/>
                                <br/>
                            </Col>


                            <Col align={'center' } span={7}>
                                <Button type="primary" onClick={showModal} >
                                    <ForkOutlined rotate={90} />
                                </Button>
                                <Modal title="Compartir" visible={isModalVisible} onCancel={handleCancel}>
                                    <Row justify="space-around">
                                        <Col align={'center' }  span={4}><Button
                                            type={'primary'} href={`https://www.facebook.com/sharer/sharer.php?u=wocking.com/${match.url}`}>
                                            <FacebookOutlined />
                                        </Button></Col>
                                        <Col align={'center' }  span={4}><Button
                                            type={'primary'} href={`https://twitter.com/intent/tweet?text=&url=localhost:3000${match.url}`} >

                                            <TwitterOutlined  />
                                        </Button></Col>
                                        <Col align={'center' }  span={4}><Button
                                            type={'primary'} href={`https://api.whatsapp.com/send?text=https://wocking.com${match.url}`}>
                                            <WhatsAppOutlined />
                                        </Button></Col>
                                    </Row>


                                </Modal>


                                <p><Text type="secondary">Compartir</Text></p>

                                <h5>PROPIETARIO DE LA TIENDA</h5>
                                {<Avatar
                                    size={50}
                                    alt={ user.user.name }
                                    src={ `http://localhost:8000/storage/${ user.user.profile_picture }` }
                                />}
                                <p><Text type="secondary">{ user.user.name }</Text></p>
                                <p><Text type="secondary">Desde { moment( user.user.created_at ).format( 'YYYY' ) }-{ user.user.location }</Text></p>
                                <p><Text type="secondary">Contacto:</Text></p>
                                <Col >
                                    <a href='https://www.facebook.com' target='_blank'>
                                        <FacebookOutlined />
                                    </a>
                                </Col>
                                <Col >
                                    <a href='https://www.instagram.com' target='_blank'>
                                        <InstagramFilled />
                                    </a>

                                </Col>
                                <Col >
                                    < a href='https://www.twitter.com' target='_blank' >
                                        <TwitterOutlined  />
                                    </a>
                                </Col>

                            </Col>

                        </Row>


                        <Divider orientation="center"></Divider>

                    </Card>
                <Col span={24}>
                            Información de usuario

                        </Col>
                        <br/>
                        <Col span={24}>Productos</Col>
                        <ProductsList/>
                        <br/>
                        <p>{ user.last_name }</p>
                        <br/>

                    </>
            }
            {
                reputations === undefined
                    ? <Text>No cargan los datos</Text>
                    :
                    <Row gutter={30}>
                        <Col align='center' md={6}>
                            <Title level={3}>Reputación: </Title>
                        </Col>
                        <Col md={18}>
                            <Col md={24}>
                                {
                                    reputations.isLoading
                                        ? <Skeleton loading={reputations.isLoading} active avatar/>
                                        : reputations.isError
                                        ? <ShowError error={reputations.isError}/>
                                        : user.user && <NewComment userId={id} reputations={reputations}/>
                                }
                            </Col>
                            <br/>
                            {
                                reputations.slice(0, visible).map((reputations, i) => (
                                    <Col xs={24} sm={18} md={24} style={{marginBottom: 20}} key={i}>
                                        {reputations.comment
                                            ? <Card hoverable
                                                    style={{borderRadius: 10}}>
                                                <Row>
                                                    <Col span={14}>
                                                        {
                                                            users === undefined
                                                                ? <Text>No cargan los datos</Text>
                                                                :
                                                                <Meta
                                                                    avatar={<Avatar
                                                                        size={100}
                                                                        alt={users[reputations.user_id - 1].name}
                                                                        src={`http://localhost:8000/storage/${users[reputations.user_id - 1].profile_picture}`}
                                                                    />}


                                                                    title={`Nombre del Comprador: ${users[reputations.user_id - 1].name} ${users[reputations.user_id - 1].last_name}`}
                                                                    description={`Comentario: ${reputations.comment}`}
                                                                />
                                                        }
                                                    </Col>
                                                    <Col span={8} align='end'>

                                                        <Text type='secondary'><Text strong>Valoración: </Text>
                                                            <Rate disabled defaultValue={reputations.score}/>

                                                        </Text>
                                                    </Col>
                                                </Row>

                                            </Card>
                                            : <div style={{textAlign: 'center'}}>
                                                <Card title='' extra='' cover='' loading/>
                                            </div>
                                        }
                                    </Col>
                                ))
                            }

                            {

                                visible < reputations.length
                                    ?
                                    <Col span={22}>
                                        <hr/>
                                        <div style={{textAlign: 'center'}}>
                                            <Button
                                                type={'primary'} onClick={handleloadmore}>
                                                Ver más
                                            </Button>
                                        </div>
                                    </Col>
                                    : <>
                                    </>
                            }
                            <br/>
                        </Col>

                    </Row>
            }

        </>
    );

};

export default ( Artist );
