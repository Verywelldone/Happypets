import Login from "../Controllers/Login.js";
import Register from "../Controllers/Register";
import PrimaPagina from "../Controllers/PrimaPagina";
import Host from "../Controllers/hostPage";
import Client from "../Controllers/clientPage";

const routes = [
<<<<<<< HEAD
    { path: '/', component: Login , text:"Log in" ,id:1 },    
    { path: '/PrimaPagina', component: PrimaPagina, text:"Prima Pagina", id:2 },
    { path: '/Register', component: Register , text:"Register", id:3},
    { path: '/hostPage', component: Host, text:"Host Page", id: 4},
    { path: '/clientPage', component: Client, text:"Client Page", id:5 }
=======
    { path: '/', component: Login , text:"Contul meu" },    
    { path: '/Register', component: Register , text:"Creeaza cont"},
    { path: '/PrimaPagina', component: PrimaPagina, text:"Prima Pagina" },
    { path: '/hostPage', component: Host, text:"Host Page" },
    { path: '/clientPage', component: Client, text:"Client Page" }
>>>>>>> 63d11185a9160cd4abdae7bcd6cf8cf3254a4578
];

export default routes;