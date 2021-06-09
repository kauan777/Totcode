const faqs = document.querySelectorAll(".faq")
faqs.forEach(faq =>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active")
    })
})

const btnmenu = document.getElementById("btn-menu")

btnmenu.addEventListener("click", ()=>{

    const nav = document.getElementById("navegation")
    nav.classList.toggle("active");
    nav.classList.toggle("style");
    btnmenu.classList.toggle("X")
})


let angle = 0;
// let i = 0;
// const img = document.querySelectorAll("img.img-slide")


function galleryspinright(sign){
   
    spinner = document.querySelector(".spinner");
    if(!sign){
        angle = angle + 45;
        
    }else{
        angle = angle - 45;
    }
    spinner.setAttribute("style", "transform: rotateY("+angle+"deg);")
}


// function addFront(){
//     img[i].classList.remove("selected")
//     i++
//     img[i].classList.add("selected")
// }

function galleryspinleft(sign1){
    spinner = document.querySelector(".spinner");
    if(!sign1){
        angle = angle - 45;
    }else{
        angle = angle + 45;
    }
    spinner.setAttribute("style", "transform: rotateY("+angle+"deg);")
}








