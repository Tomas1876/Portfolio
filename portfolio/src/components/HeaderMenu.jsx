import React from 'react';
import {Link} from 'react-router-dom';


const HeaderMenu =({menu})=> {
    console.log(menu)
    return(
        <li className="headerMenu">
            {menu.name}
        </li> 
    )
}

export default HeaderMenu;