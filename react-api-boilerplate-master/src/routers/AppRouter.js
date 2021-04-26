import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Routes from '../constants/routes';
import NotFoundPage from '../pages/NotFoundPage';
import Loading from '../components/Loading';

/**
 * El módulo loadable (https://loadable-components.com/docs/code-splitting/)
 * Permite dividir los componentes en diferentes "bundles" (archivos js compilados)
 * de esta manera la aplicación puede ir cargando los compoenentes bajo demanda.
 * Solo cargará los componentes que sean utilizados por el usuario.
 *
 * Esto acelera la carga de la aplicación ya que de lo contrario tendríamos un solo
 * bundle de gran tamaño y el navegador demoraría en descargarlo para renderizar la aplicación.
 *
 * @type {{fallback: JSX.Element}}
 */
const loadableOptions = { fallback: <Loading /> };

const AsyncHome = loadable( () => import( '../pages/Index' ), loadableOptions );
const AsyncLogin = loadable( () => import( '../pages/Login' ), loadableOptions );
const AsyncLoginClient = loadable( () => import( '../pages/LoginClient' ), loadableOptions );

//const AsyncDashboardArtist = loadable( () => import( '../pages/ArtistDashboard' ), loadableOptions );
const AsyncPublications = loadable( () => import( '../pages/Publications' ), loadableOptions );
const AsyncSalePage = loadable( () => import( '../pages/HowToSale' ), loadableOptions );
const AsyncFrequentQuestions = loadable( () => import( '../pages/FrequentQuestions' ), loadableOptions );
const AsyncCategoriesPage = loadable( () => import( '../pages/CategoriesPage' ), loadableOptions );
const AsyncCategory = loadable( () => import( '../pages/Category' ), loadableOptions );
const AsyncCategoryp = loadable( () => import( '../pages/Category1' ), loadableOptions );
const AsyncPolitics = loadable( () => import( '../pages/Politics' ), loadableOptions );
//Dashboard Artista
const AsyncDashboardArtist = loadable( () => import( '../pages/ArtistResumeDashboard' ), loadableOptions );
const AsyncDashboardPublicationsArtist = loadable( () => import( '../pages/ArtistPublicationsDashboard' ), loadableOptions );
const AsyncDashboardQuestionsArtist = loadable( () => import( '../pages/ArtistQuestionsDashboard' ), loadableOptions );
const AsyncDashboardSellArtist = loadable( () => import( '../pages/ArtistSellDashboard' ), loadableOptions );
const AsyncDashboardSell2Artist = loadable( () => import( '../pages/ArtistSellDashboard2' ), loadableOptions );
const AsyncDashboardMetricsArtist = loadable( () => import( '../pages/ArtistMetricsDashboard' ), loadableOptions );
const AsyncDashboardReputationArtist = loadable( () => import( '../pages/ArtistReputationDashboard' ), loadableOptions );

//Dashboard Artista
const AsyncDashboardClient = loadable( () => import( '../pages/ClientResumeDashboard' ), loadableOptions );
const AsyncDashboardQuestionsClient = loadable( () => import( '../pages/ClientQuestionsDashboard' ), loadableOptions );
const AsyncDashboardBuyClient = loadable( () => import( '../pages/ClientBuyDashboard1' ), loadableOptions );
const AsyncDashboardBuyClient2 = loadable( () => import( '../pages/ClientBuyDashboard2' ), loadableOptions );
const AsyncDashboardReputationClient = loadable( () => import( '../pages/ClientReputationDashboard' ), loadableOptions );

//Dashboard Configuración
const AsyncDashboardMyData = loadable( () => import( '../pages/DashboardMyData' ), loadableOptions );
const AsyncDashboardSecurity = loadable( () => import( '../pages/DashboardSecurity' ), loadableOptions );
const AsyncDashboardPrivacy = loadable( () => import( '../pages/DashboardPrivacy' ), loadableOptions );
const AsyncDashboardEmails = loadable( () => import( '../pages/DashboardEmail' ), loadableOptions );
const AsyncDashboardAlerts = loadable( () => import( '../pages/DashboardAlerts' ), loadableOptions );
//Paginas Artistas
const AsyncArtists = loadable( () => import( '../pages/Artists' ), loadableOptions );
const AsyncArtist = loadable( () => import( '../pages/Artist' ), loadableOptions );

//Pagina Productos
const AsyncProduct = loadable( () => import( '../pages/Product' ), loadableOptions );

const AsyncPrePurchase = loadable( () => import( '../pages/PrePurchase' ), loadableOptions );

const AsyncRegister = loadable( () => import( '../pages/Register' ), loadableOptions );
const AsyncRegisterClient = loadable( () => import( '../pages/RegisterClient' ), loadableOptions );
const AsyncPrivate = loadable( () => import( '../pages/Private' ), loadableOptions );
const AsyncArticles = loadable( () => import( '../pages/Articles' ), loadableOptions );
const AsyncArticle = loadable( () => import( '../pages/Article' ), loadableOptions );
const AsyncAbout = loadable( () => import( '../pages/About' ), loadableOptions );
const AsyncLogout = loadable( () => import( '../pages/Logout' ), loadableOptions );
const AsyncHowToBuy = loadable( () => import( '../pages/HowToBuy' ), loadableOptions );


