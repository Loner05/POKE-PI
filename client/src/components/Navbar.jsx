import React from "react";
import {NavLink } from "react-router-dom";
import style from './StyleComponents/Navbar.module.css'

export default function Navbar() {

return(
<div  className={style.Nav_container}>
<div className={style.Nav_textLogo}>
        <h1>Pokedex</h1>
    </div>
    <NavLink to="/home"><button className={style.Navbar_button} >Home</button></NavLink>
    <NavLink to="/createpokemon"><button className={style.Navbar_button}>Create Pokemon</button></NavLink>
</div>
)
}