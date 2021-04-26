import React, {useEffect, useState} from 'react';
import Routes from '../constants/routes';

import API from '../data/index';
import {Slider, Upload, Switch, Button, Col, Form, Input, message, Row, Typography, Card, Select, DatePicker, Table, Modal, Space, Checkbox } from 'antd';
import Header2 from '../components/Header2';

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


    const onCreate1 = values1 => {

        console.log( 'Received values of form: ', values1 );

    }
    const dataReco = [
        {
            key: '3',
            reco_type: 'RECONOCIMIENTO',
            reco_name: 'Ejemplo1',
            reco_description: 'Mi reconocimiento',
            reco_place:'Quito',
        },
    ];




    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }
    const [ list, setList ] = useState( [{reco: '',place:''}] );
    const [ visible1, setVisible1 ] = useState( false );
    const [ visible2, setVisible2 ] = useState( false );
    const [ visible3, setVisible3 ] = useState( false );
    const [ visible4, setVisible4 ] = useState( false );
    const [ visible5, setVisible5 ] = useState( false );
    const [ visible6, setVisible6 ] = useState( false );

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
    const columnsReco = [
        {
            title: 'Tipo de reconocimiento',
            dataIndex: 'reco_type',
        },
        {
            title: 'Nombre',
            dataIndex: 'reco_name',
        },
        {
            title: 'Descripción',
            dataIndex: 'reco_description',
        },
        {
            title: 'Lugar',
            dataIndex: 'reco_place',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <Space size="middle">
                <Button icon={<EditOutlined />} onClick={ () => {
                    setVisible1( true );
                } }/>
                <Button icon={<DeleteOutlined />}/>
            </Space>,

        },
    ]
    const reconocimiento = {
        data: dataReco,
        form: columnsReco,
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


    const handleAddReconocimiento = () => {
        const name = document.querySelector( '#reco_name' ).value;
        const place = document.querySelector( '#reco_place' ).value;

        setList(list)
        console.log('name',list);
        document.querySelector( '#reco_name' ).value = '';
        document.querySelector( '#reco_place' ).value='';
    };

    const columnsLink = [
        {
            title: 'Descripción Corta del Enlace',
            dataIndex: 'link_description',
        },
        {
            title: 'Enlace Web de la actividad',
            dataIndex: 'link_type',
        }
    ]

    const columnsActivity = [
        {
            title: 'Ámbito principal de la actividad cultural',
            dataIndex: 'field_cultural',
        },

        {
            title: 'Tipo actividad secundaria',
            dataIndex: 'secondary_activity',
        }
    ]

    const columnsProject = [
        {
            title: 'Nombre del proyecto',
            dataIndex: 'name_project',
        },
        {
            title: 'Rol en el proyecto',
            dataIndex: 'rol_project',
        },
        {
            title: 'Descripción',
            dataIndex: 'reco_description',
        },
        {
            title: 'Lugar',
            dataIndex: 'place_project',
        },
        {
            title: 'Fecha/Tiempo',
            dataIndex: 'time_project',
        }
    ]
    const columnsFormal = [
        {
            title: 'Institución',
            dataIndex: 'name_institute',
        },
        {
            title: 'Título',
            dataIndex: 'name_title',
        },
        {
            title: 'Área',
            dataIndex: 'name_area',
        },
        {
            title: 'Tipo',
            dataIndex: 'type',
        },

    ]
    const columnsInconclusa = [
        {
            title: 'Tipo de formación',
            dataIndex: 'type_formation',
        },
        {
            title: 'Nombre de la carrera',
            dataIndex: 'name_career',
        },
        {
            title: 'Centro de estudios',
            dataIndex: 'studies_center',
        },

    ]


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
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
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
        data.append( 'country', userData.country );
        data.append( 'province', userData.province );
        data.append( 'city', userData.city );
        data.append( 'town', userData.town );
        data.append('live',userData.live)
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
            const user = await API.post( '/register', data );

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
           <Header2/>

            <Title style={ {marginTop:15, textAlign: 'center' } }>REGISTRO DE ARTISTAS</Title>


            <Row justify='center' className='login'>
                <Col span={ 24 }>
                    <Card title="FORMULARIO DE REGISTRO DE INFORMACIÓN: ARTISTAS"  extra="*Información obligatoria" >
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
                                <Form.Item name='country'
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
                                    shouldUpdate={(prevValues, currentValues) => prevValues.country !== currentValues.country}
                                >
                                    {({ getFieldValue }) => {
                                        return getFieldValue('country') === 'Ecuador' ? (
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

                            <Card style={{ margin: 10 }} type="inner" title="INFORMACIÓN CULTURAL">

                                <Form.Item name='check_artist_name'
                                           initialValue='0'
                                           label="¿Tiene usted nombre artistico?"
                                           extra="Por favor indique si tiene algún nombre artistico."
                                           hasFeedback
                                >
                                    <Switch checkedChildren="SI" unCheckedChildren="NO"/>
                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, currentValues) => prevValues.check_artist_name !== currentValues.check_artist_name}
                                >
                                    {({ getFieldValue }) => {
                                        return getFieldValue('check_artist_name') === true ? (
                                            <Form.Item name='stage_name'
                                                       label="Nombre artístico"
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingresa tu nombre artistico'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Input prefix={ <UserOutlined /> } placeholder='Ingresa tu nombre artistico' />
                                            </Form.Item>
                                        ) : null;
                                    }}
                                </Form.Item>

                                <Card style={{ margin: 10 }} type="inner" title="Ámbito principal de la actividad cultural">
                                    <Form.Item name='field_cultural'
                                               label="Ámbito principal de la actividad cultural"
                                               extra="Seleccione el ámbito principal de la actividad cultural vinculado com la persona"
                                               rules={ [
                                                   {
                                                       required: true,
                                                       message: 'Seleccione el ámbito'
                                                   }
                                               ] }
                                               hasFeedback
                                    >
                                        <Select
                                            placeholder="Seleccione el ámbito"
                                        >
                                            <Option value="ARTES ESCÉNICAS">ARTES ESCÉNICAS</Option>
                                            <Option value="ARTES PLÁSTICAS">ARTES PLÁSTICAS</Option>
                                            <Option value="ARTES LITERARIAS">ARTES LITERARIAS </Option>
                                            <Option value="ARTES AUDIOVISUALES">ARTES AUDIOVISUALES</Option>
                                            <Option value="ARTES MUSICALES">ARTES MUSICALES </Option>
                                            <Option value="ARTESANÍAS">ARTESANÍAS</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item name='secondary_activity'
                                               label="Tipo de actividad secundaria"
                                               extra="Seleccione el tipo de actividad secundaria del ámbito que selecciono con aterioridad"
                                               rules={ [
                                                   {
                                                       required: true,
                                                       message: 'Seleccione el tipo de actividad'
                                                   }
                                               ] }
                                               hasFeedback
                                    >
                                        <Select
                                            placeholder="Seleccione la actividad"
                                        >
                                            <Option value="PRODUCTOR">PRODUCTOR</Option>
                                            <Option value="GESTOR CULTURAL">GESTOR CULTURAL </Option>
                                            <Option value="INVESTIGADOR ">INVESTIGADOR</Option>
                                            <Option value="TÉCNICO ">TÉCNICO</Option>
                                            <Option value="DOCENTE">DOCENTE</Option>
                                            <Option value="OTRO TRABAJADOR DE LA CULTURA ">OTRO TRABAJADOR DE LA CULTURA </Option>
                                        </Select>
                                    </Form.Item>

                                </Card>
                            </Card>





                            <Card style={{ margin: 10 }} type="inner" title="TRAYECTORIA ARTÍSTICO / CULTURAL">


                                <Card style={{ margin: 10 }} type="inner" title="TRAYECTORIA"  >

                                    <Form.Item name='start_date'
                                               label="Año de inicio de su actividad artístico cultural"
                                               extra="Por favor ingresa el año de inicio de su actividad artístico cultural."
                                               rules={ [
                                                   {
                                                       required: true,
                                                       message: 'Ingresa el año de inicio de su actividad artístico cultural.'
                                                   }
                                               ] }
                                               hasFeedback
                                    >
                                        <Input prefix={ <CalendarOutlined /> } placeholder='YYYY-MM-DD' />

                                    </Form.Item>
                                    <Form.Item name='trajectory_description'
                                               label="Descripción de su trayectoria"
                                               extra="Por favor describe tu trayectoria artístico cultural, poniendo énfasis en el lapso
                                 de tiempo y lugares en los que ha desarrollado su actividad cultural. Adicionalmente debe
                                 tener en cuenta que su trayectoria debe ir acorde al ÁMBITO y TIPO DE ACTIVIDAD que registró."


                                               rules={ [
                                                   {
                                                       required: true,
                                                       message: 'Por favor describe tu trayectoria artístico cultural.'
                                                   }
                                               ] }
                                               hasFeedback
                                    >
                                        <Input.TextArea prefix={ <EditOutlined /> } placeholder='Descripción' />

                                    </Form.Item>
                                </Card>


                                <Card style={{ margin: 10 }} type="inner" title="RECONOCIMIENTOS">
                                    <Form.Item
                                        name='reco_type'
                                        label='Tipo de Reconocimiento'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el tipo de reconocimiento'
                                            }
                                        ] }
                                    >
                                        <Select placeholder="Selecciona el tipo de reconocimiento">
                                            <Option value="male">GALARDÓN / PREMIO</Option>
                                            <Option value="female">RECONOCIMIENTO</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name='reco_name'
                                        label='Nombre de Reconocimiento'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el nombre del reconocimiento'
                                            }
                                        ] }>
                                        <Input type='textarea' id='reco_name'/>
                                    </Form.Item>

                                    <Form.Item
                                        name='reco_description'
                                        label='Descripción'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa la descripción del reconocimiento'
                                            }
                                        ] }>
                                        <Input type='textarea' />
                                    </Form.Item>

                                    <Form.Item
                                        name='reco_place'
                                        label='Lugar'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el lugar del reconocimiento'
                                            }
                                        ] }>
                                        <Input type='textarea' id='reco_place'/>
                                    </Form.Item>

                                    <Form.Item
                                        name='reco_year'
                                        label='Año'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el año del reconocimiento'
                                            }
                                        ] }
                                    >
                                        <Space direction="vertical">
                                            <DatePicker picker="year" bordered={false} placeholder='Año'/>
                                        </Space>

                                    </Form.Item>

                                </Card>

                                <Card style={{ margin: 10 }} type="inner" title="PROYECTOS CULTURALES">
                                    <Form.Item
                                        name='name_project'
                                        label='Nombre del Proyecto'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el nombre del proyecto'
                                            }
                                        ] }
                                    >
                                        <Input type='textarea' />
                                    </Form.Item>
                                    <Form.Item
                                        name='rol_project'
                                        label='Rol en el Proyecto'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el rol en el proyecto'
                                            }
                                        ] }>
                                        <Input type='textarea' />
                                    </Form.Item>

                                    <Form.Item
                                        name='description_project'
                                        label='Descripción'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa la descripción del proyecto'
                                            }
                                        ] }>
                                        <Input type='textarea' />
                                    </Form.Item>

                                    <Form.Item
                                        name='place_project'
                                        label='Lugar'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el lugar del proyecto'
                                            }
                                        ] }>
                                        <Input type='textarea' />
                                    </Form.Item>

                                    <Form.Item
                                        name='year_project'
                                        label='Año'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el año del proyecto'
                                            }
                                        ] }
                                    >
                                        <Space direction="vertical">
                                            <DatePicker picker="year" bordered={false} placeholder='Año'/>
                                        </Space>

                                    </Form.Item>
                                </Card>

                            </Card>

                            <Card style={{ margin: 10 }} type="inner" title="FORMACIÓN Y CAPACITACIÓN">

                                <Card style={{ margin: 10 }} type="inner" title="EDUCACIÓN FORMAL INCONCLUSA O EN CURSO">
                                    <Form.Item
                                        name='education_type'
                                        label='Tipo de Intrucción'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el tipo de Intrucción'
                                            }
                                        ] }
                                    >
                                        <Select placeholder="Selecciona el tipo de formación">
                                            <Option value="PRIMARIA">PRIMARIA</Option>
                                            <Option value="SECUNDARIA">SECUNDARIA</Option>
                                            <Option value="TERCER NIVEL">TERCER NIVEL</Option>
                                            <Option value="CUARTO NIVEL">CUARTO NIVEL</Option>
                                            <Option value="DOCTORADO">DOCTORADO</Option>
                                            <Option value="OTROS">OTROS</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name='education_level'
                                        label='Tipo de Formación'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el tipo de formación'
                                            }
                                        ] }
                                    >
                                        <Select placeholder="Selecciona el tipo de formación">
                                            <Option value="INCONCLUSO">INCONCLUSO</Option>
                                            <Option value="EN CURSO">EN CURSO</Option>
                                            <Option value="EGRESADO">EGRESADO</Option>
                                            <Option value="FINALIZADO">FINALIZADO</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name='career_name'
                                        label='Nombre de la carrera'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa el nombre de la carrer'
                                            }
                                        ] }>
                                        <Input type='textarea' />
                                    </Form.Item>

                                    <Form.Item
                                        name='studies_institution'
                                        label='Centro de estudios'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa la centro de estudios'
                                            }
                                        ] }>
                                        <Input type='textarea' />
                                    </Form.Item>

                                </Card>
                            </Card>


                            <Card style={{ margin: 10 }} type="inner" title="ENLACES WEB"  >

                                <Card style={{ margin: 10 }} type="inner" title="Registro de enlaces"  >

                                    <Form.Item
                                        name='link_description'
                                        label='Descripción'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa descripcion corta'
                                            }
                                        ] }>
                                        <Input type='textarea' />
                                    </Form.Item>

                                    <Form.Item
                                        name='live'
                                        label='Enlace web'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa enlace de video en vivo'
                                            }
                                        ] }>
                                        <Input type='textarea' />
                                    </Form.Item>

                                </Card>



                                <Card style={{ margin: 10 }} type="inner" title="Redes Sociales" >

                                    <Form.Item name='social_networks'
                                               label="Facebook"

                                               hasFeedback
                                    >
                                        <Input addonBefore={<FacebookFilled />} placeholder='Facebook' />

                                    </Form.Item>
                                    <Form.Item name='instagram'
                                               label="Instagram"

                                               hasFeedback
                                    >
                                        <Input addonBefore={<InstagramFilled />} placeholder='Instagram' />

                                    </Form.Item>
                                    <Form.Item name='twitter'
                                               label="Twitter"

                                               hasFeedback
                                    >
                                        <Input addonBefore={<TwitterCircleFilled />} placeholder='Twitter' />

                                    </Form.Item>
                                    <Form.Item name='otro'
                                               label="Otro"

                                               hasFeedback
                                    >
                                        <Input addonBefore={<ChromeFilled />} placeholder='Otro' />

                                    </Form.Item>
                                    <Text type="secondary">Ingresar los links de internet que nos lleven a visualizar su perfil personal
                                        (o de la agrupación que pertenece) en las distintas redes sociales detalladas.
                                        Esta información servirá para crear un catálogo de artistas y gestores culturales y sus datos
                                        son importantes para contactarlos.</Text>

                                </Card>
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

                            <div>
                               <a href="">
                                   <Checkbox onChange={onChange}>Terminos y Condiciones</Checkbox>
                               </a>
                            </div>

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
