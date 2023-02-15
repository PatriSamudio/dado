const rollDice = document.getElementById("roll-dice");
const buttonDice = document.getElementById("button-dice");
function lanzarDado() {
    const number = Math.floor(Math.random() * 6) + 1;
    rollDice.textContent = number;
}
buttonDice.addEventListener("click", lanzarDado);
