import React from 'react';
import Routes from '../constants/routes';
import {useAuth} from '../providers/Auth';
import {Checkbox, Col, Form, Input, Row, Button, message} from 'antd';
import {LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons/lib';
import API from '../data';
import withoutAuth from '../hocs/withoutAuth';
import Cookies from 'js-cookie';
import {translateMessage} from '../utils/translateMessage';
import {Link} from 'react-router-dom';
import '../styles/login.css';
import ErrorList from '../components/ErrorList';
import Header2 from '../components/Header2';
import letravender from "../images/ImgPages/vender-letras.png";
import logoVertical from "../images/logoVertical.png";


const Login = () => {
    const {setAuthenticated, setCurrentUser} = useAuth();

    const onFinish = async (userData) => {

        try {
            const response = await API.post('/login', {
                email: userData.username,
                password: userData.password
            });
            console.log('response login', response);

            localStorage.setItem('login', JSON.stringify(true)); // this is to sync auth state in local storage
            Cookies.set('token', response.data.token, {expires: 1});
            API.headers['Authorization'] = 'Bearer ' + response.data.token; // start sending authorization header
            setCurrentUser(response.data.user);
            setAuthenticated(true);
        } catch (e) {
            console.error('No se pudo iniciar sesión', e.message);
            setAuthenticated(false);
            const errorList = e.error && <ErrorList errors={e.error}/>;
            message.error(<>{translateMessage(e.message)}{errorList}</>);
        }
    };
    let registro;
    return (
        <>
            <div className="imagesPageHBVender">
                <Row className='header-wrapper-vender'>

                    <Row type='flex' justify='space-between' align='bottom'>
                        <Col span={7} align='left' className='main-menu'>


                        </Col>
                        <Col span={10} align='center'>
                            <a href={Routes.HOME}>
                                <img className='logo' src={letravender}/>
                            </a>
                        </Col>
                        <Col span={1}>

                        </Col>
                        <Col span={3}>
                            <nav>
                                <ul>
                                    <li><a href="#"> <i className="down"></i></a>

                                        <ul style={{textAlign: "center"}}>
                                            <li><a href="#">Categorias</a></li>
                                            <li><a href="#">Artistas</a></li>
                                            <li><a href="#">Comprar</a></li>
                                            <li><a href="#">Vender</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </nav>
                        </Col>
                        <Col span={3}>
                            <img src={logoVertical} className='logoPages'/>
                        </Col>
                    </Row>

                </Row>
                <Form

                    name='login-form'
                    className='login-form'
                    initialValues={{
                        remember: true,
                        username: '',
                        password: ''
                    }}
                    onFinish={onFinish}
                >


                    <Row>

                        <Col span={10} align={'center'}>

                            <Col className="text">
                                <p align={'center'}> INICIAR SESIÓN</p>
                            </Col>
                            <br/>
                            <Col className="text" align={'center'} span={12} md={14}>
                                <Form.Item

                                    name='username'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tu nombre de usuario'
                                        },
                                        {
                                            type: 'email',
                                            message: 'Ingresa un correo válido'
                                        }
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className='site-form-item-icon'/>}
                                           placeholder='Dirección de Email'
                                           autoComplete='email'/>
                                </Form.Item>

                                <Form.Item
                                    name='password'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tu clave'
                                        }
                                    ]}
                                >
                                    <Input.Password
                                        prefix={<LockOutlined className='site-form-item-icon'/>}
                                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                        placeholder='Contraseña' autoComplete='password'
                                    />
                                </Form.Item>
                            </Col>

                            <Row>
                                <Col align={'right'} span={4} md={19}>
                                    <Form.Item>
                                        <Link className="texto-olvide-clave">
                                            ¿Olvidaste tu contraseña?
                                        </Link>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col align={'center'} span={14}>

                                    <Form.Item name='remember' valuePropName='checked' noStyle>
                                        <Checkbox className="text">Recordarme</Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <br/>

                            <Row>
                                <Col align={'center'} span={24}>
                                    <Form.Item>
                                        <Button type='primary' htmlType='submit' className='boton-login-entrar'>

                                            ENTRAR

                                        </Button>

                                        <div className={registro}>Soy nuevo. <Link
                                            to={Routes.REGISTER}>Registrarse</Link></div>


                                    </Form.Item>


                                </Col>
                            </Row>
                        </Col>

                        <Col className="para-comprar" align={'right'} span={11}>
                            <p align={'right'}> Vende tus obras de arte o <br/>artesanías directamente al
                                comprador. <br/>
                                Acuerda el pago y la entrega <br/>
                                del producto.</p>
                            <p>Crea tu cuenta sin costo.</p>
                        </Col>

                    </Row>
                </Form>
                <br/><br/><br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/>
            </div>
            <div>
                <div id="uno" className="carta">
                    <img className={"borde-imagen"}
                         height={820}
                         width={500}
                         src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                    />
                </div>
                <Row>
                    <Col span={10} align={'center'}>
                        <p>AQUI VA IMAGEN
                        </p>
                    </Col>

                    <Col span={14} align={'left'}>
                        <br/><br/><br/><br/>
                        <strong className={"texto-compra"}>COMERCIALIZA TUS<br/>
                            PRODUCTOS ARTÍSTICOS O<br/>
                            ARTESANALES SIN<br/>
                            INTERMEDIARIOS
                        </strong>
                        <p className={"texto-compra2"}>
                            Vende sin comisiones y sin recargas.
                            Acuerda con el comprador la entrega y el pago.
                            Recuerda que tus datos y los del comprador,
                            se revelarán mutuamente, elevando los niveles
                            de seguridad y confiabilidad.
                        </p>
                    </Col>

                </Row>
                <br/><br/><br/>

            </div>

            <div className={"fondo-paginas"}>

                <div id="dos" className="carta">
                    <img className={"borde-imagen"}
                         height={480}
                         width={400}
                         src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                    />
                </div>

                <br/> <br/> <br/> <br/> <br/>
                <Row>
                    <Col span={24} align={'center'}>
                        <strong className={"texto-eres-nuevo"}>¿ERES NUEVO EN WASI WALLPAY?</strong>
                        <br/> <br/> <br/>
                        <p className={"para-comprar"}>Para vender a través de Wasi Wallpay crea una cuenta personal de
                            vendedor,<br/>
                            sin costo. Llena los campos solicitados en el regisstro de forma correcta y
                            verídica,<br/>
                            luego espera la confirmación enviada a tu correo electrónico.
                        </p>
                        <Form.Item>
                            <Link className={"boton-login-registro"} to={Routes.REGISTER}>REGISTRARSE </Link>
                        </Form.Item>
                    </Col>

                </Row>
                <br/> <br/>

            </div>
            <div>
                <Row>

                    <Col span={14} align={'left'}>
                        <br/> <br/><br/> <br/><br/> <br/>
                        <p className={"tex"}>Considera tu grado de reputación dentro de la plataforma,
                            serás calificado y comentado por tus compradores en cada
                            transacción realizada
                        </p>

                    </Col>
                    <Col span={10} align={'center'}>
                        <p>IMAGEN</p>

                    </Col>

                </Row>
                <br/> <br/><br/> <br/><br/> <br/>
            </div>


        </>
    );
};

export default withoutAuth(Login);
