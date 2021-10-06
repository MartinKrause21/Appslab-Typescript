
function RPS (a:string, b:string) {
if (a == "scissors" && b == "paper" || a == "rock" && b=="scissors" || a=="paper" && b=="rock") {

console.log("Player 1 win");
}

else if (a == "rock" && b == "paper" || a == "scissors" && b=="rock" || a=="paper" && b=="scissors"){

console.log("Player 2 win");
}

else {
console.log("TIE");
}

} 

RPS ("rock", "paper");