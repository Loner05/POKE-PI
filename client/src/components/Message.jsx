import React from "react";
import style from "./StyleComponents/Message.module.css"
import pikachuquest from "../media/PikachuConfused.png"
const Message = ({text}) =>{
return(
<div className={style.Messagecontainer}>
<img className={style.pikachuimg} src={pikachuquest} alt={pikachuquest} />
<p className={style.text}>{text}</p>

</div>
)
}

export default Message