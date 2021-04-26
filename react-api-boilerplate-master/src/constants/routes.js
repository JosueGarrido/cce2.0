/**
 * Created by chalosalvador on 17/01/2019.
 */

const publicRoutes = {
  LOGIN: '/ingreso',
  LOGIN_CLIENT: '/ingreso-cliente',
  REGISTER: '/registro',
  REGISTER_CLIENT: '/registro-clientes',

  //Dashboard artista Ventas
  PUBLICATIONS: '/publicaciones',
  ARTIST_DASHBOARD: '/dashboard-artista',
  ARTIST_PUBLICATIONS_DASHBOARD: '/dashboard-publicaciones-artista',
  ARTIST_QUESTIONS_DASHBOARD: '/dashboard-preguntas-artista',
  ARTIST_SELL_DASHBOARD: '/dashboard-ventas-artista',
  ARTIST_METRICS_DASHBOARD: '/dashboard-metricas-artista',
  ARTIST_REPUTATION_DASHBOARD: '/dashboard-reputación-artista',

  //Dashboard Clientes Compras
  CLIENT_DASHBOARD: '/dashboard-cliente',
  CLIENT_QUESTIONS_DASHBOARD: '/dashboard-preguntas-cliente',
  CLIENT_BUY_DASHBOARD: '/dashboard-ventas-cliente',
  CLIENT_REPUTATION_DASHBOARD: '/dashboard-reputación-cliente',


  ARTICLES: '/articulos',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  ARTISTS: '/artistas',
  ARTIST: '/artista/:id',
  HOME: '/',
  ABOUT: '/acerca-de',
  ANTD: '/antd',
  HOW_TO_BUY: '/como-comprar',
  SALEPAGE:'/como-vender',
  QUESTIONPAGE:'/preguntas-frecuentes',
  PRODUCT:'/producto/:id',
  CATEGORY:'/categoria/:id',
  CATEGORY1:'/categoria1/:id',
  PREPURCHASE:'/pre-compra/:id/',
  CATEGORIESPAGE:'/categorias',
  POLITICS:'/politica-privacidad',

  //Dashboard Configuración
  DASHBOARD_MY_DATA: '/dashboard-mis-datos',
  DASHBOARD_SECURITY: '/dashboard-seguridad',
  DASHBOARD_PRIVACY: '/dashboard-privacidad',
  DASHBOARD_EMAILS: '/dashboard-emails',
  DASHBOARD_ALERTS: '/dashboard-alerts',

  //Pages Information
  //esta no va, va how to buy


};

const privateRoutes = {
  LOGOUT: '/logout',
  PRIVATE: '/privada',
  ARTICLE_ID: '/articulo/:id',
  ARTIST_SELL_DASHBOARD_ID: '/ventas/:id',
  CLIENT_BUY_DASHBOARD_ID: '/compras/:id',
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
