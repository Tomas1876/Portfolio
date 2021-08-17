import React from 'react';
import "../scss/Project.scss";

const ProjectBox = ({pInfo, index}) =>{
{/*
    if(index%2 === 0){

        return(
            <div className="ProjectBox">
                <div className="pImg">
                    <img alt="projectImg" src={pInfo.img} />
                </div>
                <div className="pInfo">
                    <div className="title">{pInfo.title}</div>
                    <div className="subTitle">{pInfo.subtitle}</div>
                    <div className="intro">{pInfo.intro}</div>
                    <div className="skills">{pInfo.skill}</div>
                    <div className="gitHub"><a href={pInfo.github}>{pInfo.github}</a></div>
                </div>
            </div>
        );

    } else{
    
        return(
            <div className="ProjectBox">
                <div className="pInfo">
                    <div className="title">{pInfo.title}</div>
                    <div className="subTitle">{pInfo.subtitle}</div>
                    <div className="intro">{pInfo.intro}</div>
                    <div className="skills">{pInfo.skill}</div>
                    <div className="gitHub"><a href={pInfo.github}>{pInfo.github}</a></div>
                </div>
                <div className="pImg">
                    <img alt="projectImg" src={pInfo.img} />
                </div>
            </div>
        );

   }*/}
   const showinfo = (e)=>{
    console.log("마우스 오버")
    console.log(e.target);
    return (<div>"야호"</div>)
   }
   return(
    <div className="ProjectBox">
        <div className="pTitle">{pInfo.title}</div>    
        <div className="pIntro">{pInfo.intro}</div>
        <div className="pImg" onMouseOver={showinfo}>
            <img alt="projectImg" src={pInfo.img} className={index} />
        </div>
        <div className="sub">마우스 오버하시면 프로젝트 정보가 노출됩니다.</div>
    </div>

);
    
}

export default ProjectBox;