let player=document.querySelectorAll(".player1");
let filter=document.querySelectorAll(".filter1");
let filterS=document.querySelector(".filter1 .sec");
let body=document.querySelector("body");
let foot=document.querySelector(".football img");
let goal=document.querySelector(".goalpost");
let footD=document.querySelector(".football");
let filterS1=document.querySelectorAll(".filter1 .sec1");
let score=document.querySelector(".score");

let z=7;
let y=5;

let total=1;
let lastF=0;
let lastP=0;
let LastS=0;

for(let i=0;i<player.length;i++){
let player1=player[i];
let filter1=filter[i];

player1.addEventListener("click",function(){
     console.log("hero");
     if(lastF==0){
     filter1.style.backgroundColor="yellow";
     player1.style.backgroundColor="yellow";
    lastF=filter1;
    lastP=player1;
    lastS=filterS1[i]
     }else{
        lastF.style.backgroundColor="rgb(235, 19, 19)";
        lastP.style.backgroundColor="greenyellow";

        filter1.style.backgroundColor="yellow";
        player1.style.backgroundColor="yellow";
       lastF=filter1;
       lastP=player1; 
       lastS=filterS1[i]
       foot.style.marginTop="7%";
     }
})

}

for(let i=0;i<player.length;i++){
    let player1=player[i];

player1.addEventListener("dblclick",function(e){
    console.log("in");
    let in1 = document.createElement("input");
    in1.addEventListener("keydown", function (e) {
        console.log(e.key);
        let z=in1.value.length;
        if (e.key == "Enter" && z>4 ){
         lastF.innerText=in1.value
         in1.remove(); 
        }else if(z<5 && e.key == "Enter"){
            alert("player name should be at least 5 characters long ")
        }

    })
    player1.appendChild(in1);
})

}

foot.addEventListener("click",function(){
    console.log("football");
    z=z+2;
    y=y+3;
    if(total==5){
        z=7;
        y=5;
        foot.style.height=z +"vh";
        foot.style.width=y+ "vw";   
        total=1;
    }
    else{
    foot.style.height=z + "vh";
    foot.style.width=y+ "vw";
    total++;
    }
})

document.addEventListener("keydown",function(e){
    
    if(e.key=="ArrowUp"){
        console.log(e.key);
        foot.style.marginTop="7%";
    }
    if(e.key=="ArrowDown"){
        console.log(e.key);
        foot.style.marginBottom="7%";
    }
    if(e.key=="ArrowLeft"){
        console.log(e.key);
        foot.style.marginLeft="40%";

    } if(e.key=="ArrowRight"){
        console.log(e.key);
        foot.style.marginRight="7%";
    }
    
})

goal.addEventListener("click",function(e){

    if(LastS==undefined){
          alert("select any player")
          return;
      }
    foot.style.marginTop="-5%";
    let z23=lastS.innerText
    z23=parseInt(z23) +1;
    lastS.innerText=z23;
 
    setTimeout(function(){
        foot.style.marginTop="8%";   
    },500);

})

score.addEventListener("click",function(e){
    if(LastS==undefined){
        alert("select any player")
    }

    foot.style.marginTop="-26%";
    let z23=lastS.innerText
    z23=parseInt(z23) -1;
    lastS.innerText=z23;
})


