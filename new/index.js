window.onload = () =>{
    console.log(document)
    const navUl = document.querySelector("ul")
    const menu=["HOME","PROJECT","SKILL","CONTACT"]

    for(let i =0; i < menu.length; i++){
        const li = document.createElement("li");
        li.innerHTML = menu[i];
        li.className ="headerMenu"
        console.log(navUl)
        navUl.appendChild(li)
    }
}

