
import Login from "../Controllers/Login.js";
import Register from "../Controllers/Register";



const notLoggedRoutes = [
    { path: '/Login', component: Login , text:"Contul meu" ,id:1 },    
    { path: '/Register', component: Register , text:"Cont nou", id:2},
];


export default notLoggedRoutes;