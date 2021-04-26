import React, {useState} from 'react';
import {Menu, Divider, Row, Col, Layout, Typography, Select, Card} from 'antd';
import {LoadingOutlined, LogoutOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Routes from "../constants/routes";
import {Link, useParams} from "react-router-dom";
import {useCategories3} from "../data/useCategories3";
import {useCategories2} from "../data/useCategories2";


const { SubMenu } = Menu;
const { Title } = Typography;
const {  Content, Sider } = Layout;
const { Option } = Select;

const CategoryFilter = (props) => {

    let {id} = useParams();
    const {categories2, isLoading, isError} = useCategories2();
    const {categories3} = useCategories3();
 //   const [currentCat3,setCurrentCat3]= useState('');



/*
    const handleChangeCat3 = ( cat3 ) => {

        const currcat3 = cat3;
        console.log('cat3xdd',( cat3 ));
        setCurrentCat3( currcat3 );

    };
*/
    const { handleCat3 } = props


    console.log('cat2', categories2);

    console.log('categorias3', categories3)

    if (categories3 !== undefined) {
        console.log('catexdd', categories3.category2_id === categories2[id - 1].id)
    }

    return (

        <>
            <Row>

                <Col span={24}>

                    <Content style={{margin: '2px 18px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                            <Col>
                                {categories3 !== undefined
                                    ?
                                <Title style={{width:200, marginTop: 15, textAlign: 'center'}}>{categories2[id-1].name}</Title>
                                    : <div style={{textAlign: 'center'}}>
                                        <Card title='' extra='' cover='' loading/>
                                    </div>
                                }


                                <Title level={3} style={{width:200, marginTop: 15}}>Estilo</Title>

                                {categories3 !== undefined
                                    ?
                                    <Select
                                        showSearch
                                    placeholder="Selecciona el Estilo"
                                    onChange={handleCat3}
                                    style={{width: 200}}
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        >
                                        {
                                            categories3.map((categories3,i)=>{
                                                if (categories3.category2_id === categories2[id - 1].id) {
                                                    return (
                                                        categories3.id
                                                            ?
                                                <Option key={i} value={categories3.id} >{categories3.name}</Option>
                                                : <div style={{textAlign: 'center'}}>
                                                        <Card title='' extra='' cover='' loading/>
                                                    </div>

                                                )
                                        }
                                })
                                        }
                                    </Select>

                                    : <div style={{textAlign: 'center'}}>
                                        <Card title='' extra='' cover='' loading/>
                                    </div>
                                }
                            </Col>

                            <Col>

                                <Title level={3} style={{width:200, marginTop: 15}}>Técnica</Title>


                                <Select
                                    showSearch
                                    style={{width: 200}}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    <Option value="1">Not Identified</Option>
                                    <Option value="2">Closed</Option>
                                    <Option value="3">Communicated</Option>
                                    <Option value="4">Identified</Option>
                                    <Option value="5">Resolved</Option>
                                    <Option value="6">Cancelled</Option>
                                </Select>
                            </Col>

                            <Col>

                                <Title level={3} style={{width:200, marginTop: 15}}>Temática</Title>

                                <Select
                                    showSearch
                                    style={{width: 200}}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    <Option value="1">Not Identified</Option>
                                    <Option value="2">Closed</Option>
                                    <Option value="3">Communicated</Option>
                                    <Option value="4">Identified</Option>
                                    <Option value="5">Resolved</Option>
                                    <Option value="6">Cancelled</Option>
                                </Select>
                            </Col>

                            <Col>

                                <Title level={3} style={{width:200, marginTop: 15}}>Soporte</Title>

                                <Select
                                    showSearch
                                    style={{width: 200}}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    <Option value="1">Not Identified</Option>
                                    <Option value="2">Closed</Option>
                                    <Option value="3">Communicated</Option>
                                    <Option value="4">Identified</Option>
                                    <Option value="5">Resolved</Option>
                                    <Option value="6">Cancelled</Option>
                                </Select>
                            </Col>

                            <Col>

                                <Title level={3} style={{width:200, marginTop: 15}}>Formato</Title>

                                <Select
                                    showSearch
                                    style={{width: 200}}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    <Option value="1">Not Identified</Option>
                                    <Option value="2">Closed</Option>
                                    <Option value="3">Communicated</Option>
                                    <Option value="4">Identified</Option>
                                    <Option value="5">Resolved</Option>
                                    <Option value="6">Cancelled</Option>
                                </Select>
                            </Col>

                        </div>
                    </Content>
                </Col>

            </Row>

        </>
    );
}
export default CategoryFilter;


