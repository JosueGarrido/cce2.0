import React, { useState } from 'react';

import Routes from '../constants/routes';
import { useAuth } from '../providers/Auth';
import { Menu,Button } from 'antd';
import { LogoutOutlined, LoginOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';
import {useCategories} from "../data/useCategories";
const { SubMenu } = Menu;

const linkStyle = {
    color: 'white',
};

const Navigation = ( props ) => {

  let location = useLocation();

  const [ menuState, setMenuState ] = useState( {
    current: location.pathname, // set the current selected item in menu, by default the current page
    collapsed: false,
    openKeys: []
  } );

  const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();
  const { categories, isLoading, isError } = useCategories();


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



            <SubMenu  key={ Routes.CATEGORIESPAGE } style={ linkStyle } className='scale-up-bottom' title="Categorías"
            >
                <Menu.ItemGroup className='sub-menu'>
                        {
                        categories && categories.map( ( category, index ) =>
                            <Menu.Item className='scale-up-bottom' value={ category.id } key={ index }>{` ${ category.name } `}
                                <Link to={ Routes.CATEGORY1.replace( ':id', category.id ) }/>
                            </Menu.Item>
                        )
                    }
                </Menu.ItemGroup>
            </SubMenu>



          <Menu.Item key={ Routes.ARTISTS } className='scale-up-bottom'>
              <Link to={ Routes.ARTISTS } style={ linkStyle }>Artistas</Link>
          </Menu.Item>
        </Menu >


        {/*
          isAuthenticated
            ? <Menu.SubMenu icon={ <UserOutlined /> } title={ currentUser && currentUser.name }>
*/}
      </>
  );
};

export default Navigation;