/**
 * Este es el componente que se encarga de renderizar el componente adecuado
 * de acuerdo a la ruta en la que se encuentra el navegador.
 * <Switch> https://reactrouter.com/web/api/Switch
 * <PublicRoute> Utilizado para las páginas que son accesibles por todos los usuarios.
 * <PrivateRoute> Utilizado para lás páginas que son protegidas,
 *                este componente valida si existe una sesión activa.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter = () => (
  <Switch>
    <PublicRoute exact path={ Routes.HOME } component={ AsyncHome } />
    <PublicRoute path={ Routes.LOGIN } component={ AsyncLogin } />
    <PublicRoute path={ Routes.LOGIN_CLIENT } component={ AsyncLoginClient } />
    <PublicRoute path={ Routes.REGISTER } component={ AsyncRegister } />
    <PublicRoute path={ Routes.REGISTER_CLIENT } component={ AsyncRegisterClient } />
    <PublicRoute path={ Routes.PUBLICATIONS } component={ AsyncPublications } />
    <PublicRoute path={ Routes.SALEPAGE } component={ AsyncSalePage } />
    <PublicRoute path={ Routes.QUESTIONPAGE } component={ AsyncFrequentQuestions } />
    <PublicRoute path={ Routes.CATEGORIESPAGE } component={ AsyncCategoriesPage } />
    <PublicRoute path={ Routes.CATEGORY } component={ AsyncCategory } />
    <PublicRoute path={ Routes.CATEGORY1 } component={ AsyncCategoryp } />
    <PublicRoute path={ Routes.POLITICS } component={ AsyncPolitics } />

    <PublicRoute path={ Routes.ARTICLES } component={ AsyncArticles } />
    <PublicRoute path={ Routes.ABOUT } component={ AsyncAbout } />
    <PublicRoute path={ Routes.HOW_TO_BUY } component={ AsyncHowToBuy } />
    <PublicRoute path={ Routes.ARTISTS } component={ AsyncArtists } />
    <PublicRoute path={ Routes.ARTIST } component={ AsyncArtist } />
    <PublicRoute path={ Routes.PRODUCT } component={ AsyncProduct } />
    <PublicRoute path={ Routes.PREPURCHASE } component={ AsyncPrePurchase } />

    <PrivateRoute path={ Routes.PRIVATE } component={ AsyncPrivate } />
    <PrivateRoute path={ Routes.ARTICLE_ID } component={ AsyncArticle } />
    <PrivateRoute path={ Routes.LOGOUT } component={ AsyncLogout } />

    <PrivateRoute path={ Routes.ARTIST_DASHBOARD } component={ AsyncDashboardArtist } />
    <PrivateRoute path={ Routes.ARTIST_PUBLICATIONS_DASHBOARD } component={ AsyncDashboardPublicationsArtist } />
    <PrivateRoute path={ Routes.ARTIST_QUESTIONS_DASHBOARD } component={ AsyncDashboardQuestionsArtist } />
    <PrivateRoute path={ Routes.ARTIST_SELL_DASHBOARD } component={ AsyncDashboardSellArtist } />
    <PrivateRoute path={ Routes.ARTIST_SELL_DASHBOARD_ID } component={ AsyncDashboardSell2Artist } />
    <PrivateRoute path={ Routes.ARTIST_METRICS_DASHBOARD } component={ AsyncDashboardMetricsArtist } />
    <PrivateRoute path={ Routes.ARTIST_REPUTATION_DASHBOARD } component={ AsyncDashboardReputationArtist } />

    <PrivateRoute path={ Routes.CLIENT_DASHBOARD } component={ AsyncDashboardClient } />
    <PrivateRoute path={ Routes.CLIENT_QUESTIONS_DASHBOARD } component={ AsyncDashboardQuestionsClient } />
    <PrivateRoute path={ Routes.CLIENT_BUY_DASHBOARD } component={ AsyncDashboardBuyClient } />
    <PrivateRoute path={ Routes.CLIENT_BUY_DASHBOARD_ID } component={ AsyncDashboardBuyClient2 } />
    <PrivateRoute path={ Routes.CLIENT_REPUTATION_DASHBOARD } component={ AsyncDashboardReputationClient } />

    <PrivateRoute path={ Routes.DASHBOARD_MY_DATA } component={ AsyncDashboardMyData } />
    <PrivateRoute path={ Routes.DASHBOARD_SECURITY } component={ AsyncDashboardSecurity } />
    <PrivateRoute path={ Routes.DASHBOARD_PRIVACY } component={ AsyncDashboardPrivacy } />
    <PrivateRoute path={ Routes.DASHBOARD_EMAILS } component={ AsyncDashboardEmails } />
    <PrivateRoute path={ Routes.DASHBOARD_ALERTS } component={ AsyncDashboardAlerts } />

      <Route component={ NotFoundPage } />
  </Switch>
);

export default AppRouter;
