let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","purple"];
let started=false;
let level=0;

document.addEventListener("click",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
})

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
})
let h2=document.querySelector("h2");
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`)

    gameseq.push(randcolor);
    gameflash(randbtn);
}

function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250)
}
function userflash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash");
   },250)
}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        } }
        else{
            h2.innerHTML=`Game Over! your score was <b>${level}</b> <br> press any key to start`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
               document.querySelector("body").style.backgroundColor="white";
            },150)
            reset();
        }
    }


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function btnpress(){
  let btn=this;
  userflash(btn);

  let usercolor=btn.getAttribute("id");
  userseq.push(usercolor);

  checkans(userseq.length-1);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
