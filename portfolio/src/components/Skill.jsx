import React, {Component} from 'react';
import "../scss/Skill.scss";
import SkillBox from './SkillBox';
import css from "../img/css.png"
import html from "../img/html.png"
import js from "../img/js.png"
import sass from "../img/sass.png"
import java from "../img/java.png"
import spring from "../img/spring.png"

class Skill extends Component {

    render(){
        const img = "../img/"
        const skills=[{src:css}, {src:html}, {src:js}, {src:sass}, {src:java}, {src:spring}]
        console.log("스킬 렌더링")
        return(
            <section className="skillContainer">
                <div className="skillWrap">
                    {skills.map((v)=> <SkillBox skills={v} key={v.src}/>)}
                </div>
            </section>
        );
    }
}

export default Skill;