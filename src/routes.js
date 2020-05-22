import React from 'react';
import $ from 'jquery';
import Home from './App/components/user/Home/Home';
import UserList from './App/components/user/Service/UserList'
import Logout from './App/components/user/Logout/Logout';
import ShowQuestion from './App/components/Question/ShowQuestion';
import OAuth2RedirectHandler from './App/components/user/oauth2/OAuth2RedirectHandler';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const SignUp1 = React.lazy(() => import('./App/components/user/signup/Signup'));
const Signin1 = React.lazy(() => import('./App/components/user/login/Login.js'));

const routes = [
    { path: '/auth/signup', exact: true, name: 'Sign-up', component: SignUp1 },
    { path: '/auth/login', exact: true, name: 'Login', component: Signin1 },
    { path: '/home',exact:true,name:'Home',component:Home},
    { path: '/allusers',exact:true,name:'Userlist',component:UserList},
    { path: '/logout',exact:true,name:'Logout',component:Logout},
    { path: '/question/show',exact:true,name:'Logout',component:ShowQuestion},
    { path: '/oauth2/redirect',exact:true,name:'oauth',component:OAuth2RedirectHandler}
];

export default routes;