
import React, {useEffect, useState} from 'react';
import Routes from '../constants/routes';
import API from '../data/index';
import {Slider, Upload, Switch, Button, Col, Form, Input, message, Row, Typography, Card, Select, DatePicker, Table, Modal, Space } from 'antd';
import {
    LockOutlined,
    UserOutlined,
    MailOutlined,
    EditOutlined,
    FileTextOutlined,
    CalendarOutlined, SettingOutlined, PhoneOutlined, PlusOutlined, DeleteOutlined,

    FacebookFilled, InstagramFilled, TwitterCircleFilled, ChromeFilled, UploadOutlined


} from '@ant-design/icons';
import ErrorList from '../components/ErrorList';
import { translateMessage } from '../utils/translateMessage';
import withoutAuth from '../hocs/withoutAuth';
import '../styles/register.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../providers/Auth';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons/lib';
import 'moment/locale/zh-cn';

//import ImgCrop from 'antd-img-crop';

import ProfilePictureUpload from "../components/ProfilePictureUpload";


const { Text, Title } = Typography;
const { Option } = Select;


function getBase64( file, callback ) {
    console.log( 'file', file );
    const reader = new FileReader();
    reader.addEventListener( 'load', () => callback( reader.result ) );
    reader.readAsDataURL( file );
}

