import React from "react";
import {NavLink } from "react-router-dom";
import style from './StyleComponents/Navbar.module.css'
import pokeball from '../media/pokeball.png'
import homeicon from '../media/homeicon.png'
export default function Navbar() {

return(
<div  className={style.Nav_container}>
<div className={style.Nav_textLogo}>
    </div>
    <NavLink to="/home"><img  className={style.Navlogos}src={homeicon} alt="" /></NavLink>
    <NavLink to="/createpokemon"><img className={style.Navlogos} src={pokeball} alt="" /></NavLink>
</div>
)
}