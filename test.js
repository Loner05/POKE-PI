



let db = [
	{
		name: "normal"
	},
	{
		name: "fighting"
	},
	{
		name: "flying"
	},
	{
		name: "poison"
	},
	{
		name: "ghost"
	},
	{
		name: "ground"
	},
	{
		name: "rock"
	},
	{
		name: "bug"
	},
	{
		name: "fire"
	},
	{
		name: "steel"
	}
	
	
]



let api = [
	{
		"id": 1,
		"name": "bulbasaur",
		"weight": 69,
		"height": 7,
		"type": [
			"grass",
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
	},
	{
		"id": 2,
		"name": "ivysaur",
		"weight": 130,
		"height": 10,
		"type": [
			"grass",
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png"
	},
	{
		"id": 3,
		"name": "venusaur",
		"weight": 1000,
		"height": 20,
		"type": [
			"grass",
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png"
	},
	{
		"id": 4,
		"name": "charmander",
		"weight": 85,
		"height": 6,
		"type": [
			"fire"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png"
	},
	{
		"id": 5,
		"name": "charmeleon",
		"weight": 190,
		"height": 11,
		"type": [
			"fire"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png"
	},
	{
		"id": 6,
		"name": "charizard",
		"weight": 905,
		"height": 17,
		"type": [
			"fire",
			"flying"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
	},
	{
		"id": 7,
		"name": "squirtle",
		"weight": 90,
		"height": 5,
		"type": [
			"water"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png"
	},
	{
		"id": 8,
		"name": "wartortle",
		"weight": 225,
		"height": 10,
		"type": [
			"water"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png"
	},
	{
		"id": 9,
		"name": "blastoise",
		"weight": 855,
		"height": 16,
		"type": [
			"water"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png"
	},
	{
		"id": 10,
		"name": "caterpie",
		"weight": 29,
		"height": 3,
		"type": [
			"bug"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png"
	},
	{
		"id": 11,
		"name": "metapod",
		"weight": 99,
		"height": 7,
		"type": [
			"bug"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png"
	},
	{
		"id": 12,
		"name": "butterfree",
		"weight": 320,
		"height": 11,
		"type": [
			"bug",
			"flying"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png"
	},
	{
		"id": 13,
		"name": "weedle",
		"weight": 32,
		"height": 3,
		"type": [
			"bug",
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/13.png"
	},
	{
		"id": 14,
		"name": "kakuna",
		"weight": 100,
		"height": 6,
		"type": [
			"bug",
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png"
	},
	{
		"id": 15,
		"name": "beedrill",
		"weight": 295,
		"height": 10,
		"type": [
			"bug",
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png"
	},
	{
		"id": 16,
		"name": "pidgey",
		"weight": 18,
		"height": 3,
		"type": [
			"normal",
			"flying"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png"
	},
	{
		"id": 17,
		"name": "pidgeotto",
		"weight": 300,
		"height": 11,
		"type": [
			"normal",
			"flying"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png"
	},
	{
		"id": 18,
		"name": "pidgeot",
		"weight": 395,
		"height": 15,
		"type": [
			"normal",
			"flying"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png"
	},
	{
		"id": 19,
		"name": "rattata",
		"weight": 35,
		"height": 3,
		"type": [
			"normal"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png"
	},
	{
		"id": 20,
		"name": "raticate",
		"weight": 185,
		"height": 7,
		"type": [
			"normal"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png"
	},
	{
		"id": 21,
		"name": "spearow",
		"weight": 20,
		"height": 3,
		"type": [
			"normal",
			"flying"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/21.png"
	},
	{
		"id": 22,
		"name": "fearow",
		"weight": 380,
		"height": 12,
		"type": [
			"normal",
			"flying"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/22.png"
	},
	{
		"id": 23,
		"name": "ekans",
		"weight": 69,
		"height": 20,
		"type": [
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png"
	},
	{
		"id": 24,
		"name": "arbok",
		"weight": 650,
		"height": 35,
		"type": [
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png"
	},
	{
		"id": 25,
		"name": "pikachu",
		"weight": 60,
		"height": 4,
		"type": [
			"electric"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"
	},
	{
		"id": 26,
		"name": "raichu",
		"weight": 300,
		"height": 8,
		"type": [
			"electric"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/26.png"
	},
	{
		"id": 27,
		"name": "sandshrew",
		"weight": 120,
		"height": 6,
		"type": [
			"ground"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/27.png"
	},
	{
		"id": 28,
		"name": "sandslash",
		"weight": 295,
		"height": 10,
		"type": [
			"ground"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/28.png"
	},
	{
		"id": 29,
		"name": "nidoran-f",
		"weight": 70,
		"height": 4,
		"type": [
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/29.png"
	},
	{
		"id": 30,
		"name": "nidorina",
		"weight": 200,
		"height": 8,
		"type": [
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/30.png"
	},
	{
		"id": 31,
		"name": "nidoqueen",
		"weight": 600,
		"height": 13,
		"type": [
			"poison",
			"ground"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/31.png"
	},
	{
		"id": 32,
		"name": "nidoran-m",
		"weight": 90,
		"height": 5,
		"type": [
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/32.png"
	},
	{
		"id": 33,
		"name": "nidorino",
		"weight": 195,
		"height": 9,
		"type": [
			"poison"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/33.png"
	},
	{
		"id": 34,
		"name": "nidoking",
		"weight": 620,
		"height": 14,
		"type": [
			"poison",
			"ground"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/34.png"
	},
	{
		"id": 35,
		"name": "clefairy",
		"weight": 75,
		"height": 6,
		"type": [
			"fairy"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png"
	},
	{
		"id": 36,
		"name": "clefable",
		"weight": 400,
		"height": 13,
		"type": [
			"fairy"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/36.png"
	},
	{
		"id": 37,
		"name": "vulpix",
		"weight": 99,
		"height": 6,
		"type": [
			"fire"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/37.png"
	},
	{
		"id": 38,
		"name": "ninetales",
		"weight": 199,
		"height": 11,
		"type": [
			"fire"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/38.png"
	},
	{
		"id": 39,
		"name": "jigglypuff",
		"weight": 55,
		"height": 5,
		"type": [
			"normal",
			"fairy"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png"
	},
	{
		"id": 40,
		"name": "wigglytuff",
		"weight": 120,
		"height": 10,
		"type": [
			"normal",
			"fairy"
		],
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/40.png"
	}
]







const dbnames = db.map((r) => r.name)
const dena = Object.entries(db)

//  console.log(dbnames)
//  //console.log(dena)


 let finder = api.find(item => item.id == 2)

 console.log(finder)