import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { alphabeticOrder, attackFilter, getAllPokemons,getTypes,PokeDborApi, typeFilter } from "../redux/actions";
import Pagination from "./Pagination";
import Pokecard from "./Pokecard";
import SearchBar from "./Search";
import style from "./StyleComponents/Home.module.css"

const Home = () =>{

const dispatch = useDispatch()
const pokemons = useSelector(state =>state.pokemons)
const pokeTypes= useSelector(state => state.types)
const[currentPage,setCurrentPage]= useState(1);
const pokemonsPerPage = 12;
const[Orden,setOrden]= useState("")
console.log(pokemons)
useEffect(()=>{
dispatch(getAllPokemons())
dispatch(getTypes())

}, [dispatch])

const indexOfLastPokemonPost = currentPage - pokemonsPerPage;
const indexOfFirstPokemonPost = indexOfLastPokemonPost - pokemonsPerPage;
const lastPokemonIndex = currentPage * pokemonsPerPage
const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
const currentCardsPage = pokemons.slice(firstPokemonIndex, lastPokemonIndex)
const paginate = pageNumber => {setCurrentPage(pageNumber)}

const handleOrigin = (e)=>{
    e.preventDefault()
    console.log("estoy en handle origin")
    console.log(e.target.value)
dispatch( PokeDborApi(e.target.value))

}
const handleTypeFilter = (e) =>{
e.preventDefault()
dispatch(typeFilter(e.target.value))

}

const handleAZ = (e) =>{
e.preventDefault()
console.log(e.target.value)
dispatch(alphabeticOrder(e.target.value))
setOrden(e.target.value)

}
const handleSortAttack = (e)=>{
e.preventDefault()
dispatch(attackFilter(e.target.value))
setOrden(e.target.value)

}
return(
<div className={style.Home_maincontainer}>

<div className={style.contentContainer}>
<SearchBar/>
<div>
    <select  onChange={handleOrigin}>

    <option value="db">DB</option>
    <option value="api">API</option>
    <option value="all">ALL</option>
    </select>

    <select onChange={handleSortAttack}>
        <option value="min-max">min-max</option>
        <option value="max-min">max-min</option>
    </select>



    <select onChange={handleTypeFilter}>

        {
        pokeTypes?.map(item =>(

            <option key={item}>{item}</option>
        ))

        }
    </select>
    <select onChange={handleAZ}>
    <option value="A-Z">A-Z</option>
    <option value="Z-A">Z-A</option>

    </select>
</div>
<div className={style.cardsGrid}>
{
currentCardsPage?.map(item =>(
<Pokecard img={item.img} name={item.name} type={item.type} id={item.id} key={item.name} attack={item.attack}/>)
)

}
</div>
<div className={style.pagination}>
<Pagination cardsPerPage={pokemonsPerPage} totalCards={pokemons.length} paginate={paginate}/>
</div>

</div>

</div>
)


}

export default Home