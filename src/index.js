// EJEMPLO CON DOM, DE MANZ

const rollDice = document.getElementById("roll-dice");
const buttonDice = document.getElementById("button-dice");

function lanzarDado() {
  const number = Math.floor(Math.random() * 6) + 1;
  rollDice.textContent = number;
}

buttonDice.addEventListener("click", lanzarDado);

// EJEMPLO CON CLASE, DE MOI

class Dice {
  constructor(nCaras) {
    this.caras = nCaras;
  }

  rollDice() {
    return Math.floor(Math.random() * this.caras) + 1;
  }
}

const dado1 = new Dice(6);
const dado2 = new Dice(12);

console.log(dado1.rollDice());
console.log(dado2.rollDice());
