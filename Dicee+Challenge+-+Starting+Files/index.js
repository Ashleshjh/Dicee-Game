diceImage1 = Math.floor((Math.random(6)*6)+1);
diceImage2 = Math.floor((Math.random(6)*6)+1);

randImage1 = "./images/dice"+diceImage1+".png";
randImage2 = "./images/dice"+diceImage2+".png";

document.querySelectorAll("img")[0].setAttribute("src", randImage1);
document.querySelectorAll("img")[1].setAttribute("src", randImage2);

if (diceImage1===diceImage2){
    document.querySelector("h1").textContent = "Draw";
}else if (diceImage1>diceImage2){
    document.querySelector("h1").textContent = "Player 1 won";
}else{
    document.querySelector("h1").textContent = "Player 2 won";
}