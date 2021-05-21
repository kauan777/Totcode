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
