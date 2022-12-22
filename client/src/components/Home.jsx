import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../redux/actions";
import Pokecard from "./Pokecard";


const Home = () =>{

const dispatch = useDispatch()
const pokemons = useSelector(state =>state.allPokemons)
console.log(pokemons)
useEffect(()=>{
dispatch(getAllPokemons())

}, [dispatch])



return(
<div>
<div>soy el home</div>
{
pokemons?.map(item =>(
<Pokecard img={item.img} name={item.name} type={item.type} id={item.id} key={item.name}/>)
)

}


</div>
)
}

export default Home