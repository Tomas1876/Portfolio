import React, {useRef} from 'react';
import '../scss/Home.scss';
import Logo from "../img/logo01.png";
import Down from "../img/down.png";
import Project from './Project';

const Home =()=> {
    const scrollRef = useRef();
    const pageDown = () =>{
        scrollRef.current.scrollIntoView({inline:"center", behavior: 'smooth'})
    }
    console.log("홈 렌더링")

    return(
        <article>
            <section className="HomeContainer">
                <div className="logoBox">
                    <img alt="logo" src={Logo} />
                </div>
                <div className="mainTitle">
                    <p>안녕하세요<br />웹개발자 이가희입니다</p>
                </div>
                <div className="down"><i className="fas fa-chevron-down" ref={scrollRef} onClick={pageDown}></i>
                {/* <img alt="down" src={Down} />*/}</div>              
            </section>
            <section className="ProjectContainer">
                <Project />
            </section>
        </article>
    );
}

export default Home;