let btn = document.getElementById("btn")
let hexcode = document.getElementById("hexcode")

function randomColor(){
    let letters = "123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

btn.addEventListener("click", ()=>{
    document.body.style.background = randomColor();
    hexcode.textContent = randomColor();
})

