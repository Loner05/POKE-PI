import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getpokemon } from "../redux/actions/index";
import style from "./StyleComponents/Search.module.css"
import logo from "../media/search-logo.png"



const SearchBar = () =>{
    let clean = []
    const[input,setInput] = useState(clean)
    const dispatch = useDispatch()
    const handleChange = (e) =>{
         console.log(input)
        e.preventDefault()
        setInput(e.target.value)
         dispatch(getpokemon(input))
      

}
return(
    <div className={style.Searchcontainer}>
    <div className={style.input_wrapper} >
      <input className={style.SearchBar_inputsearch} type="text" placeholder="Search" onChange={handleChange}/>
      <img className={style.SearchBar_inputlogo} src={logo} alt="" />
    </div>
    </div>
)
}

export default SearchBar