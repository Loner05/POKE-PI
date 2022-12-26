

import { SET_LOADING,ALPHABETIC_ORDER,GET_POKEMON, TYPE_FILTER, ATTACK_FILTER, CLEAR_POKE_DETAILS, GET_ALL_POKEMONS, GET_POKEMON_DETAILS, GET_TYPES, POKE_DB_OR_API, SEARCH_POKEMON } from "../actions/index.js";

const initialState ={
    loading: false,
allPokemons: [],
pokemons: [],
pokemonDetail: [],
types:[]
}


export default function rootReducer(state= initialState, action){

    switch(action.type){
 case GET_ALL_POKEMONS:

    return{
     ...state,
     
     pokemons: action.payload,
     loading: false,

    }
case CLEAR_POKE_DETAILS:
    return{
    ...state,
     pokemonDetail: [],
    
    }
case GET_POKEMON_DETAILS:
    return{
     ...state,
     pokemonDetail: action.payload,
     loading: false

    }

case GET_TYPES:
return{
...state,
types: action.payload

}
case GET_POKEMON:
 return{
 ...state,
 pokemons: action.payload

 }

 case ALPHABETIC_ORDER:
    console.log(`estoy en el reducer alpabethic ${action.payload}`)
const filt = 
action.payload == "A-Z" ?
state.pokemons.sort((a,b)=>{
if(a.name > b.name){
    return 1;  
}
if(a.name < b.name){
    return -1;  
}

return 0

}) :  state.pokemons.sort((a,b)=>{
    if(a.name > b.name){
        return -1;  
    }
    if(a.name < b.name){
        return  1;  
    }
    
    return 0
    
    }) 
        
    return{
    ...state,
    pokemons: filt

    }

case ATTACK_FILTER:
   let  filtradore = 
    action.payload === "min-max" ?
    state.pokemons.sort((a,b)=>{
    if(a.attack> b.attack){
        return 1;  
    }
    if(a.attack < b.attack){
        return -1;  
    }
    
    return 0
    
    }) :  state.pokemons.sort((a,b)=>{
        if(a.attack> b.attack){
            return -1;  
        }
        if(a.attack< b.attack){
            return  1;  
        }
        
        return 0
        
        }) 
            
        return{
        ...state,
        pokemons: filtradore
    
        }
   case POKE_DB_OR_API:
    return{
     ...state,
     pokemons: action.payload
    }
    case TYPE_FILTER:
        let typeselected = []
        for(let i=0; i < state.allPokemons.length; i++){
        state.allPokemons[i].type.map( item => {
           if(item === action.payload){ 
            typeselected.push(state.allPokemons[i])
           }

        })}
        if(!typeselected){ return "Isn't any pokemon is this selected type!"}
        return{
      ...state,
      pokemons: typeselected


        }
        case SET_LOADING:
        return{
         ...state,
         loading: action.payload

        }

    default: return{ ...state}


}
}

