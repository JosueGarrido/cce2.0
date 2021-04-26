import React from 'react';
import {useProduct} from "../data/useProduct";
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography, Skeleton } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import SellList2 from "../components/SellList2";
import ShowError from "../components/ShowError";
import withAuth from '../hocs/withAuth';
import {useParams} from "react-router-dom";
import {useProductSell} from "../data/useProductSell";


const { Title, Text } = Typography;
const {  Content, Sider } = Layout;


const ArtistSellDashboard2 = () => {
    let {id} = useParams();
    const product = useProduct(id);
    const sales = useProductSell(id);
    console.log( 'product2', product );

    return (
        <>
            <Row>
                <ArtistMenuDashboard/>

                <Col span={18}>

                    <Content style={{margin: '2px 18px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                            <Col>
                                <Title style={{marginTop: 15, textAlign: 'center'}}>Ventas</Title>

                                <Col>
                                    {
                                        product.isLoading
                                            ? <div>Cargando...</div>
                                            : product.isError
                                            ? <ShowError error={product.isError}/>
                                            : <>
                                                <h1>
                                                    Producto: {product.product.name}
                                                </h1>
                                                <p>{product.product.description}</p>
                                            </>
                                    }

                                    {
                                        sales.isLoading
                                            ? <Skeleton loading={sales.isLoading} active avatar/>
                                            : sales.isError
                                            ? <ShowError error={sales.isError}/>
                                            :
                                            product.product && <SellList2 ProductId={id} sales={sales}/>
                                    }
                                </Col>
                            </Col>

                        </div>
                    </Content>
                </Col>


            </Row>

        </>
    );
}

export default withAuth( ArtistSellDashboard2 );
