

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPokeDetails, getPokemonDetails, setLoading } from "../redux/actions";
import Loader from "./Loader";
import style from './StyleComponents/PokeDetail.module.css'

export default function PokeDetail() {
const dispatch = useDispatch()
const [detail,setDetail] = useState(null)
const {id} = useParams()
const details = useSelector(state => state.pokemonDetail)
const loading = useSelector(state =>  state.loading)
useEffect(()=>{
    dispatch(clearPokeDetails())
    dispatch(getPokemonDetails(id))
    dispatch(setLoading(true))
},[dispatch,id])


return(
   
<div className={style.landscape_bigbox}>  
{
loading&&<Loader/>
}
{
   !loading&&
<div className={style.cardDetail}>
            <div className={style.imgContainer}>
        <img className={style.imgpoke} src={details.img} alt={details.name} />
           </div>
        <h1>{details.name}</h1>
        <div className={style.measuresrow}>
            <div className={style.measureitem}>
                    <div>{details.weight} kg</div>
                    <h3>Weight</h3> 
            </div>
            <div className={style.measureitem}>
                    <div>{details.height} cm</div>
                    <h3>Height</h3> 
            </div>
            <div className={style.measureitem}>
                    <div>{details.attack}</div>
                    <h3>Attack</h3> 
            </div>
          
        </div>
        <div className={style.typebuttonscontainer}>
            <h2>Types</h2>
        {
        details.type?.map(item =>(
        <button className={style.typebutton} key={item.name}>{item.toUpperCase()}</button>

        ))

        }
        </div>


    

        </div>}
</div>  

)}

