let circlebox=document.querySelectorAll(".circle");
let contactContainer=document.querySelector(".contact-preview-container");
let contactbox=document.querySelectorAll(".contact-preview");

circlebox.forEach(circle=>{
    circle.onclick=()=>{
        contactContainer.style.display="flex";
        let name1=circle.getAttribute("data-name");
        contactbox.forEach(contact=>{
            let target1=contact.getAttribute("data-target");
            if(name1==target1){
                contact.classList.add("active");
                console.log(target1);
            }
        });
    };
});

contactbox.forEach(close=>{
    close.querySelector(".concross").onclick=()=>{
        contactContainer.style.display="none";
        close.classList.remove("active");
    }
});

let donate=document.querySelector(".conc-donate");
let qrcode=document.querySelector(".qrcode");
let qr=document.querySelector(".qr");
donate.onclick=()=>{
    qrcode.style.display="flex";
    qr.classList.add("active");
};
let cross=document.querySelector(".qrcross");
cross.onclick=()=>{
    qrcode.style.display="none";
    qr.classList.remove("active");
}