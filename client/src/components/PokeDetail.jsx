

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPokeDetails, getPokemonDetails } from "../redux/actions";


export default function PokeDetail() {
const dispatch = useDispatch()

const {id} = useParams()
useEffect(()=>{
    dispatch(clearPokeDetails())
    dispatch(getPokemonDetails(id))
},[dispatch,id])
const details = useSelector(state => state.pokemonDetail)
return(
<div>
<img src={details.img}/>
<h1>{details.name}</h1>
<h2>weight: {details.weight}</h2>
<h2>height: {details.height}</h2>
<h2>attack: {details.attack}</h2>
<div>
    <h2>Types</h2>
{
details.type?.map(item =>(
 <button key={item.name}>{item}</button>

))

}
</div>




</div>


)
}