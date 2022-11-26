const name = document.querySelector(".name");
const age = document.querySelector(".age");
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", ()=>{
        const data = JSON.parse(request.response);
        console.log(data);
        name.innerHTML=data.name;
        age.innerHTML=data.age;
    });
});