import axios from 'axios'


export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS'
export const SEARCH_POKEMON   = "SEARCH_POKEMON"
export const GET_TYPES = "GET_TYPES"
export const GET_POKEMON_DETAILS = "GET_POKEMON_DETAILS"
export const POKE_DB_OR_API = "POKE_DB_OR_API"
export const ALPHABETIC_ORDER = "ALPHABETIC_ORDER"
export const ATTACK_FILTER = "ATTACK_ORDER"
export const DELETE_POKEMON = "DELETE_POKEMON"
export const CLEAR_POKE_DETAILS = "CLEAR_POKE_DETAILS"
export const TYPE_FILTER = "TYPE_FILTER"
export const GET_POKEMON ="GET_POKEMON"
export const SET_LOADING = "SET_LOADING"
export function getAllPokemons (){
    return async function(dispatch){
//  fetch('http://localhost:3001/pokemons')
// .then(res =>res.json())
// .then(data => console.log(data))
// .then(data =>{dispatch({ type: GET_ALL_POKEMONS, payload: data})}
let pokedata = await axios.get('http://localhost:3001/pokemons')
 return dispatch({ type: GET_ALL_POKEMONS, payload: pokedata.data})

}
}

export const  searchPokemon = (name)=>{

    return async function (dispatch){
        let pokefind = axios.get(`http://localhost:3001/pokemons?name=${name}`)
return dispatch({type: SEARCH_POKEMON, payload: pokefind.data})}
}

export const createPokemon = (payload) =>{

    return async function(){
     let createpoke = await axios.post('http://localhost:3001/pokemons', payload)
     return createpoke
    }

}

export const getTypes =() =>{

    return async function(dispatch){
  let typesDb = await axios.get('http://localhost:3001/types') 
  console.log(typesDb.data)
  return dispatch({ type: GET_TYPES, payload: typesDb.data})
    }
}

export const getPokemonDetails = (id) =>{
return async function (dispatch){

let pokeDetails = await axios.get(`http://localhost:3001/pokemons/${id}`)
console.log("llegue al action de getdetails")
console.log(pokeDetails.data)
 return dispatch({ type: GET_POKEMON_DETAILS, payload: pokeDetails.data})
}
}

export const deletePokemon = (id) => (dispatch) =>{
    dispatch({ type: DELETE_POKEMON, payload:id})
}

export const typeFilter = (poketype) =>{

return{type:TYPE_FILTER, payload: poketype}

}

export const PokeDborApi = (payload) =>{
    return async function(dispatch){
        console.log("estoy en action dborapi")
        try{
        let origininfo = await axios.get(`http://localhost:3001/pokemons?origin=${payload}`)
        return  dispatch({
              type: POKE_DB_OR_API, payload: origininfo.data
             
             })


        }
         catch(error){return dispatch({type: POKE_DB_OR_API, payload: {error: error.response.data}})}
     } }




export const alphabeticOrder = (order) =>{
    console.log(`llegue al action ${order}`)
return { type: ALPHABETIC_ORDER, payload: order}

}

export const attackFilter = (order) =>{

return{ type: ATTACK_FILTER, payload: order}

}


export const clearPokeDetails = () =>{
 return {type: CLEAR_POKE_DETAILS}


}

export const getpokemon = (name) =>{
    console.log("estoy en el action de getpokemoon")
    console.log(name)
return async function (dispatch){
    try{
let getpoke = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
return dispatch({type: GET_POKEMON, payload: getpoke.data})}
catch(error){return dispatch({type: GET_POKEMON, payload: {error: error.response.data}})}
}

}

export const setLoading = (payload) =>{
    return {type: SET_LOADING, payload: payload}
   
   
   }
