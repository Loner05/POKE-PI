
import React from "react";


export default function Pokecard(img,name,type){


return(
    <div>
   <img src={img} alt={name} />
    <h1>{name}</h1>
    {
     type.map(item =>
     <button>{item.name}</button>

     )

    }
    
    </div>

)
}