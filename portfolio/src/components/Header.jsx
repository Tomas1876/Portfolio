import React,{useRef} from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Logo from "../img/logo02.png";
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import HeaderMenu from './HeaderMenu';

export const imgUrl = "../img/";
const Header = () =>{
    console.log("헤더 렌더링")
    const menu=[
        "HOME","PROJECT","SKILLS","ABOUT"
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
            <Route path="/project" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/about" component={About} />
        </Switch>
        </BrowserRouter>
    );    
};

export default Header;