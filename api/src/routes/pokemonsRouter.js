const {Router} = require('express')
const axios = require('axios')
const router = Router()
const {Pokemon,Types} = require("../db")


const getApiData = async()=>{
	try{
		let stadarization = []
 const apiData = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
 
 if(apiData.status===200){
	const datos = await apiData.data.results
	// console.log(apiData.data.results)
	let rawdata = datos
	for(let i=0; i < rawdata.length;i++){
     if(!rawdata[i]) return stadarization
    if(rawdata[i].url){
     const pokemonaxios = await axios.get(rawdata[i].url)
     const pokemondata = pokemonaxios.data
	 console.log(pokemondata)
	 stadarization.push({
     id: pokemondata.id,
	 name: pokemondata.name,
	 weight: pokemondata.weight,
	 height: pokemondata.height,
	 type: pokemondata.types.map(types => types.type.name),
	 img: pokemondata.sprites.front_shiny,
	 })

	}
	
	}
	return stadarization
 }
 
	}catch(error){return error.message}
}

const getDbData = async()=>{
try{
let pokedb =await  Pokemon.findAll()
console.log(pokedb)
return pokedb
}catch(error){ return error.message}



}

const allPokemons = async() =>{

let db  = await getDbData()
let api = await getApiData()
 let merge = [...db,...api]

 return merge

}


router.get('/',async(req,res)=>{

try{
	let pokedex = await allPokemons()
	res.status(200).send(pokedex)
     
}catch(error){
res.status(400).send(error.message)

}


})


router.post('/',async(req,res)=>{
const{name,types,image,life_span,attack,defense,speed,height,weight} =req.body
const pokecreate = await Pokemon.create({
name,
image,
life_span,
attack,
defense,
speed,
height,
weight
})
// let associatedtypes = await Types.findAll({
//   where: { name: types}

// })
// pokecreate.addTypes(associatedtypes)

res.status(200).json(pokecreate)

})




module.exports = router