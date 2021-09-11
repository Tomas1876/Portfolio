window.onload = () => {
    {
        const navUl = document.querySelector(".navUl")
        const h_menu = document.getElementsByClassName("headerMenu")
        const sections = document.querySelectorAll("section")

        scroll = (s) => {
            s.scrollIntoView({ behavior: "smooth" })
            const target = event.target
        }

        //반응형 헤더 메뉴
        const toggleBtn = document.querySelector('.toggleBtn');

        toggleBtn.addEventListener('click', () => {
            navUl.classList.toggle('active')
        })
        //반응형, 그 중에서도 메뉴 펼쳐졌을 때만 작동하게 하기
        navUl.addEventListener('click', () => {
            if (navUl.classList.contains('active')) {
                navUl.classList.toggle('active')
            }
        })

        Array.from(h_menu).forEach((v, i) => {
            v.onclick = () => { scroll(sections[i]) }
        })
    }

    loadItems = () => {
        return fetch('data/data.json')
            .then(response => response.json())
            .then(json => json)
    }
    loadItems()
        .then(json => {
            showProjectInfo(json.projects);
            showSkills(json.skills);
        })
        .catch(console.log)

    //박스 만들기
    createBox = (string, type) => {
        const container = document.querySelector(`.${type}Wrap`)
        container.innerHTML = string;
    }

    let p_info = '';
    //프로젝트 박스
    showProjectInfo = (projects) => {
        for (let i = 0; i < projects.length; i++) {
            p_info += `<div class="projectBox">
                            <div class="pTitle">${projects[i].title}</div>
                            <div class="p_section">
                                <div class="pImg"><img class="projectImg" src="${projects[i].img}"></div>
                                <div class="infoBox">
                                    <div class="pIntro"> ${projects[i].intro}</div>
                                    <div class="skill">주요 기술 : ${projects[i].skill}</div>
                                    <div class="url">
                                        <p class="githuburl"><a href="${projects[i].github}" target="_blank">깃허브 방문하기</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>`
        }
        createBox(p_info, 'project');

    }
    //스킬 박스
    let skill_img = '';
    showSkills = (skills) => {
        for (let i = 0; i < skills.length; i++) {
            skill_img += `<img class="skillBox" src="${skills[i]}">`
        }
        createBox(skill_img, 'skill');
    }

    //이메일, 깃허브 주소 자동 복사
    let clipboard = new Clipboard('#copyGit');
    clipboard.on('success', function (e) {
        console.log(e);
        swal("Thank you", "깃허브 주소를 복사했습니다", "success")
    });
    clipboard.on('error', function (e) {
        console.log(e);
    });

    let clipboard2 = new Clipboard('#copyMail');
    clipboard2.on('success', function (e) {
        console.log(e);
    });
    clipboard2.on('error', function (e) {
        console.log(e);
    });
    //write = (v)=> {
    //    document.querySelector(".github").value = v;
    //}

    //contact 부분 이메일
    emailjs.init("user_7vUM1GIt3vDSx1wu7bqFu");

    document.querySelector('button[name=submit]').addEventListener('click', ((e) => {
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
            reply_to: reply_to.value,
            message: message.value
        };
        emailjs.send('gmail', 'template_rmvi8tw', templateParams)
            //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                swal("Thank you", "메일을 전송했습니다", "success")
            }, function (error) {
                swal("Error", "잠시 후 다시 시도해주세요", "error")
            });
    }));

    //이메일 전송 전, 내용 영역 클릭시 입력하세요 글자 사라지게 하기
    document.querySelector("#textarea").addEventListener('click', (() => {
        document.querySelector('#textarea').innerHTML = "";
    }));

}

