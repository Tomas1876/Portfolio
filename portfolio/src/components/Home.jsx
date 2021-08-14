import React, {Component} from 'react';
import '../scss/Home.scss';
import Logo from "../img/logo01.png";

class Home extends Component {

    render(){
        console.log("홈 렌더링")
        
        return(
            <main className="HomeMain">
                <div className="logoBox">
                    <img alt="logo" src={Logo} />
                </div>
                <div className="mainTitle">
                    <p>안녕하세요<br />웹개발자 이가희입니다</p>
                </div>
                <div><i className="fas fa-chevron-down"></i></div>
            </main>
        );
    }

}

export default Home;