import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon ,getTypes} from "../redux/actions";


export default function CreatePokemon(){
const initialState ={
name: '',
life: '',
attack: '',
defense: '',
speed: '',
height: '',
weight: '',
type: []


}

const[ form, Setform] = useState(initialState)
const [errors, setErrors] = useState({})
const dispatch = useDispatch()

useEffect(()=>{
dispatch(getTypes())
},[dispatch])

const poketypes = useSelector(state => state.types)
const Validate = (form) =>{

    let errors = {}
    let regexName =  /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/
    let regexlife =  /[0-9]{1,2}(-[0-9]{1,2})/
    if(!form.name.trim()){
    errors.name = "Name is required!"}
    else if(!regexName.test(form.name)){
        errors.name = "Enter a valid name!"
    }
    if(!form.life.trim()){
      errors.life = "Life is required!"  
    }else if(!regexlife.test(form.life)){
       errors.life = "Enter a valid Life span!" 
    }
    
    return errors
}

const handleChange=(e)=>{
Setform({...form,
[e.target.name]:e.target.value
})

}

const handleSubmit=(e)=>{
e.preventDefault()
console.log(form)
const err = Validate(form)
setErrors(err)
    if(Object.keys(err).length === 0){
    dispatch(createPokemon(form))
    alert("Pokemon was created successfully!")
    Setform(initialState)
    }
}

const handleSelectedtype = (e) =>{

e.preventDefault()
if(!form.type.includes(e.target.value)){
    Setform({...form, type: [...form.type, e.target.value]})
}
}
 const handleDelete = (item) =>{
Setform({ ...form, type: form.type.filter(types=> types !== item )})


 }

return(

<div>
<form onSubmit={handleSubmit}>
<div>
    <label>Name:</label>
    <input value={form.name} name="name" onChange={handleChange}/>
    {errors.name && <div>{errors.name}</div> }
</div>
<div>
    <label>Life:</label>
    <input value={form.life} name="life" onChange={handleChange}/>
    {errors.life && <div>{errors.life}</div> }
</div>
<div>
    <label>Attack:</label>
    <input value={form.attack} name="attack" onChange={handleChange}/>
    {errors.attack&& <div>{errors.attack}</div> }
</div>
<div>
    <label>Defense:</label>
    <input value={form.defense} name="defense" onChange={handleChange}/>
    {errors.defense && <div>{errors.defense}</div> }
</div>
<div>
    <label>Speed:</label>
    <input value={form.speed} name="speed" onChange={handleChange}/>
    {errors.speed && <div>{errors.speed}</div> }
</div>
<div>
    <label>Height:</label>
    <input value={form.height} name="height" onChange={handleChange}/>
    {errors.height && <div>{errors.height}</div> }
</div>
<div>
    <label>Weight:</label>
    <input value={form.weight} name="weight" onChange={handleChange}/>
    {errors.weight && <div>{errors.weight}</div> }
</div>
<select  onClick={handleSelectedtype}>
<option value="">select type</option>
{
 poketypes?.map( item =>(
  <option key={item}>{item}</option>


 ))
}

</select>


<button type= "submit">Create Pokemon</button>


</form>

<div>
{
 form.type?.map(type =>(
    <div key={type+Math.random()} onClick={()=>handleDelete(type)}>
  <button>{type} X</button>
  </div>
 ))


}


</div>



</div>
)




}