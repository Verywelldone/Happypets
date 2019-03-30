import Login from "../Controllers/Login.js";
import Register from "../Controllers/Register";
import About from "../Controllers/About";
import Host from "../Controllers/hostPage";
import Client from "../Controllers/clientPage";
import firstPage from "../Controllers/PrimaPagina";
import Thanks from "../Controllers/thank-you";



const routes = [
    { path: '/About', component: About, text:"Despre noi", id:3,authRequired: true },
    { path: '/Login', component: Login , text:"Contul meu" ,id:1 },    
    { path: '/Register', component: Register , text:"Cont nou", id:2},
    { path: '/hostPage', component: Host, text:"Host Page", id: 4, authRequired: true},
    { path: '/clientPage', component: Client, text:"Client Page", id:5, authRequired: true},
    { path: '/', component:firstPage, text:"", id:6}, //pagina Main Page 
    { path: '/PrimaPagina', component: firstPage, text:"", id:7},
    { path: '/thank-you', component: Thanks, text:"", id:8},

];


export default routes;