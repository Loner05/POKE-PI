import axios from 'axios'

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const SEARCH_POKEMON   = "SEARCH_POKEMON"
export const GET_TYPES = "GET_TYPES"
export const GET_POKEMON_DETAILS = "GET_POKEMON_DETAILS"
export const POKE_DB_OR_API = "POKE_DB_OR_API"
export const ALPHABETIC_ORDER = "ALPHABETIC_ORDER"
export const ATTACK_FILTER = "ATTACK_ORDER"
export const DELETE_POKEMON = "DELETE_POKEMON"

export const getAllPokemons = () =>{
    return async function(dispatch){
let getAll = await axios.get('localhost:3001/pokemons')
dispatch({ type: GET_ALL_POKEMONS, payload: getAll}
)}
}

export const  searchPokemon = (name)=>{

    return async function (dispatch){
        let pokefind = axios.get(`localhost:3001/pokemons?name=${name}`)
dispatch({type: SEARCH_POKEMON, payload: pokefind})}
}

export const createPokemon = (payload) =>{

    return async function(){
     let createpoke = await axios.post('localhost:3001/pokemons', payload)
     return createpoke
    }

}

export const getTypes =() =>{

    return async function(dispatch){
  let typesDb = axios.get('localhost:3001/pokemons') 
 dispatch({ type: GET_TYPES, payload: typesDb})
    }
}

export const getPokemonDetails = (id) =>{
return async function (dispatch){

let pokeDetails = axios.get(`localhost:3001/pokemons/${id}`)
 dispatch({ type: GET_POKEMON_DETAILS, payload: pokeDetails})
}
}

export const deletePokemon = (id) => (dispatch) =>{
    dispatch({ type: DELETE_POKEMON, payload:id})
}

export const PokeDborApi = (payload) =>(dispatch)=>{
    return async function(origin){
          let origininfo = await axios.get(`localhost:3001/pokemons?origin=${origin}`)

        dispatch({
            type: POKE_DB_OR_API, payload: origininfo
           
           })
        }

}


export const alphabeticOrder = (order) =>(dispatch)=>{
dispatch({ type: ALPHABETIC_ORDER, payload: order})

}

export const attackFilter = (order) =>(dispatch)=>{

dispatch({ type: ATTACK_FILTER, payload: order})

}
