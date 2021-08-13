import React from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Logo from "../img/logo02.png";
import GitLogo from "../img/github.jpg";
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';

export const imgUrl = "../img/";
const Header = () =>{
    console.log("헤더 렌더링")
    return(
        <BrowserRouter>       
        <nav>
            <div class="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="navUl">
                <li className="headerMenu"><Link to="/home">HOME</Link></li>            
                <li className="headerMenu"><Link to="/project">PROJECT</Link></li>                
                <li className="headerMenu"><Link to="/skills">SKILLS</Link></li>               
                <li className="headerMenu"><Link to="/about">ABOUT</Link></li>               
            </ul>
            <div class="logo"><img src={GitLogo} alt="github" /></div>
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