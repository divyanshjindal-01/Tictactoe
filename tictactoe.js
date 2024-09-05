// variables
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let show = document.querySelector(".winner")
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

//function for new game\reset button
 reload = () => 
{
    let turn0 = true;
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText="";
        show.setAttribute("hidden","show");        
    }
    

}
  // main function
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

// function for checking winner 
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
// nested function for winner function
function winn()
{
    console.log("winner");
    show.removeAttribute("hidden");
    disable();
}
 // nested function for winn function to disable buttons
function disable() {
    for(box of boxes){
        box.disabled = true;
    }
}

// let newgame = document.querySelector("#newgame");
    reset.addEventListener("click",  reload);
    newgame.addEventListener("click",  reload);