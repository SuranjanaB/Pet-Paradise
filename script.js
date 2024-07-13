console.log("hello");
let conbox=document.querySelectorAll(".continue");
let previewcont=document.querySelector(".preview-data");
let previewbox=document.querySelectorAll(".preview");

conbox.forEach(product=>{
    product.onclick=()=>{
        previewcont.style.display="flex";
        let name=product.getAttribute("data-name");
        previewbox.forEach(preview=>{
            let target=preview.getAttribute("data-target");
            if(name==target){
                preview.classList.add("active");
                console.log(target);
            }
        });
    };
});

previewbox.forEach(close=>{
    close.querySelector(".cross").onclick=()=>{
        previewcont.style.display="none";
        close.classList.remove("active");
    }
});

var typed = new Typed(".text1",{
    strings: ["Welcome to PET PARADISE"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
ScrollReveal({
    reset: true,
    distance:'40px',
    duration:2500,
});

ScrollReveal().reveal('.lead',{delay:400,origin: 'right'});
ScrollReveal().reveal('.store',{delay:500,origin: 'bottom'});