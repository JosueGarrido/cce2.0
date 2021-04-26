import React, { useState } from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Drawer, Divider, Row, Col, Layout, Typography, Card } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {useAuth} from "../providers/Auth";

const { Title, Text } = Typography;
const {  Content, Sider } = Layout;

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



const DashboardMyData = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const {currentUser} = useAuth();

    return (
        <>
            <Row>
                <ArtistMenuDashboard/>

                <Col span={18}>

                    <Content style={{margin: '2px 18px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                            <Title style={{marginTop: 15, textAlign: 'center'}}>Mis Datos</Title>

                            <Col style={{width:'70%', marginLeft: "auto",
                                marginRight: "auto"}}>
                            <Title level={3} style={{marginTop: 15}}>Datos de mi cuenta</Title>
                            <Card style={{borderRadius: 10, marginTop: 20}}>
                                <Card.Grid hoverable={false} style={gridStyleTop} >
                                    <strong>Usuario: </strong>
                                    {currentUser && currentUser.name} {currentUser && currentUser.last_name}
                                </Card.Grid>
                                <Card.Grid hoverable={false} style={gridStyleBot}>
                                    <strong>E-mail: </strong>
                                    {currentUser && currentUser.email}
                                </Card.Grid>
                            </Card>
                            <br/>
                            <Title level={3} style={{marginTop: 20}}>Datos personales</Title>
                            <Card style={{borderRadius: 10, marginTop: 20}}>
                                <Card.Grid hoverable={false} style={gridStyleTop} onClick={showDrawer}>
                                    <strong>Nombre y Apellido: </strong>
                                    {currentUser && currentUser.name} {currentUser && currentUser.last_name}
                                </Card.Grid>
                                <Card.Grid hoverable={false} style={{width: '100%'}} onClick={showDrawer}>
                                    <strong>Documento de Identificación: </strong>
                                    {currentUser && currentUser.identity}
                                </Card.Grid>
                                <Card.Grid hoverable={false} style={gridStyleBot}>
                                    <strong>Teléfono: </strong>
                                    {currentUser && currentUser.phone}
                                </Card.Grid>
                            </Card>
                            <br/>
                            <Title level={3} style={{marginTop: 20}}>Domicilio</Title>
                            <Card style={{borderRadius: 10, marginTop: 20}}>
                                <Card.Grid hoverable={false} style={{borderRadius:10, width:'100%'}} >
                                    {currentUser && currentUser.location}
                                </Card.Grid>
                            </Card>
                            </Col>

                            <Drawer
                                title="Basic Drawer"
                                placement="right"
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                            >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Drawer>
                        </div>
                    </Content>
                </Col>


            </Row>

        </>
    );
}

export default DashboardMyData;
