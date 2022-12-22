import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

return(
<div>
 <ul>
    <Link to='/home'>
      <li>Home</li>
    </Link>
    <Link to='/createpokemon'>
      <li>Create Pokemon</li>
    </Link>
 </ul>

</div>
)
}