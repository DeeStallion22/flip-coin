const button = document.querySelector("button");
const display = document.getElementById("display");
const headImg = document.getElementById('headsimg')
const headCount  = document.getElementById('headscounts');
const tailCount = document.getElementById('tailscounts');


let tailScore =  0;
let headScore = 0;
let coinResult  = ["heads", "tails"]

button.addEventListener("click", () =>{
    let result =  Math.floor(Math.random() * coinResult.length);
    result = coinResult[result];
    if (result === "heads"){
        headImg.src = "resources/heads.svg"
        display.textContent = "heads"
        headScore++;
        headCount.textContent = headScore;
    } else {
        headImg.src = "resources/tails.svg"
        display.textContent = "tails";
        tailScore++;
        tailCount.textContent = tailScore

    }

})