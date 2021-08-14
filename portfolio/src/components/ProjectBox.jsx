import React from 'react';
import "../scss/Project.scss";

const ProjectBox = ({pInfo, index}) =>{

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

    }
    
}

export default ProjectBox;