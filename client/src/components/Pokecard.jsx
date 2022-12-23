
import React from "react";
import { Link } from "react-router-dom";
import style from './StyleComponents/Pokecard.module.css'

export default function Pokecard({img,name,type,id,attack}){


return(
    <div className={style.Card_container}>
   <img src={img} alt={name} />
   <div className={style.Card_data}>
    <Link to={`/details/${id}`}><h1>{name}</h1></Link>
    <h3>Attack: {attack}</h3>
    {
     type?.map(item =>
     <button className={style.type_Buttons}>{item}</button>

     )

    }
    </div>
    </div>

)
}