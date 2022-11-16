const innInput = document.querySelector("#innInput")
const innCheck = document.querySelector(".innCheck")
const innResult = document.querySelector(".innResult")

const innRegExp = /^0|1\d{13}$/


innCheck.addEventListener("click",()=>{

    if(innRegExp.test(innInput.value)){
        innResult.innerText = "success"
        innResult.style.color = "green"
    }else{
        innResult.innerText = "unsuccess"
        innResult.style.color = "red"
    }
})
