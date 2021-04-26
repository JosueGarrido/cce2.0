import React, { useEffect, useState } from 'react';
import {
    Card,
    Avatar,
    Skeleton,
    Table,
    Tag,
    Space,
    Row,
    Col,
    Typography,
    Button,
    Modal,
    Divider,
    message,
    Upload,
    Form,
    Select,
    Input
} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { usePublicationList } from '../data/usePublicationList';
import ShowError from './ShowError';
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons';
import Publications from "../pages/Publications";
import API from "../data";
import { translateMessage } from '../utils/translateMessage';
import {useCategories} from "../data/useCategories";
import {useCategories2} from "../data/useCategories2";
import {useCategories3} from "../data/useCategories3";
import {useCategories4} from "../data/useCategories4";


const { Text } = Typography;
const {Meta} = Card;
const PublicationList = (props ) => {
        const [ showModal, setShowModal ] = useState( false );
        const [ currentPublicationId, setCurrentPublicationId ] = useState( null );
        const [ currentPublicationName, setCurrentPublicationName ] = useState(null);
        const [ currentPublicationDescription, setCurrentPublicationDescription ] = useState( null );
        const [ currentPublicationPrice, setCurrentPublicationPrice ] = useState( null );
        const [ currentPublicationStock, setCurrentPublicationStock ] = useState( null );
        const [ currentPublicationLocation, setCurrentPublicationLocation ] = useState( null );
        const [ currentPublicationScore, setCurrentPublicationScore ] = useState( null );
        const { products, isLoading, isError, mutate } = usePublicationList();
        const [ isSaving, setIsSaving ] = useState( false );
        const [ form ] = Form.useForm();
        const [ imageUrl, setImageUrl ] = useState( null );
        const [ fileList, setFileList ] = useState( [] );
        const { categories } = useCategories();
        const { categories2, isLoading2, isError2 } = useCategories2();
        const { categories3, isLoading3, isError3 } = useCategories3();
        const { categories4, isLoading4, isError4 } = useCategories4();
        const [idproduct, setIdProduct] = useState([]);
        const [edit, setEdit]= useState(false);


    const {Option} = Select;

        // const [ articles, setArticles ] = useState( props.articles );

        // useEffect( () => {
        //   console.log( 'props.articles', props.articles );
        //   setArticles( props.articles );
        // }, [ props.articles ] );

    const onUpdate = async values => {
        console.log( 'Received values of form: ', values );

        form.validateFields()
            .then( async( values ) => {
                setIsSaving( true );
                const data = new FormData();

                data.append( 'name', values.name );
                data.append( 'description', values.description );
                data.append( 'price', values.price );
                data.append( 'stock', values.stock );
                data.append( 'sales', values.sales );
                data.append( 'image', values.image[ 0 ] );
                data.append( 'location', values.location );
                data.append('category_id', values.category_id)


                try {
                    await API.put( `/products/${ values }`,{

                    }); // post data to server
                    form.resetFields();
                    setFileList( [] );
                    setImageUrl( null );
                    setIsSaving( false );
                    await mutate('/products');
                    //onSubmit();
                } catch( error ) {
                    setIsSaving( false );
                    console.error(
                        'You have an error in your code or there are Network issues.',
                        error
                    );

                    message.error( translateMessage( error.message ) );
                }
            } )
            .catch( info => {
                console.log( 'Validate Failed:', info );
                console.log('values', values);
            } );

    };


        const handleChangeCategory = ( e ) => {
            // setArticles( props.articles.filter( ( article ) => e.target.value === 'all' || article.category_data.id ===
            // e.target.value ) );
        };

        const [loading, setLoading] = useState(true);
        if( isLoading ) {
            return <Row justify='center' gutter={ 30 }>
                {
                    [ ...new Array( 9 ) ].map( ( _, i ) =>
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
                                <Skeleton.Image style={ { width: 200 } } />

                            </div>
                        </Col>
                    )
                }
            </Row>;
        }

        if( isError ) {
            return <ShowError error={ isError } />;
        }


        const handleViewName = (name) => {
            setCurrentPublicationName(name)
        }
        const handleViewDescription = (description) => {
            setCurrentPublicationDescription(description)
        }
        const handleViewPrice = (price) => {
            setCurrentPublicationPrice(price)
        }
        const handleViewStock = (stock) => {
            setCurrentPublicationStock(stock)
        }
        const handleViewLocation = (location) => {
            setCurrentPublicationLocation(location)
        }


        const handleCancel = () => {
            setShowModal(false);
        }

        const handleOk = () => {
            setShowModal(false);
        }


    const handleViewDetails = () => {
        setShowModal(true);


    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };


        return (
            <>

                <Row justify='center' gutter={ 30 }>
                    {
                        products.map((product, index)=>{
                            return (
                                <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 20 } } >
                                    <Card

                                        style={{
                                            width: 1000,
                                            marginRight: 20,
                                            marginBottom: 30,
                                            background: '#fffff'

                                        }}



                                    >

                                        <Row >
                                            <Col span={14}>
                                                <Meta
                                                    avatar={<Avatar size={150} src={ `http://localhost:8000/storage/${ product.image }` }/>}
                                                    title={`Autor: ${product.name}`}
                                                    description={`Descripción: ${product.description}
                                            `}


                                                />
                                            </Col>

                                            <Col span={8} align='center'>

                                                <p>Precio: ${product.price} </p>
                                                <p>Stock: {product.stock} </p>
                                                <p>Venta: {product.sales} </p>
                                                <p>Ubicación: {product.location} </p>

                                                <div>
                                                    <Button icon ={<EditOutlined />}  onClick={ () => handleViewDetails()}type="primary" size={100}> Editar</Button>


                                                    <Button icon={<DeleteOutlined />} type="primary" danger>Eliminar</Button>
                                                </div>





                                            </Col>


                                        </Row>


                                    </Card>


                                </Col>


                            )
                        })
                    }

                </Row>

                <Modal
                    title="Editar Publicación"
                    visible={showModal}
                    confirmLoading={ isSaving }
                    onOk={ () => onUpdate()}
                    onCancel={ () => handleCancel()}
                >
                    <Form {...layout} name="nest-messages" form={ form }>
                        <Form.Item name='name'
                                   label="Nombre"
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese el nombre del producto'
                                       }
                                   ] }
                                   hasFeedback>
                            <Input />
                        </Form.Item>
                        <Form.Item name='description'
                                   label="Descripción"
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Describa su producto'
                                       }
                                   ] }
                                   hasFeedback>
                            <Input />
                        </Form.Item>
                        <Form.Item name='price'
                                   label="Precio"
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese el precio del producto'
                                       }
                                   ] }
                                   hasFeedback>
                            <Input />
                        </Form.Item>

                        <Form.Item name='stock'
                                   label="Stock"
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese la cantidad de productos '
                                       }
                                   ] }
                                   hasFeedback>
                            <Input />
                        </Form.Item>

                        <Form.Item name='sales'
                                   label="Sales"
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese la venta '
                                       }
                                   ] }
                                   hasFeedback>
                            <Input />
                        </Form.Item>

                        <Form.Item name='image'
                                   label='Upload'
                                   valuePropName='fileList'
                                   //getValueFromEvent={ normPhotoFile }
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Sube tu foto'
                                       }
                                   ] }
                        >
                            <Upload name='files'
                                    accept='image/jpeg,image/png'
                                    listType='picture-card'
                                    multiple={ false }
                                    showUploadList={ false }
                                    beforeUpload={ () => false }
                                // onChange={ handleChangePhoto }
                                    fileList={ fileList }
                            >
                                { imageUrl
                                    ? <img src={ imageUrl } alt='Foto' style={ { width: '80px' } } />
                                    : <div>
                                        <PlusOutlined />
                                        <div className='ant-upload-text'>Upload</div>
                                    </div> }
                            </Upload>
                        </Form.Item>
                        <Form.Item name='location'
                                   label="Ubicación"
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese la ciudad'
                                       }
                                   ] }
                                   hasFeedback>
                            <Input />
                        </Form.Item>

                        <Form.Item name='category_id'
                                   label='Categoria'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Selecciona una categoria'
                                       }
                                   ] }
                        >
                            <Select style={ { width: 315 } } onChange={ handleChangeCategory } loading={ !categories }>
                                {
                                    categories && categories.map( ( category, index ) =>
                                        <Option value={ category.id } key={ index } >{` ${ category.name } `}</Option>
                                    )
                                }
                            </Select>
                        </Form.Item>


                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.category_id !== currentValues.category_id}
                        >
                            {({ getFieldValue }) => {
                                return getFieldValue('category_id') === 'Artes plasticas' ? (
                                    <Form.Item name='category_id'
                                               label="Categoria 2"
                                               rules={ [
                                                   {
                                                       required: true,
                                                       message: 'Seleccione'
                                                   }
                                               ] }
                                               hasFeedback
                                    >
                                        <Select
                                            placeholder="Selecciona "
                                        >
                                            {
                                                categories2 && categories2.map( ( category2, index ) =>
                                                    <Option value={ category2.id } key={ index }>{` ${ category2.name } `}</Option>
                                                )
                                            }

                                        </Select>
                                    </Form.Item>
                                ) : null;
                            }}
                        </Form.Item>
                    </Form>
                </Modal>


            </>
        );
    }
;

export default PublicationList;
