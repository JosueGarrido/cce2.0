import React, { useState } from 'react';

import Routes from '../constants/routes';
import { useAuth } from '../providers/Auth';
import { Menu } from 'antd';
import { LogoutOutlined, LoginOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';


const linkStyle = {
    color: 'white',
};

const Navigation2 = ( props ) => {
    let location = useLocation();

    const [ menuState, setMenuState ] = useState( {
        current: location.pathname, // set the current selected item in menu, by default the current page
        collapsed: false,
        openKeys: []
    } );
    const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();

    React.useEffect( () => {
        setMenuState( {
            ...menuState,
            current: location.pathname
        } );
    }, [ location, isAuthenticated ] );

    const handleClick = ( e ) => {
        console.log( 'click ', e );
        setMenuState( {
            ...menuState,
            current: e.key
        } );
    };


    return (
        <>
            <Menu
                mode={ props.mode }
                onClick={ handleClick }
                className='menu'
                theme='light'
                selectedKeys={ [ menuState.current ] }
                style={ {
                    lineHeight: '64px',
                    width: 'fit-content'
                } }
            >
                {
                    isAuthenticated
                    ?<Menu.SubMenu icon={ <UserOutlined /> } title={ currentUser && currentUser.name } style={linkStyle} className='scale-up-bottom'>
                        <Menu.ItemGroup className='sub-menu' style={linkStyle}>
                            {
                            currentUser.userable_type === 'App\\Artist'
                                ?
                            <Menu.Item key={ Routes.ARTIST_DASHBOARD } className='scale-up-bottom'>
                                <Link to={ Routes.ARTIST_DASHBOARD } style={linkStyle}>
                                    {
                                        isCheckingAuth
                                            ? <LoadingOutlined />
                                            : <><LogoutOutlined /> Dashboard</>
                                    }
                                </Link>
                            </Menu.Item>
                                :
                                <Menu.Item key={ Routes.CLIENT_DASHBOARD } className='scale-up-bottom'>
                                    <Link to={ Routes.CLIENT_DASHBOARD } style={linkStyle}>
                                        {
                                            isCheckingAuth
                                                ? <LoadingOutlined />
                                                : <><LogoutOutlined /> Dashboard</>
                                        }
                                    </Link>
                                </Menu.Item>
                                }
                            <Menu.Item key={ Routes.LOGOUT } className='scale-up-bottom'>
                                <Link to={ Routes.LOGOUT } className='logout-link'>
                                    {
                                        isCheckingAuth
                                            ? <LoadingOutlined />
                                            : <><LogoutOutlined /> Salir</>
                                    }
                                </Link>
                            </Menu.Item>
                        </Menu.ItemGroup>

                    </Menu.SubMenu>
                        :<>
                    <Menu.Item key={ Routes.ABOUT } className='scale-up-bottom'>
                        <Link to={ Routes.HOW_TO_BUY } style={linkStyle}>
                            Comprar
                        </Link>
                    </Menu.Item>
                        <Menu.Item key={ Routes.ABOUT } className='scale-up-bottom'>
                            <Link to={ Routes.LOGIN } style={linkStyle}>
                                Vender
                            </Link>
                        </Menu.Item>
                    </>
                }






                {/*
                    isAuthenticated
                        ? <Menu.SubMenu icon={ <UserOutlined /> } title={ currentUser && currentUser.name }>
                            <Menu.ItemGroup title='Usuario'>

                            </Menu.ItemGroup>

                            <Menu.Item key={ Routes.LOGIN }>
                                <Link to={ Routes.LOGOUT } className='logout-link'>
                                    {
                                        isCheckingAuth
                                            ? <LoadingOutlined />
                                            : <><LogoutOutlined /> Salir</>
                                    }
                                </Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        :<Menu.SubMenu>
                            <Menu.Item key={ Routes.LOGIN }>
                                <Link to={ Routes.LOGIN }>
                                    {
                                        isCheckingAuth
                                            ? <LoadingOutlined />
                                            : <><LoginOutlined /> Comprar</>
                                    }
                                </Link>
                            </Menu.Item>
                            <Menu.Item key={ Routes.LOGIN }>
                                <Link to={ Routes.LOGIN }>
                                    {
                                        isCheckingAuth
                                            ? <LoadingOutlined />
                                            : <><LoginOutlined /> Vender</>
                                    }
                                </Link>
                            </Menu.Item>
                        </Menu.SubMenu>

*/
                }
            </Menu>
        </>
    );
};

export default Navigation2;
