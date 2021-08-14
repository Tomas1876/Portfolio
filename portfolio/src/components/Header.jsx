import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Logo from "../img/logo02.png";
import Home from './Home';
import Project from './Project';
import Skills from './Skills';
import About from './About';
import HeaderMenu from './HeaderMenu';

export const imgUrl = "../img/";
const Header = () =>{
    console.log("헤더 렌더링")
    const menu=[
        {link:"/home", name:"HOME"},
        {link:"/project", name:"PROJECT"},
        {link:"/skills",name:"SKILLS"},
        {link:"about", name:"ABOUT"}
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
            <Route path="/home" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/skills" component={Skills} />
            <Route path="/about" component={About} />
        </Switch>
        </BrowserRouter>
    );    
};

export default Header;