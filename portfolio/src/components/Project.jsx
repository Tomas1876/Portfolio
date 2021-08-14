import React from 'react';
import Cycoding_img from "../img/p_cycoding.png"
import ProjectBox from "./ProjectBox"

const projects = [
    {title:"CYCODING",
     subtitle:"사이좋게 코딩하자",
     intro:"참여하고 싶은 프로젝트 혹은 프로젝트를 함께 할 멤버를 찾아주는 사이트", 
     img:Cycoding_img,
     skill:"Spring", 
     github:"https://github.com/DongGeun2/Spring_Final_Project"},
     {title:"BIT_SECONDHANDS",
     subtitle:"중고거래 사이트",
     intro:"번개장터를 벤치마킹", 
     img:Cycoding_img,
     skill:"", 
     github:"https://github.com/Tomas1876/BIT_SECONDHANDS"}
]
const Project = () => {
        console.log("프로젝트 렌더링")
        return(
            <>
            {projects.map((v, i)=><ProjectBox pInfo={v} index={i}/>)}
            </>
        );
    

}

export default Project;