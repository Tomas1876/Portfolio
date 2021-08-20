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
         img:"img/p_cycoding.png",
         skill:"Spring", 
         github:"https://github.com/DongGeun2/Spring_Final_Project",
         sub:"마우스를 오버하시면 프로젝트 정보가 노출됩니다"},
         {title:"BIT_SECONDHANDS",
         subtitle:"중고거래 사이트",
         intro:"번개장터를 벤치마킹", 
         img:"img/p_cycoding.png",
         skill:"", 
         github:"https://github.com/Tomas1876/BIT_SECONDHANDS",
         sub:"마우스를 오버하시면 프로젝트 정보가 노출됩니다"}
    ]

    for(let i =0; i < projects.length; i++){
        const p_box = makeElement("div", "projectBox");
        const pTitle = makeElement("div", "pTitle");
        console.log(projects[i].title)
        const title = document.createTextNode(projects[i].title);
        pTitle.append(title)
        const pIntro = makeElement("div", "pIntro");
        const intro = document.createTextNode(projects[i].intro);
        pIntro.append(intro)
        const pImg = makeElement("div", "pImg");
        const img = makeElement("img", "projectImg");
        img.setAttribute("src",projects[i].img)
        pImg.append(img);
        const sub = makeElement("div", "sub");
        const subText = document.createTextNode(projects[i].sub);
        sub.append(subText)
        p_box.append(pTitle, pIntro, pImg, sub)
        p_container.appendChild(p_box)
    }
}

