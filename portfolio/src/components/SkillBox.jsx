import React from 'react';

const SkillBox = ({skills}) =>{
    console.log(skills)
   return(
    <div className="skillBox">
        <img src={skills.src} />
    </div>

);
    
}

export default SkillBox;