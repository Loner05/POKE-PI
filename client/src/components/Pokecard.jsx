
import React from "react";
import { Link } from "react-router-dom";


export default function Pokecard({img,name,type,id,attack}){


return(
    <div>
   <img src={img} alt={name} />
    <Link to={`/details/${id}`}><h1>{name}</h1></Link>
    <h3>Attack: {attack}</h3>
    {
     type?.map(item =>
     <button>{item}</button>

     )

    }
    
    </div>

)
}