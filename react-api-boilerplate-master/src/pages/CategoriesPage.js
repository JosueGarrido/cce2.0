import React from 'react';
import '../styles/InfoPages.css'
import {Divider, Row, Col, Layout, Typography, Card, Avatar, Rate} from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {useCategories} from "../data/useCategories";
import {useCategories2} from "../data/useCategories2";
import Routes from "../constants/routes";
import {Link} from "react-router-dom";

const CategoriesPage = () => {

    const { categories, isLoading, isError } = useCategories();
    const { categories2 } = useCategories2();

    console.log('categorias', categories)
    console.log('categorias2', categories2)

    return(
        <>

            <Row type='flex' justify='center' className='header-wrapper' style={{position:"relative"}}>



                            <h1 className="titlePageInfo">
                                Página Categorías
                            </h1>

                    </Row>

            <Row>
                { categories !== undefined
                    ?
                    categories.map((categories, i) => (
                        <Col xs={24} sm={18} md={24} style={{marginBottom: 20}} key={i}>
                            {categories.id
                                ? <Card hoverable
                                        style={{borderRadius: 10}}>
                                    <Row>
                                        <Col span={24}>
                                            {categories.name}
                                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                                {  categories2 !== undefined
                                                    ?
                                                    categories2.map((categories2, i) => {
                                                        if(categories2.category1_id === categories.id) {
                                                            return (
                                                                <Col span={6} style={{marginBottom: 20}}
                                                                     key={i}>
                                                                    {categories2.id
                                                                        ? <Card hoverable
                                                                                style={{borderRadius: 10}}>
                                                                            <Row>
                                                                                <Col className="gutter-row" span={6}>
                                                                                    <Link to={ Routes.CATEGORY.replace( ':id', categories2.id ) }>{categories2.name}</Link>
                                                                                </Col>
                                                                            </Row>

                                                                        </Card>
                                                                        : <div style={{textAlign: 'center'}}>
                                                                            <Card title='' extra='' cover='' loading/>
                                                                        </div>
                                                                    }
                                                                </Col>
                                                            )
                                                        }
                                                    })
                                                    :<div style={{textAlign: 'center'}}>
                                                        <Card title='' extra='' cover='' loading/>
                                                    </div>
                                                }

                                            </Row>
                                        </Col>
                                    </Row>

                                </Card>
                                : <div style={{textAlign: 'center'}}>
                                    <Card title='' extra='' cover='' loading/>
                                </div>
                            }
                        </Col>
                    )) : <div style={{textAlign: 'center'}}>
                        <Card title='' extra='' cover='' loading/>
                    </div>

                }
        </Row>
            </>
    );
};

export default CategoriesPage;
