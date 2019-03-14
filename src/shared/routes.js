import Login from "../Controllers/Login.js";
import Register from "../Controllers/Register";
import PrimaPagina from "../Controllers/PrimaPagina";
import Host from "../Controllers/hostPage";
import Client from "../Controllers/clientPage";

const routes = [
    { path: '/', component: Login , text:"Log in" },    
    { path: '/PrimaPagina', component: PrimaPagina, text:"Prima Pagina" },
    { path: '/Register', component: Register , text:"Register"},
    { path: '/hostPage', component: Host, text:"Host Page" },
    { path: '/clientPage', component: Client, text:"Client Page" }
];

export default routes;