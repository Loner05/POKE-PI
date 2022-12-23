

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPokeDetails, getPokemonDetails } from "../redux/actions";
import style from './StyleComponents/PokeDetail.module.css'

export default function PokeDetail() {
const dispatch = useDispatch()

const {id} = useParams()
useEffect(()=>{
    dispatch(clearPokeDetails())
    dispatch(getPokemonDetails(id))
},[dispatch,id])
const details = useSelector(state => state.pokemonDetail)
return(
<div className={style.landscape_bigbox}>  
            
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




        </div>
</div>  

)
}