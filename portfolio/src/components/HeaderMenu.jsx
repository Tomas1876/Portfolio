import React , {Component} from 'react';
import Home from "./Home"

class HeaderMenu extends Component {
    render(){
        console.log(this.props)
        if(this.props.match.params.name == "home"){
            return <Home />
        } else if(this.props.match.params.name == "project"){
            return
        } else if(this.props.match.params.name == "skills"){
            return 
        } else if(this.props.match.params.name == "about"){
            return 
        }

    }
}

export default HeaderMenu;