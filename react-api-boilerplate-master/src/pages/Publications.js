import React, { useState } from 'react';
import API from '../data';
import { translateMessage } from '../utils/translateMessage';
import PublicationList from '../components/PublicationList';

import {
    Upload,
    Form,
    Input,
    InputNumber,
    Modal,
    Button,
    message,
    Skeleton,
    Row,
    Col,
    Divider,
    Select
} from 'antd';
import { useAuth } from '../providers/Auth';
import {CarryOutOutlined, PlusOutlined} from '@ant-design/icons';
import { mutate } from 'swr';
import Cookies from "js-cookie";
import ErrorList from "../components/ErrorList";
import {usePublicationList} from "../data/usePublicationList";
import {useCategories} from "../data/useCategories";
import {useCategories2} from "../data/useCategories2";
import {useCategories3} from "../data/useCategories3";
import {useCategories4} from "../data/useCategories4";
import {Card} from "./Antd";



/**
 * Fetch Appointments from DB
 */
export const fetchAppointments = async() => {
    // console.log( `Show data fetched. Appointments: ${ JSON.stringify( articles ) }` );

    return await API.get( '/products' );
};


/**
 * Appointments list page
 * @param props
 * @constructor
 */
const {Option} = Select;
function getBase64( file, callback ) {
    console.log( 'file', file );
    const reader = new FileReader();
    reader.addEventListener( 'load', () => callback( reader.result ) );
    reader.readAsDataURL( file );
}

const Publications = ( {
                           update,
                           //onSubmit,
                           onCancel,

                       } ) => {

    const [ submitting, setSubmitting ] = useState( false );
    const { categories, isLoading, isError } = useCategories();
    const { categories2, isLoading2, isError2 } = useCategories2();
    const { categories3, isLoading3, isError3 } = useCategories3();
    const { categories4, isLoading4, isError4 } = useCategories4();
    const [ form ] = Form.useForm();
    const [ isSaving, setIsSaving ] = useState( false );
    const [ imageUrl, setImageUrl ] = useState( null );
    const [ fileList, setFileList ] = useState( [] );
    const onCreate = async values => {
        console.log( 'Received values of form: ', values );

        form.validateFields()
            .then( async( values ) => {
                console.log( 'values', values );
                setIsSaving( true );

                // use form data to be able to send a file to the server
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
                    await API.post( '/products', data ); // post data to server
                    form.resetFields();
                    setFileList( [] );
                    setImageUrl( null );
                    setIsSaving( false );
                    await mutate('/products');
                    //onSubmit();
                } catch( e ) {
                    setIsSaving( false );

                    const errorList = e.error && <ErrorList errors={ e.error } />;
                    message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
                }
            } )
            .catch( info => {
                console.log( 'Validate Failed:', info );
            } );

    };

    const [ visible, setVisible ] = useState( false );
    const [ showModal, setShowModal ] = useState( false );
    // const doctors = DoctorList();



    const auth = useAuth();

    // console.log( 'categories', categories );

    /**
     * Executed after the form is submitted
     * Fetches all the articles and refreshes the list
     * Closes the modal
     */
    const afterCreate = async() => {
        try {
            // show skeleton
            await mutate( '/products', async products => {
                return { data: [ {}, ...products.data ] };
            }, false );

            await mutate( '/products' );
            setVisible( false ); // close the modal
        } catch( error ) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            );

            message.error( translateMessage( error.message ) );
        }
    };

    const normPhotoFile = e => {
        console.log( 'Upload event:', e );
        const file = e.file;
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if( !isJpgOrPng ) {
            message.error( 'La imagen debe tener formato JPG o PNG' );
            setFileList( [] );
            setImageUrl( null );
            return null;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if( !isLt2M ) {
            message.error( 'La imagen debe ser menor a 2MB' );
            setFileList( [] );
            setImageUrl( null );
            return null;
        }

        if( file.status === 'removed' ) {
            setFileList( [] );
            setImageUrl( null );
            return null;
        }

        getBase64( e.file, imageUrl => setImageUrl( imageUrl ) );

        if( Array.isArray( e ) ) {
            return e;
        }

        console.log( 'e.file', e.file );
        console.log( 'e.fileList', e.fileList );
        setFileList( [ file ] );

        return e && [ e.file ];
    };

    const handleViewDetails = () => {
        setShowModal(true);
    }
    const handleCancel = () => {
        setShowModal(false);
    }

    // const handleOk = () => {
    //     htmlType='submit' loading={ submitting }
    // }


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };


    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    const handleChangeCategory = () => {};
    return (

        <div>
            <Button icon={<CarryOutOutlined />} onClick={ () => handleViewDetails()} type="primary">Crear Publicación</Button>

            <Modal
                title="Crear Publicación"
                visible={showModal}
                confirmLoading={ isSaving }
                onOk={ () => onCreate()}
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
                               getValueFromEvent={ normPhotoFile }
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


                            return getFieldValue('category_id' ) === categories.id ?
                                (
                                    null
                                ):
                                <Form.Item name='category2_id'
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
                        }}
                    </Form.Item>

                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.category2_id !== currentValues.category2_id}
                    >


                        {({ getFieldValue }) => {


                            return getFieldValue('category2_id' ) === categories2.id ?
                                (
                                    null
                                ):
                                <Form.Item name='category3_id'
                                           label="Categoria 3"
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
                                            categories3 && categories3.map( ( category3, index ) =>
                                                <Option value={ category3.id } key={ index }>{` ${ category3.name } `}</Option>
                                            )
                                        }

                                    </Select>
                                </Form.Item>
                        }}
                    </Form.Item>

                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.category3_id !== currentValues.category3_id}
                    >


                        {({ getFieldValue }) => {


                            return getFieldValue('category3_id' ) === categories3.id ?
                                (
                                    null
                                ):
                                <Form.Item name='category4_id'
                                           label="Categoria 4"
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
                                            categories4 && categories4.map( ( category4, index ) =>
                                                <Option value={ category4.id } key={ index }>{` ${ category4.name } `}</Option>
                                            )
                                        }

                                    </Select>
                                </Form.Item>
                        }}
                    </Form.Item>

                </Form>


            </Modal>


            <Divider/>

            <PublicationList />
        </div>
    );
};


export default Publications;
