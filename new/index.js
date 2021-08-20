makeElement = (el, name)=>{
    const element = document.createElement(el)
    element.className = name;
    return element;
}

window.onload = () =>{

    const navUl = document.querySelector(".navUl")
    const menu=["HOME","PROJECT","SKILL","CONTACT"]

    for(let i =0; i < menu.length; i++){
        const li = makeElement("li", "headerMenu")
        li.innerHTML = menu[i];
        navUl.appendChild(li)
    }

    const p_container = document.querySelector(".projectContainer")

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

    for(let i =0; i < projects.length; i++){

        const p_box = makeElement("div", "projectBox");

        const title = makeElement("div", "pTitle");
        titile.createTextNode(projects[i].title)
        const intro = makeElement("div", "pIntro");
        intro.createTextNode(projects[i].intro)
        const img = makeElement("div", "pImg");
        const sub = makeElement("div", "sub");
        p_box.append(title, intro, img, sub)
        p_container.appendChild(p_box)
    }
}

