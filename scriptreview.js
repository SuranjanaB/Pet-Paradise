const userId={
    name:null,
    identity:null,
    image:null,
    message:null,
    date:null
}
const userComment=document.querySelector(".usercomment");
const btn=document.querySelector("#publish");
const comments=document.querySelector(".comments");
const userName=document.querySelector(".user");

userComment.addEventListener("input",e=>{
    if(!userComment.value){
        btn.setAttribute("disabled","disabled");
        btn.classList.remove("abled");
    }else{
        btn.removeAttribute("disabled");
        btn.classList.add("abled");
    }
});

function addPost(){
    console.log("button works");
    if(!userComment.value) return;
    userId.name=userName.value;
    if(userId.name==="Anonymous"){
        userId.identity=false;
        userId.image="/images/anon.jpeg";
    }else{
        userId.identity=true;
        userId.image="/images/photo.jpeg";
    }

    userId.message=userComment.value;
    userId.date=new Date().toLocaleString();
    let published=
    `<div class="parents">
        <img src="${userId.image}">
        <div>
            <h1>${userId.name}</h1>
            <p>${userId.message}</p>
            <span class="date">${userId.date}</span>
        </div>
    </div>`

    comments.innerHTML+=published;
    userComment.value="";

    let commentsNum=document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent=commentsNum;
}
btn.addEventListener("click",addPost);
localStorage.setItem("comments",JSON.stringify(addPost));
const comments1=JSON.parse(localStorage.getItem('addPost'));

const body=document.querySelector('body');
const container=document.querySelector('.container11');
const creat=document.createElement('div');
const creat1=document.createElement('div');
const creat2=document.createElement('div');
const creat3=document.createElement('div');
function hearts(){
    creat.classList.add('hearts');
    creat.innerHTML='❤️';

    creat1.style.left=Math.random() * 100 + 'vw';
    creat.style.animationDuration=Math.random()* 3 + 7 + 's';
    body.appendChild(creat);
}
function smiles(){
    creat1.classList.add('hearts');
    creat1.innerHTML='😊';

    creat1.style.left=Math.random() * 100 + 'vw';
    creat1.style.animationDuration=Math.random()* 3 + 7 + 's';
    body.appendChild(creat1);
}
function likes(){
    creat2.classList.add('likes');
    creat2.innerHTML='👍';

    creat2.style.left=Math.random() * 100 + 'vw';
    creat2.style.animationDuration=Math.random()* 3 + 7 + 's';
    body.appendChild(creat2);
}
function dog(){
    creat3.classList.add('dog');
    creat3.innerHTML='🦊';

    creat3.style.left=Math.random() * 100 + 'vw';
    creat3.style.animationDuration=Math.random()* 3 + 7 + 's';
    body.appendChild(creat3);
}


setInterval(smiles,5000);

setInterval(hearts,6000);

setInterval(likes,7000);

setInterval(dog,8000);