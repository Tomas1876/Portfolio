/*import React , {Component} from 'react';
import Contact from './Contact';
import Home from "./Home"
import Project from './Project';
import Skill from './Skill';

class HeaderMenu extends Component {
    render(){

        console.log(this.props)
        if(this.props.link == "/"){
            return <Home />
        } else if(this.props.link == "/project"){
            return <Project />
        } else if(this.props.link == "/skill"){
            return <Skill />
        } else if(this.props.link == "/contact"){
            return <Contact />
        } else {
            return <Home />
        }

    }
}
*/
import React from 'react';
import {Link} from 'react-router-dom';


const HeaderMenu =({menu})=> {
    console.log(menu)
    return(
        <li className="headerMenu">
            <Link to={menu.link}>{menu.name}</Link>
        </li> 
    )
}

export default HeaderMenu;