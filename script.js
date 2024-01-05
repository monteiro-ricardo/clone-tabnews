const jotaro = document.querySelector(".jotaro");
const pipe = document.querySelector(".pipe")

const jump = () => {
    jotaro.classList.add ("jump")
    
    setTimeout(() => {
            jotaro.classList.remove("jump");
        
    }, 500)
}   


const loop = setInterval (() => {
    
    const pipePosition = pipe.offsetLeft;
    const jotaroPosition = +window.getComputedStyle(jotaro).bottom.replace("px", "");
    
    console.log(jotaroPosition)
    
    if (pipePosition <= 120 && pipePosition > 0 && jotaroPosition < 110) {
    
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        jotaro.style.animation = "none";
        jotaro.style.bottom = `${jotaroPosition}px`;

        jotaro.src= "./IMAGES/31149.png"

        clearInterval(loop)

        
    }
}, 10)

 document.addEventListener("keydown", jump);
 