import Login from "../Controllers/Login.js";
import Register from "../Controllers/Register";
import PrimaPagina from "../Controllers/PrimaPagina";
import Host from "../Controllers/hostPage";
import Client from "../Controllers/clientPage";
import firstPage from "../Controllers/ChiarPrimaPagina"


const routes = [
    { path: '/Login', component: Login , text:"Log in" ,id:1 },    
    { path: '/PrimaPagina', component: PrimaPagina, text:"Prima Pagina", id:2 },
    { path: '/Register', component: Register , text:"Register", id:3},
    { path: '/hostPage', component: Host, text:"Host Page", id: 4},
    { path: '/clientPage', component: Client, text:"Client Page", id:5},
    {path: "/", component:firstPage, text:"Chiar Prima Pagina", id:6}
];

export default routes;