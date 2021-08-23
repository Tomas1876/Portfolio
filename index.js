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
         intro:" 사이코딩이라는 사이트명은 '사이좋게 코딩한다'의 줄임말입니다."
                +" 프로젝트를 함께 할 멤버를 구인하거나, 참여하고 싶은 프로젝트를 찾을 수 있도록"
                +"멤버 등록과 프로젝트 게시글 등록을 할 수 있으며 입력한 정보를 바탕으로 알맞은"
                +"프로젝트를 추천하는 기능을 제공합니다."
                +" 팀 프로젝트로 회원가입과 로그인, 마이페이지와 웹소켓을 이용한 쪽지 보내기, 실시간 알림 기능을 담당했습니다.", 
         img:"img/p_cycoding02.png",
         skill:"JavaScript, jQuery, Html, Css, Jsp, Spring, MyBatis, Oracle", 
         github:"https://github.com/DongGeun2/Spring_Final_Project",
         link:"http://3.36.159.228:8090/Cycoding/"},
         {title:"PORTFOLIO",
         subtitle:"포트폴리오 웹사이트",
         intro:" 지금 보고 계신 이 페이지로 개인 포트폴리오 사이트입니다."
                +" 순수 자바스크립트를 이용해 웹 페이지를 제작하는 것에 초점을 맞추었습니다.", 
         img:"img/p_portfolio.png",
         skill:"JavaScript, Html, SCSS", 
         github:"https://github.com/Tomas1876/Portfolio"},
         {title:"BIT_SECONDHANDS",
         subtitle:"중고거래 사이트",
         intro:" 번개장터를 벤치마킹한 중고거래 쇼핑몰입니다. 상품 등록, 찜, 상점 댓글 기능 등을 제공합니다."
            +" 팀 프로젝트로 메인 페이지와 상품 상세, 내 상품 관리 페이지를 담당했습니다.", 
         img:"img/p_secondhands.png",
         skill:"JavaScript, jQuery, Html, Css, Jsp, Java, Oracle", 
         github:"https://github.com/Tomas1876/BIT_SECONDHANDS"}
    ]

    //프로젝트 박스
    for(let i =0; i < projects.length; i++){
        const p_box = makeElement("div", "projectBox");
        const pTitle = makeElement("div", "pTitle", projects[i].title);

        const pImg = makeElement("div", "pImg");
        const img = makeElement("img", "projectImg");
        img.setAttribute("src",projects[i].img)     
        pImg.append(img);

        const infoBox = makeElement("div", "infoBox");
        const pIntro = makeElement("div", "pIntro", projects[i].intro);
        const skill = makeElement("div", "skill",`주요 기술 : ${projects[i].skill}`);
        const github = makeElement("div", "githuburl");
        github.innerHTML = `<a href=${projects[i].github}>Github : ${projects[i].github}</a>`
        infoBox.append(pIntro, skill);
        if(projects[i].link != null || projects[i].link != undefined ){
            const link = makeElement("p","link")
            link.innerHTML = `<a href=${projects[i].link}>사이트 방문하기</a>`
            infoBox.append(link)
        }
        infoBox.append(github)
        const p_section = makeElement("div","p_section")
        p_section.append(pImg, infoBox)
        p_box.append(pTitle,p_section)
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
        swal("Thank you", "깃허브 주소를 복사했습니다", "success")
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
        let from = document.querySelector(".reply_to").innerHTML;
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
                 swal("Thank you", "메일을 전송했습니다", "success")
         	}, function(error) {
                swal("Error", "잠시 후 다시 시도해주세요", "error")
         	});
    }));

    //이메일 전송 전, 내용 영역 클릭시 입력하세요 글자 사라지게 하기
    document.querySelector("#textarea").addEventListener('click',(()=>{
        document.querySelector('#textarea').innerHTML="";
    }));

}

