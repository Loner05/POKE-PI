import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getpokemon, setLoading } from "../redux/actions/index";
import style from "./StyleComponents/Search.module.css"
import logo from "../media/search-logo.png"



const SearchBar = () =>{
    
    const[input,setInput] = useState("")
    const loading = useSelector( state => state.loading)
    const dispatch = useDispatch()
    const handleChange = (e) =>{
         console.log(input)
       
        setInput(e.target.value)
         
}

const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(getpokemon(input))
    dispatch(setLoading(true))
    setInput("")
 

}
return(
    <div className={style.Searchcontainer}>
    <div className={style.input_wrapper} >
        <form onSubmit={(e) => handleSubmit(e)}>
      <input className={style.SearchBar_inputsearch} type="text" placeholder="Search" onChange={handleChange}/>
    <img className={style.SearchBar_inputlogo} src={logo} alt="" />
     </form>
    </div>
    </div>
)
}

export default SearchBar