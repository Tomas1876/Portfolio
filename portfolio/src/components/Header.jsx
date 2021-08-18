import React,{useRef} from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Logo from "../img/logo02.png";
import Home from './Home';
import Project from './Project';
import Skill from './Skill';
import Contact from './Contact';
import HeaderMenu from './HeaderMenu';

export const imgUrl = "../img/";
const Header = () =>{
    console.log("헤더 렌더링")
    const menu=[
        {link:"/", name:"HOME"},
        {link:"/project", name:"PROJECT"},
        {link:"/skill",name:"SKILL"},
        {link:"/contact", name:"CONTACT"}
    ]
    const toggleMenu=()=>{

    }
    return(
        <BrowserRouter>       
        <nav>
            <div className="nav"></div>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="navUl">
                {menu.map((v)=>{
                    return( <HeaderMenu menu={v} key={v}/>)
                })}              
            </ul>
            <div className="toggleBtn" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
        </nav>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/skill" component={Skill} />
            <Route path="/contact" component={Contact} />
        </Switch>
        </BrowserRouter>
    );    
};

export default Header;