import React, { useState } from 'react';
import API from '../data';
import '../styles/email.css';

import {
    Layout, Button, Table, Switch
} from 'antd';






const Email = ( { } ) => {
    const { Header, Footer, Sider, Content } = Layout;
    const columns = [
        {
            title: '',
            dataIndex: 'name',
            render: text => <a>{text}</a>,
        },
    ];
    const data = [
        {
            key: '1',
            name: 'Vendiste un producto',
        },
        {
            key: '2',
            name: 'Hicieron una pregunta en tu publicacion',
        },
        {
            key: '3',
            name: 'Finalizo tu promocion',
        },
        {
            key: '4',
            name: 'Tu promocion esta por finalizar',
        },
        {
            key: '5',
            name: 'Te escribieron por mensajeria',
        },
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }



    return (
        <>
            <Layout>

                <Layout>

                    <Content>
                        {
                            <center>
                                <h3>¿Qué e-mails quieres recibir?</h3></center>
                        }

                        {<center>
                            <table className="tableEmails">
                                <tbody>
                                <tr>
                                    <td>Vendiste un producto</td>
                                    <td className="tdSwitch"> <Switch defaultChecked onChange={onChange} /></td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td> Hicieron una pregunta en tu publicación</td>
                                    <td className="tdSwitch"> <Switch defaultChecked onChange={onChange} /></td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td>Finalizo tu promoción</td>
                                    <td className="tdSwitch"> <Switch defaultChecked onChange={onChange} /></td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td>Tu promoción está por finalizar</td>
                                    <td className="tdSwitch"> <Switch defaultChecked onChange={onChange} /></td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td>Te escribieron por mensajería</td>
                                    <td className="tdSwitch"> <Switch defaultChecked onChange={onChange} /></td>
                                </tr>
                                </tbody>
                            </table>
                        </center>}
                        <br/>
                        <h6 style={{textAlign: "center", color: "#9b9b9b"}}>Confirma tus cambios (No se que poner aqui :v)</h6>
                        {<center>
                            <Button>Guardar</Button>
                            &nbsp;&nbsp;
                            <Button>Cancelar</Button>
                        </center>}


                    </Content>
                </Layout>
                <Footer>
                </Footer>
            </Layout>
        </>
    );
};


export default Email;
