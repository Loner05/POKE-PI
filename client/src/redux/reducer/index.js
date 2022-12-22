

import { ALPHABETIC_ORDER, ATTACK_FILTER, CLEAR_POKE_DETAILS, GET_ALL_POKEMONS, GET_POKEMON_DETAILS, GET_TYPES, POKE_DB_OR_API, SEARCH_POKEMON } from "../actions/index.js";

const initialState ={
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
     allPokemons: action.payload,
     

    }
case CLEAR_POKE_DETAILS:
    return{
    ...state,
     pokemonDetail: []

    }
case GET_POKEMON_DETAILS:
    return{
     ...state,
     pokemonDetail: action.payload


    }

case GET_TYPES:
return{
...state,
types: action.payload

}
case SEARCH_POKEMON:
 return{
 ...state,
 pokemons: action.payload

 }

//  case ALPHABETIC_ORDER:
// let filtered =
//         action.payload == "A-Z" ?
//         state.pokemons.sort( item =>
//             if(a.name > b.name){
//                 return 1;  
//             }
//             if(a.name < b.name){
//                 return -1;  
//             }
            
//             return 0
//             )
//          action.payload == "Z-A" ?
//             if(a.name > b.name){
//                 return -1;  
//             }
//             if(a.name < b.name){
//                 return  1;  
//             }
            
//             return 0

        
//     return{
//     ...state,
//     pokemons: filtered

//     }

case ATTACK_FILTER:
    let filtered = []
for(let i=0; i > state.pokemons.length; i++){
    
    let finded = state.pokemons[i].type.find(item => 
       item === action.payload
       
    )
   if(finded) { filtered.push(state.pokemons[i])}

}
if(!filtered) {return "Isn't any pokemon of the selected type"}
    return{
       ...state,
       pokemons: filtered

    }
   case POKE_DB_OR_API:
    return{
     ...state,
     pokemons: action.payload
    }
    default: return{ ...state}


}
}

