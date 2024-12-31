let btns = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msg = document.querySelector("#msg");
let container = document.querySelector(".msg-container");
// let gContainer = document.querySelector("main");

let turn = true;
let count = 0;


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("Button was Clicked !");
        count++;
        if (turn === true) {
            btn.innerText = "O";
            turn = false;
        }
        else {
            btn.innerText = "X";
            turn = true;
        }
        btn.disabled = true;
        if(count === 9){
            drawMsg();
        }
        winner();
    });
});

let disableBox = () => {
    btns.forEach((btn) => {
        btn.disabled = true;
    });
};

let enableBox = () => {
    btns.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
    });
};

let winnerMsg = (win) => {
        msg.innerText = `Congratulations, \n Winner is ${win}`;
        container.classList.remove("hide");
        gContainer.classList.add("hide");
        disableBox();
};

let drawMsg = () => {
        msg.innerText = `The Game Was A Draw !`;
        container.classList.remove("hide");
        gContainer.classList.add("hide");
        disableBox();
};

const winner = () => {
    for (let pattern of winPatterns) {
        // console.log(btns[pattern[0]].innerText, btns[pattern[1]].innerText, btns[pattern[2]].innerText);
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner");
                winnerMsg(pos1);
            }
        }
    };
};


let resetBtn = () => {
    turn = true;
    count = 0;
    enableBox();
    container.classList.add("hide");
    gContainer.classList.remove("hide");
}

newbtn.addEventListener("click",resetBtn);
resetbtn.addEventListener("click",resetBtn);
