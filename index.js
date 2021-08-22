makeElement = (el, name, text)=>{

    const element = document.createElement(el)
    element.className = name;
    if(text != null){
        const textNode = document.createTextNode(text);
        element.append(text)
    }
    return element;
}


window.onload = () =>{
    {
    const navUl = document.querySelector(".navUl")
    const menu=["HOME","PROJECT","SKILL","CONTACT"]

    for(let i =0; i < menu.length; i++){
        const li = makeElement("li", "headerMenu")
        const line = makeElement("div","menuLine")
        li.innerHTML = menu[i];
        navUl.appendChild(li)
        li.append(line)
    }

    const h_menu = document.getElementsByClassName("headerMenu")
    const sections = document.querySelectorAll("section")

    scroll=(s)=>{
        s.scrollIntoView({behavior: "smooth"})
        const target = event.target
        const h_menu = document.getElementsByClassName("headerMenu")
        Array.from(h_menu).forEach((v)=>{
            v == target? v.classList.add("currentTab") : v.classList.remove("currentTab")
        })
    }

    //반응형 헤더 메뉴
    const toggleBtn = document.querySelector('.toggleBtn');

    toggleBtn.addEventListener('click', ()=>{
        navUl.classList.toggle('active')   
    })
    //반응형, 그 중에서도 메뉴 펼쳐졌을 때만 작동하게 하기
    navUl.addEventListener('click',()=>{   
        if(navUl.classList.contains('active')){
            navUl.classList.toggle('active')
        }
    })

    Array.from(h_menu).forEach((v, i)=>{
       v.onclick = () => {scroll(sections[i])}      
    })
}
    const p_container = document.querySelector(".projectContainer")
    const projects = [
        {title:"CYCODING",
         subtitle:"사이좋게 코딩하자",
         intro:"참여하고 싶은 프로젝트 혹은 프로젝트를 함께 할 멤버를 찾아주는 사이트", 
         img:"img/p_cycoding02.png",
         skill:"Spring", 
         github:"https://github.com/DongGeun2/Spring_Final_Project"},
         {title:"Portfolio Website",
         subtitle:"포트폴리오 웹사이트",
         intro:"지금 보고 계신 이 페이지", 
         img:"img/p_portfolio.png",
         skill:"Spring", 
         github:"https://github.com/Tomas1876/Portfolio"},
         {title:"BIT_SECONDHANDS",
         subtitle:"중고거래 사이트",
         intro:"번개장터를 벤치마킹", 
         img:"img/p_secondhands.png",
         skill:"Spring", 
         github:"https://github.com/Tomas1876/BIT_SECONDHANDS"}
    ]

    //프로젝트 박스
    for(let i =0; i < projects.length; i++){
        const p_box = makeElement("div", "projectBox");
        const pTitle = makeElement("div", "pTitle", projects[i].title);

        const pImg = makeElement("div", "pImg");
        const img = makeElement("img", "projectImg");
        img.setAttribute("src",projects[i].img)
        const infoBox = makeElement("div", "infoBox");
        const pIntro = makeElement("div", "pIntro", projects[i].intro);
        const skill = makeElement("div", "skill",projects[i].skill);
        const github = makeElement("div", "githuburl", projects[i].github);
        infoBox.append(pIntro, skill,github)
        pImg.append(img, infoBox);

        p_box.append(pTitle, pImg)
        p_container.appendChild(p_box)
    }


    const imgsrc = "img/"
    const skills=[`${imgsrc}html.png`,
                `${imgsrc}js.png`,
                `${imgsrc}css.png`,
                `${imgsrc}sass.png`,
                `${imgsrc}react.png`,
                `${imgsrc}java.png`,
                `${imgsrc}spring.png`]
    const skillWrap = document.querySelector(".skillWrap");
    for(let i =0; i<skills.length; i++){
        const img = makeElement("img","skillBox")
        img.setAttribute("src", skills[i])
        skillWrap.appendChild(img)

    }

    //이메일, 깃허브 주소 자동 복사
    let clipboard = new Clipboard('#copyGit');
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });

    let clipboard2 = new Clipboard('#copyMail');
    clipboard2.on('success', function(e) {
        console.log(e);
    });
    clipboard2.on('error', function(e) {
        console.log(e);
    });
    //write = (v)=> {
    //    document.querySelector(".github").value = v;
    //}

    //contact 부분 이메일
    emailjs.init("user_7vUM1GIt3vDSx1wu7bqFu");
    
    
    document.querySelector('button[name=submit]').addEventListener('click',((e)=>{       	 
        e.preventDefault();
        let text = document.querySelector('#textarea').innerHTML;
        let message = document.querySelector('input[name=message]');
        message.value = text;
        //let from_name = document.querySelector('input[name=from_name]');
        let reply_to = document.querySelector('input[name=reply_to]');
        let templateParams = {	
        //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
           // from_name: from_name.value,
            reply_to : reply_to.value,
            message : message.value
        };       	
        emailjs.send('gmail', 'template_rmvi8tw', templateParams)
        //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
         	.then(function(response) {
         	    console.log('SUCCESS!', response.status, response.text);
         	}, function(error) {
         	    console.log('FAILED...', error);
         	});
    }));

    //이메일 전송 전, 내용 영역 클릭시 입력하세요 글자 사라지게 하기
    document.querySelector("#textarea").addEventListener('click',(()=>{
        document.querySelector('#textarea').innerHTML="";
    }));

}

