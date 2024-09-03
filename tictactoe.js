let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let turn0 = true;


const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

 newgm = () => 
{
    let turn0 = true;
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText="";        
    }
    document.querySelector(".winner").setAttribute("hidden");

}
  
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if (turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;  

        checkWinner();
    });
});

function checkWinner(){
   
}

checkWinner = () =>
{
    for (let pattern of winpattern) 
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    
    
        if (pos1!="" && pos2!="" && pos3!="") {
            if (pos1===pos2 && pos2===pos3)
                {
                    winn()
                        console.log(boxes[pattern[0]].innerText);                    
                }
        }
    }

};

function winn()
{
    console.log("winner");
    let show = document.querySelector(".winner")
    show.removeAttribute("hidden");
    diss();
}

function diss() {
    for(box of boxes){
        box.disabled = true;
    }
}

// let newgame = document.querySelector("#newgame");
    reset.addEventListener("click",  newgm);
    newgame.addEventListener("click",  newgm);