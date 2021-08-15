import React, {useRef, useState} from 'react';
import '../scss/Home.scss';
import '../scss/Header.scss';
import Logo from "../img/logo01.png";
import Down from "../img/down.png";
import Header from "./Header";
import Project from './Project';
import Skills from './Skills';


const Home =()=> {
    const tabRef = useRef([]);
    const scrollRef = useRef();
    const menu=[
        {link:"/", name:"HOME"},
        {link:"/project", name:"PROJECT"},
        {link:"/skills",name:"SKILLS"},
        {link:"about", name:"ABOUT"}
        ]
    const [currentTab,setCurrentTab] = useState();
    const pageDown = () =>{
        scrollRef.current.scrollIntoView({inline:"center", behavior: 'smooth'})
    }
    
    console.log("홈 렌더링")

    return(
        <>
        <header>
        <nav>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="navUl">
                {menu.map((v, i)=>{
                   return( <li className="headerMenu" onClick={() => {
                    tabRef.current[i].scrollIntoView({behavior: "smooth"});
                    setCurrentTab(tabRef.current[i]);
                  }} key={v}>{v.name}</li>);
                })}              
            </ul>
            <div className="toggleBtn">
                <i className="fas fa-bars"></i>
            </div>
        </nav>
             
        </header>
        <article>
            <section className="HomeContainer" ref={(el) => (tabRef.current[0] = el)}>
                <div className="logoBox">
                    <img alt="logo" src={Logo} />
                </div>
                <div className="mainTitle">
                    <p>안녕하세요<br />웹개발자 이가희입니다</p>
                </div>
                <div className="down"><i className="fas fa-chevron-down" ref={scrollRef} onClick={pageDown}></i></div>              
            </section>
            <section className="ProjectContainer" ref={(el) => (tabRef.current[1] = el)}>
                <Project />
            </section>
            <section className="SkillsContainer" ref={(el) => (tabRef.current[2] = el)}>
                <Skills />
            </section>
        </article>
        </>
    );
}

export default Home;