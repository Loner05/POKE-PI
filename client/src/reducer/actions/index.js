const axios= require('axios')

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const SEARCH_POKEMON   = "SEARCH_POKEMON"
export const GET_TYPES = "GET_TYPES"
export const GET_POKEMON_DETAILS = "GET_POKEMON_DETAILS"
export const POKE_DB_OR_API = "POKE_DB_OR_API"
export const ALPHABETIC_ORDER = "ALPHABETIC_ORDER"
export const ATTACK_ORDER = "ATTACK_ORDER"


const getAllPokemons = () =>{
let getAll = axios.get('localhost:3001/pokemons')
return{ type: "GET_ALL_POKEMONS", payload: getAll}
}


const  searchPokemon = (payload)=>{
return{type: "SEARCH_POKEMON", payload: payload}
}

const createPokemon = (payload) =>{

    return async function(){
     let createpoke = await axios.post('localhost:3001/pokemons', payload)
     return createpoke

    }

}

const getTypes =() =>{
  let typesDb = axios.get('localhost:3001/pokemons') 
  return{ type: "GET_TYPES", payload: typesDb}
   
}

const getPokemonDetails = (id) =>{
let pokeDetails = axios.get(`localhost:3001/pokemons/${id}`)
 return{ type:"GET_POKEMON_DETAILS", payload: pokeDetails}

}

const deletePokemon = (id) =>{
    return{ type: DELETE_POKEMON, payload:id}
}

const PokeDborApi = (payload) =>{
return{
 type: "POKE_DB_OR_API", payload: payload

}
}


const alphabeticOrder = (order) =>{
return{ type: "ALPHABETIC_ORDER", payload: order}

}

const attackOrder = (order) =>{

return{ type: "ATTACK_ORDER", payload: order}

}