import React, { useEffect, useState } from 'react';
import {Card, Col, Typography, Modal, message} from 'antd';
import { useUser } from '../data/useUser';
import ShowError from './ShowError';
import {LoadingOutlined, LogoutOutlined} from "@ant-design/icons";
import {useAuth} from "../providers/Auth";
import API from "../data";
import Cookies from "js-cookie";
import ErrorList from "./ErrorList";
import {translateMessage} from "../utils/translateMessage";


const { Text, Title,Link } = Typography;
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






const Privacy = ( props ) => {

    const {currentUser} = useAuth();
    const {user, isLoading, isError, mutate} = useUser(currentUser && currentUser.id);
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Eliminar cuenta');
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('Eliminando cuenta');
        setConfirmLoading(true);
        setTimeout(() => {

            setVisible(false);
            setConfirmLoading(false);
            window.location.reload(true);

        }, 2000);

        try {
            API.delete(`/users/${currentUser && currentUser.id}`);


        } catch (e) {
            console.error('No se pudo eliminar la cuenta', e);
            const errorList = e.error && <ErrorList errors={e.error}/>;
            message.error(<>{translateMessage(e.message)}{errorList}</>);
        }



    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
    <Col style={{width:'70%', marginLeft: "auto",
        marginRight: "auto"}}>
        <Title level={3} style={{marginTop: 15}}>Permitir el uso de tu información para recibir recomendaciones personalizadas</Title>
        <Card style={{borderRadius: 10, marginTop: 20}}>
            <Card.Grid hoverable={false} style={gridStyleTop} >
                <p>Recibe mejores sugerencias de productos y comunicaciones en base a tu información y comportamiento en línea. </p>
            </Card.Grid>

        </Card>
        <br/>

        <br/>
        <Title level={3} style={{marginTop: 20}}>Eliminar tus datos</Title>
        <Card style={{borderRadius: 10, marginTop: 20}}>
            <Card.Grid hoverable={false} style={{borderRadius:10, width:'100%'}} >
             <p>Cancela tu cuenta y elimina tu información de Mercado Libre.</p>
            </Card.Grid>
            <Card.Grid hoverable={false} style={{width: '100%'}} >
                <Link onClick={showModal}>Cancelar Cuenta</Link>
            </Card.Grid>
        </Card>
        <Modal
            title="¿Está seguro de que desea eliminar su cuenta?"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <p>{modalText}</p>
        </Modal>
    </Col>



)


}
export default Privacy;
