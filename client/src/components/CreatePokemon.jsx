import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon ,getTypes} from "../redux/actions";
import style from "./StyleComponents/CreatePokemon.module.css"

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
if(!form.type.includes(e.target.value) && e.target.value !== "select type"){
    Setform({...form, type: [...form.type, e.target.value]})
}
}
 const handleDelete = (item) =>{
Setform({ ...form, type: form.type.filter(types=> types !== item )})


 }

return(
<div>
<div className={style.Container}>
<div className={style.Formcard}>
<form  className={style.Form} onSubmit={handleSubmit}>
<div className={style.Form_labelinputs}>
    <label >Name:</label>
    <input   className={style.Form_inputs} value={form.name} name="name" onChange={handleChange}/>
    {errors.name && <div>{errors.name}</div> }
</div>
<div className={style.Form_labelinputs}>
    <label >Life:</label>
    <input   className={style.Form_inputs} value={form.life} name="life" onChange={handleChange}/>
    {errors.life && <div>{errors.life}</div> }
</div>
<div className={style.Form_labelinputs}>
    <label >Attack:</label>
    <input  className={style.Form_inputs} value={form.attack} name="attack" onChange={handleChange}/>
    {errors.attack&& <div>{errors.attack}</div> }
</div>
<div className={style.Form_labelinputs}>
    <label>Defense:</label>
    <input  className={style.Form_inputs}  className={style.Form_inputs} value={form.defense} name="defense" onChange={handleChange}/>
    {errors.defense && <div>{errors.defense}</div> }
</div>
<div className={style.Form_labelinputs}>
    <label >Speed:</label>
    <input   className={style.Form_inputs}  className={style.Form_inputs} value={form.speed} name="speed" onChange={handleChange}/>
    {errors.speed && <div>{errors.speed}</div> }
</div>
<div className={style.Form_labelinputs}>
    <label >Height:</label>
    <input  className={style.Form_inputs}  className={style.Form_inputs} value={form.height} name="height" onChange={handleChange}/>
    {errors.height && <div>{errors.height}</div> }
</div>
<div className={style.Form_labelinputs}>
    <label >Weight:</label>
    <input  className={style.Form_inputs} value={form.weight} name="weight" onChange={handleChange}/>
    {errors.weight && <div>{errors.weight}</div> }
</div>
<select  onClick={handleSelectedtype}>
<option selected disabled defaultValue >select type</option>
{
 poketypes?.map( item =>(
  <option key={item}>{item}</option>


 ))
}

</select>







<div  className={style.temperamentsArrow}>
{
 form.type?.map(type =>(
    <div key={type+Math.random()} onClick={()=>handleDelete(type)}>
  <button className={style.Form_buttontemp}>{type} X</button>
  </div>
 ))


}
</div>
<button className={style.Form_buttonsubmit} type= "submit">Create Pokemon</button>
</form>


</div>


</div>
</div>
)




}