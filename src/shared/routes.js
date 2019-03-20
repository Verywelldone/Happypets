import Login from "../Controllers/Login.js";
import Register from "../Controllers/Register";
import About from "../Controllers/About";
import Host from "../Controllers/hostPage";
import Client from "../Controllers/clientPage";
import firstPage from "../Controllers/PrimaPagina"


const routes = [
    { path: '/Login', component: Login , text:"Contul meu" ,id:1 },    
    { path: '/About', component: About, text:"About", id:2 },
    { path: '/Register', component: Register , text:"Cont nou", id:3},
    { path: '/hostPage', component: Host, text:"Host Page", id: 4},
    { path: '/clientPage', component: Client, text:"Client Page", id:5},
    { path: "/", component:firstPage, text:"", id:6}
];

export default routes;