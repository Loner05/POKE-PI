
import { Link } from 'react-router-dom';
import style from './StyleComponents/Landing.module.css';
import pokeball_open from '../media/pokeball_landing.png'
import { getAllPokemons, getTypes, setLoading } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const Landing = ()=>{

    const dispatch = useDispatch()
    useEffect(()=>{
   
        dispatch(getAllPokemons())
        dispatch(getTypes())
        dispatch(setLoading(true))
        
        
        }, [dispatch])

return(

<div className={style.Landing_container}>
    <div className={style.Landing_card}>
        <div className={style.imgcontainer}>
        <img  className={style.pokeballimg} src={pokeball_open} alt="" />
        </div>
     <h2 className={style.Landing_title}><p>Ingresa a la Pokedex </p>y crea tu propio pokemon.</h2>
     <div>
<Link to="/home">
<button className={style.Landing_button}>ENTER</button>
</Link>
</div>
</div>
</div>




)    





}

export default Landing