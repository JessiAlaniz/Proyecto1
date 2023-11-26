import {navbarCmp} from "../archivosjs/navbar.js";
import { getData } from "../sessionStorage/sessionStorage.js";
import { setData } from "../sessionStorage/sessionStorage.js";


let navContenedor = document.querySelector('header')

window.addEventListener('load', ()=>{
    const items = getData('Login')
    navContenedor.innerHTML = navbarCmp;
    

})

const btnLogin = document.getElementById("btnLogin")

btnLogin.addEventListener('click', () =>{
    
    const user = document.getElementById("user").value
    const pass = document.getElementById("password").value
    if(user != "" && pass != "")
    {
        const login = {
            usuario: user,
            contrasena: pass
        }
    
        const items = getData('Login')
             
        items.push(login)
        console.log(items)
    
        setData('Login', items)

    }

})