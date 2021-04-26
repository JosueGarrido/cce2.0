import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography, Avatar, Card } from 'antd';
import {MailOutlined, UserOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {useAuth} from "../providers/Auth";

const { Title } = Typography;
const {  Content, Sider } = Layout;
const {Meta} = Card;

const gridStyleTop = {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
};
const gridStyleBot = {
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
};


const DashboardSecurity = () => {

    const {currentUser} = useAuth();

    return (
        <>
            <Row>
                <ArtistMenuDashboard/>

                <Col span={18}>

                    <Content style={{margin: '2px 18px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                            <Title style={{marginTop: 15, textAlign: 'center'}}>Seguridad</Title>

                            <Col style={{
                                width: '70%', marginLeft: "auto",
                                marginRight: "auto"
                            }}>
                                <Title level={3} style={{marginTop: 15}}>Acceso a tu cuenta</Title>
                                <Card style={{borderRadius: 10, marginTop: 20}}>
                                    <Card.Grid hoverable={false} style={gridStyleTop}>
                                        <Meta
                                            avatar={<Avatar
                                                size={50}
                                                alt={currentUser && currentUser.email}
                                                src="https://assets.stickpng.com/images/584856bce0bb315b0f7675ad.png"
                                            />}
                                            title="E-mail"
                                            description={currentUser && currentUser.email}
                                        />

                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{width: '100%'}}>
                                        <Meta
                                            avatar={<Avatar
                                                size={50}
                                                alt={currentUser && currentUser.name}
                                                src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
                                            />}
                                            title="Usuario"
                                            description={`${currentUser && currentUser.name} ${currentUser && currentUser.last_name}`}
                                        />
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={gridStyleBot}>
                                        <Meta
                                            avatar={<Avatar
                                                size={50}
                                                alt={currentUser && currentUser.email}
                                                src="https://cdn.onlinewebfonts.com/svg/img_398183.png"
                                            />}
                                            title="Clave"
                                            description="********"
                                        />
                                    </Card.Grid>
                                </Card>
                            </Col>

                        </div>
                    </Content>
                </Col>


            </Row>

        </>
    );
}

export default DashboardSecurity;
