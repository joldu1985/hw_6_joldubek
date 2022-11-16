let i = 0

const interval = setInterval(()=>{
    i++;
    console.log(`прошло ${i} сек`)
    if(i===60){
        clearInterval(interval)
    }
},1000)

//--------------------------------------------------------------


const block = document.querySelector(".block")

let a = 0;
let b = 0;


const setup = () =>{
    if(a <= 440 && b == 0){ 
        a += 15;
        block.style.left = `${a}px`;
        setTimeout(setup , 50);
    }else if(a >= 440 && b <= 440){
        b += 15;
        block.style.top = `${b}px`;
        setTimeout(setup , 50)
    }else if (a != 0 && b >= 440){
        a -= 15;
        block.style.left = `${a}px`;
        setTimeout(setup , 50)
    }else if(a == 0 && b != 0){
        b -= 15;
        block.style.top = `${b}px`;
        setTimeout(setup , 50)
    }


}
setup()
