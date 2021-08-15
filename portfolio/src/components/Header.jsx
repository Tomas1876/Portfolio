import React, {Component} from 'react';
import Logo from "../img/logo02.png";
import Home from './Home';
import Project from './Project';
import Skills from './Skills';
import About from './About';
import HeaderMenu from './HeaderMenu';

export const imgUrl = "../img/";
class Header extends Component {
    constructor(props){
        super(props)

    }
    
    render (){
        console.log("얍"+this.props)
    const menu=[
        {link:"/", name:"HOME"},
        {link:"/project", name:"PROJECT"},
        {link:"/skills",name:"SKILLS"},
        {link:"about", name:"ABOUT"}
        ]
    
    const toggleMenu=()=>{

    }

     
    return(
     
        <nav>
            <div className="nav"></div>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="navUl">
                {menu.map((v, i)=>{
                    return( <HeaderMenu menu={v} key={v} />)
                })}              
            </ul>
            <div className="toggleBtn" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
        </nav>

    );
    }    
}
export default Header;