const Register = () => {

    // const auth = useAuth();
    // const router = useRouter();

    // React.useEffect( () => {
    //   const checkAuthentication = () => {
    //     console.log( 'auth.token', auth );
    //     if( auth.token ) {
    //       router.push( Routes.HOME );
    //     }
    //   };
    //
    //   checkAuthentication();
    // }, [ auth ] );

    const [ imageUrl, setImageUrl ] = useState( null );
    const [ fileList, setFileList ] = useState( [] );
    const [ isSaving, setIsSaving ] = useState( false );


    const [ form ] = Form.useForm();
    const { setAuthenticated, setCurrentUser } = useAuth();
    const [countries,setCountries]= useState([]);
    const [province,setProvince]= useState([]);
    const [currentProvince,setCurrentProvince]= useState('');
    const [city,setCity]= useState([]);
    const [currentCity,setCurrentCity]= useState('');
    const [town,setTown]= useState([]);

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
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
        console.log( 'xdd', fileList );


        return e && [ e.file ];
    };


    useEffect(()=>{
        const getCountries = async () => {
            const countriesResponse = await fetch('https://restcountries.eu/rest/v2/all');
            const countriesJson = await countriesResponse.json();

            console.log('countriesJson', countriesJson);
            setCountries( countriesJson );
        };
        getCountries();
        getProvince();

    },[]);


    const getProvince = async () => {
        const provinceResponse = await fetch('https://gist.githubusercontent.com/JosueGarrido/bbab87a7577e96d08095c7f8fe0a0519/raw/4b68c7c9fea5ddeb0602bc8f706b04aca8978aa2/provincias.json');
        const provinceJson = await provinceResponse.json();

        console.log('provincejson',Object.values(provinceJson));
        setProvince( Object.values(provinceJson));
    };
    useEffect(()=>{

        const getCity = async () => {
            if (currentProvince === ''){
                console.log('Seleccione una provincia');

            } else {
                const cityResponse = await fetch('https://gist.githubusercontent.com/JosueGarrido/bbab87a7577e96d08095c7f8fe0a0519/raw/4b68c7c9fea5ddeb0602bc8f706b04aca8978aa2/provincias.json');
                const cityJson = await cityResponse.json();
                const example = Object.values(cityJson[currentProvince].cantones);

                console.log('cityjson', example);
                setCity(example);
            }
        };
        getCity();
    },[currentProvince]);


    useEffect(()=>{
        const getParroquia = async () => {
            if (currentProvince === '') {
                console.log('Seleccione una parroquia');

            } else {
                const cityResponse = await fetch('https://gist.githubusercontent.com/JosueGarrido/bbab87a7577e96d08095c7f8fe0a0519/raw/4b68c7c9fea5ddeb0602bc8f706b04aca8978aa2/provincias.json');
                const cityJson = await cityResponse.json();
                const example = Object.values(cityJson[currentProvince].cantones);
                console.log('parroquiasjson', Object.values(example[currentCity].parroquias));
                setTown(Object.values(example[currentCity].parroquias));

            }
        };
        getParroquia();
    },[currentCity]);

    const handleChangeProvince = ( province ) => {
        //const example = province
        const x = parseInt(province) + 1
        const example = x.toString()
        setCurrentProvince( example );
        console.log('examplexdd', (example) );


    };

    const handleChangeCity = ( city ) => {

        const example2 = city;
        console.log('example2',( city ));
        setCurrentCity( example2 );

    };

    function onCheck(checked) {
        console.log(`switch to ${checked}`);
    }

    const onFinish = async( userData ) => {
        console.log( 'Received values of form: ', userData );

        const data = new FormData();
        data.append( 'name', userData.name );
        data.append( 'last_name', userData.last_name );
        data.append( 'email', userData.email );
        data.append( 'email_verified_at', userData.email_verified_at );
        data.append( 'password', userData.password );
        data.append( 'password_confirmation', userData.password_confirmation );
        data.append( 'identity', userData.identity );
        data.append( 'birthday', userData.birthday );
        data.append( 'phone', userData.phone );
        data.append( 'profile_picture', userData.profile_picture[0] );
        data.append( 'location', userData.location );
        data.append( 'province', userData.province );
        data.append( 'city', userData.city );
        data.append( 'town', userData.town );
        data.append( 'culture', userData.culture );
        data.append( 'disability', userData.disability === true ? 1 : 0);
        data.append( 'stage_name', userData.stage_name );
        data.append( 'field_cultural', userData.field_cultural );
        data.append( 'secondary_activity', userData.secondary_activity );
        data.append( 'education_level', userData.education_level );
        data.append( 'career_name', userData.career_name );
        data.append( 'studies_institution', userData.studies_institution );
        data.append( 'social_networks', userData.social_networks );


        try {
            const user = await API.post( '/register-client', data );

            console.log( 'User', user );
            localStorage.setItem( 'login', JSON.stringify( true ) ); // this is to sync auth state in local storage
            Cookies.set( 'token', user.data.token, { expires: 1 } );
            API.headers[ 'Authorization' ] = 'Bearer ' + user.data.token; // start sending authorization header
            delete user.data.token;
            setCurrentUser( user.data );
            setAuthenticated( true );
        } catch( e ) {
            console.error( 'No se pudo registrar el usuario', e );
            setAuthenticated( false );
            const errorList = e.error && <ErrorList errors={ e.error } />;
            message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
        }
    };

    return (

        <>


            <Title style={ {marginTop:15, textAlign: 'center' } }>REGISTRO DE CLIENTES</Title>


            <Row justify='center' className='login'>
                <Col span={ 24 }>
                    <Card title="FORMULARIO DE REGISTRO DE INFORMACIÓN: CLIENTES"  extra="*Información obligatoria" >
                        <Form name='register-form'
                              {...formItemLayout}
                              className='register-form'
                              initialValues={ {
                                  email: '',
                                  password: ''
                              } }
                              onFinish={ onFinish }
                        >
                            <Card style={{ margin: 10 }} type="inner" title="INFORMACIÓN PERSONAL"  >
                                <Form.Item name='identity'
                                           label="Cédula de Identidad"
                                           extra="Por favor ingrese su cédula de identidad."
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa su cédula de identidad'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input prefix={<UserOutlined />} placeholder='Cédula de Identidad' />
                                </Form.Item>
                                <Form.Item name='name'
                                           label="Nombre"
                                           extra="Por favor ingrese sus nombre."
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tus nombre'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input prefix={ <UserOutlined /> } placeholder='Nombres' />

                                </Form.Item>

                                <Form.Item name='last_name'
                                           label="Apellido"
                                           extra="Por favor ingrese sus apellidos."
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu apellido'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input prefix={ <UserOutlined /> } placeholder='Apellidos' />
                                </Form.Item>
                                <Form.Item name='birthday'
                                           label="Fecha de Nacimiento"
                                           extra="Por favor ingrese su fecha de nacimiento ej:1992-07-15."
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu fecha de nacimiento.'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input prefix={ <CalendarOutlined /> } placeholder='YYYY-MM-DD' />
                                </Form.Item>

                                <Form.Item name='culture'
                                           label="¿Cómo se autoidentifica según su cultura?"
                                           extra="Por favor ingrese como se autoidentifica."
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingrese como se autoidentifica'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Select
                                        placeholder="Ingrese como se autoidentifica"
                                    >
                                        <Option value="INDIGENA">INDÍGENA</Option>
                                        <Option value="AFROECUATORIANO/A O AFRODESCENDIENTE">AFROECUATORIANO/A O AFRODESCENDIENTE</Option>
                                        <Option value="NEGRO/A">NEGRO/A</Option>
                                        <Option value="MULATO/A">MULATO/A</Option>
                                        <Option value="MONTUBIO/A">MONTUBIO/A</Option>
                                        <Option value="MESTIZO/A">MESTIZO/A</Option>
                                        <Option value="BLANCO/A">BLANCO/A</Option>
                                    </Select>

                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, currentValues) => prevValues.culture !== currentValues.culture}
                                >
                                    {({ getFieldValue }) => {
                                        return getFieldValue('culture') === 'INDIGENA' ? (
                                            <Form.Item name='nationality'
                                                       label="Elija su nacionalidad"
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Elija su nacionalidad'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Select
                                                    placeholder="Elija su nacionalidad"
                                                >
                                                    <Option value="Awa">Awa</Option>
                                                    <Option value="Chachis">Chachis</Option>
                                                    <Option value="Épera">Épera</Option>
                                                    <Option value="Tsáchilas">Tsáchilas</Option>
                                                    <Option value="Achuar">Achuar</Option>
                                                    <Option value="Andoa">Andoa</Option>
                                                    <Option value="Cofán">Cofán</Option>
                                                    <Option value="Huaorani">Huaorani</Option>
                                                    <Option value="Secoya">Secoya</Option>
                                                    <Option value="Shiwiar">Shiwiar</Option>
                                                    <Option value="Shuar">Shuar</Option>
                                                    <Option value="Siona">Siona</Option>
                                                    <Option value="Zápara">Zápara</Option>
                                                    <Option value="Kichwa">Kichwa</Option>

                                                </Select>
                                            </Form.Item>
                                        ) : null;
                                    }}
                                </Form.Item>
                                <Form.Item name='disability'
                                           initialValue= {false}
                                           label="¿Tiene usted algún tipo de discapacidad?"
                                           extra="Por favor indique si tiene algún tipo de discapacidad."
                                           hasFeedback
                                >

                                    <Switch checkedChildren="SI" unCheckedChildren="NO"  onChange={onCheck}/>

                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, currentValues) => prevValues.disability !== currentValues.disability}
                                >
                                    {({ getFieldValue }) => {
                                        return getFieldValue('disability') === true ? (
                                            <Form.Item name='disability_porcentage'
                                                       label="Porcentaje de discapacidad"
                                                       initialValue={null}
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingresa tu porcentaje de discapacidad'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Slider
                                                    defaultValue={30}
                                                    min={30}
                                                    max={80}
                                                />
                                            </Form.Item>
                                        ) : null;
                                    }}
                                </Form.Item>

                                <Form.Item name='profile_picture'
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


                            </Card>

                            <Card style={{ margin: 10 }} type="inner" title="INFORMACIÓN DOMICILIARIA"  >
                                <Form.Item name='location'
                                           label="País de domicilio"
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu localidad'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Select
                                        placeholder="Selecciona el país en el que resides"

                                    >
                                        {
                                            countries.map((countries,index)=><Option key={index} value={countries.name} >{countries.name}</Option>)
                                        }
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, currentValues) => prevValues.location !== currentValues.location}
                                >
                                    {({ getFieldValue }) => {
                                        return getFieldValue('location') === 'Ecuador' ? (
                                            <Form.Item name='province'
                                                       label="Provincia de domicilio"
                                                       initialValue={null}
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingresa tu localidad'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Select
                                                    placeholder="Selecciona la provincia en la que resides"
                                                    onChange={handleChangeProvince}
                                                >
                                                    {
                                                        province.map((province,i)=><Option key={i} value={province.id} >{province.provincia}</Option>)
                                                    }

                                                </Select>
                                            </Form.Item>
                                        ) : null;
                                    }}
                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, currentValues) => prevValues.province !== currentValues.province}
                                >
                                    {({ getFieldValue }) => {
                                        return getFieldValue('province') === (parseInt(currentProvince -1).toString()) ? (
                                            <Form.Item name='city'
                                                       label="Cantón de domicilio"
                                                       initialValue={null}
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingresa tu localidad'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Select
                                                    placeholder="Selecciona la ciudad en la que resides"
                                                    onChange={handleChangeCity}
                                                >
                                                    {
                                                        city.map((city,i)=><Option key={i} value={city.id} >{city.canton}</Option>)
                                                    }
                                                </Select>
                                            </Form.Item>
                                        ) : null;
                                    }}
                                </Form.Item>
                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, currentValues) => prevValues.city !== currentValues.city}
                                >
                                    {({ getFieldValue }) => {
                                        return getFieldValue('city') === currentCity ? (
                                            <Form.Item name='town'
                                                       label="Parroquia de domicilio"
                                                       initialValue={null}
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingresa tu canton'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Select
                                                    placeholder="Selecciona la parroquia en la que resides"
                                                >
                                                    {
                                                        town.map((town,i)=><Option key={i} value={town} >{town}</Option>)
                                                    }
                                                </Select>
                                            </Form.Item>
                                        ) : null;
                                    }}
                                </Form.Item>
                                <Form.Item name='direction'
                                           label="Dirección de domicilio"
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu dirección de domicilio.'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input.TextArea prefix={ <EditOutlined /> } placeholder='Dirección de domicilio' />
                                </Form.Item>
                                <Form.Item name='reference'
                                           label="Referencia domiciliaria"
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu referencia domiciliaria.'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input prefix={ <EditOutlined /> } placeholder='Referencia domiciliaria' />
                                </Form.Item>

                            </Card>

                            <Card style={{ margin: 10 }} type="inner" title="INFORMACIÓN DE CONTACTO"  >
                                <Form.Item name='phone'
                                           label="Número de Telefono"
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu número de telefono'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input addonBefore={<PhoneOutlined />} placeholder='Número de telefono' />


                                </Form.Item>

                                <Form.Item name='whatsapp'
                                           initialValue= {false}
                                           label="¿Tiene usted whatsapp?"
                                           extra="Por favor indique si tiene el chat de whatsapp disponible."
                                           hasFeedback
                                >

                                    <Switch checkedChildren="SI" unCheckedChildren="NO"  onChange={onCheck}/>

                                </Form.Item>
                                <Form.Item name='email'
                                           label="Correo electrónico"
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu correo electrónico'
                                               },
                                               {
                                                   type: 'email',
                                                   message: 'Ingresa un correo válido'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input addonBefore='@' placeholder='Correo Electrónico' />
                                </Form.Item>

                                <Form.Item name='email_verified_at'
                                           label="Verificar correo electrónico"
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu nombre de usuario'
                                               },
                                               {
                                                   type: 'email',
                                                   message: 'Ingresa un correo válido'
                                               },
                                               ( { getFieldValue } ) => ({
                                                   validator( rule, value ) {
                                                       if( !value || getFieldValue( 'email' ) === value ) {
                                                           return Promise.resolve();
                                                       }
                                                       return Promise.reject( 'Los correos no coinciden' );
                                                   },
                                               }),
                                           ] }
                                           hasFeedback
                                >
                                    <Input addonBefore='@' placeholder='Verificar Email' />
                                </Form.Item>

                            </Card>

                            <Card style={{ margin: 10 }} type="inner" title="Datos de acceso" >

                                <Form.Item name='identity'
                                           label="Cédula de Identidad"
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa su cédula de identidad'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input addonBefore={<UserOutlined />} placeholder='Cédula de Identidad' disabled/>
                                </Form.Item>

                                <Form.Item name='password'
                                           label="Contraseña"
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingrese su contraseña'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input.Password addonBefore={<LockOutlined />}
                                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                    placeholder='Contraseña' />
                                </Form.Item>

                                <Form.Item name='password_confirmation'
                                           label="Confirmar Contraseña"
                                           dependencies={ [ 'password' ] }
                                           hasFeedback
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Confirma tu Contraseña',
                                               },
                                               ( { getFieldValue } ) => ({
                                                   validator( rule, value ) {
                                                       if( !value || getFieldValue( 'password' ) === value ) {
                                                           return Promise.resolve();
                                                       }
                                                       return Promise.reject( 'Las contraseñas no coinciden' );
                                                   },
                                               }),
                                           ] }
                                >
                                    <Input.Password addonBefore={<LockOutlined />}
                                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                    placeholder='Confirma tu clave' />
                                </Form.Item>


                            </Card>


                            <Form.Item>
                                <Button type='primary' htmlType='submit' className='login-form-button'>
                                    Registrarme
                                </Button>
                                <div><Link to={ Routes.LOGIN }>Ya tengo una cuenta</Link></div>
                            </Form.Item>


                        </Form>
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default withoutAuth( Register );
