console.log("connecté !");

document.getElementById("titre").style.color = "green";

// const titre = document.getElementById("titre");
// console.log(titre);
// titre.style.color = "green";

let titre = document.getElementById("titre");
titre.style.color = "green";
// titre = 2;
console.log(titre);

let score = 0;
console.log(score);

console.log(score, "initialisation");
score = score + 1;
console.log(score, "après addition");

const cours = "Javascript";
console.log(cours, "cours");

const mot1 = "Hello";
const mot2 = "World !";
const phrase = mot1 + " " + mot2;
console.log(phrase, "phrase");

let calcul = "0";
calcul = calcul + 1;
console.log(calcul, "calcul");

const btnRed = document.querySelector("#btnRed");
// let compteur = 0;
console.log("bouton rouge: ", btnRed);
const btnBlue = document.querySelector("#btnBlue");
// let compteur = 0;
console.log("bouton bleu: ", btnBlue);

// btnRed.addEventListener("click", function () {
//   //   console.log("cliqué:", btnRed);
//   compteur = compteur + 1;
//   console.log("compteur de click red:", compteur);
// });

// btnBlue.addEventListener("click", function () {
//   //   console.log("cliqué:", btnBlue);
//   compteur = compteur + 1;
//   console.log("compteur de click blue:", compteur);
// });

let compteur = 0;

function addRed() {
  compteur = compteur - 1;
  console.log("compteur après incrémentation:", compteur);
  titre.innerText = compteur;
}

function addBlue() {
  compteur = compteur + 1;
  console.log("compteur après incrémentation:", compteur);
  titre.innerText = compteur;
}

setTimeout(function () {
  btnBlue.remove();
  btnRed.remove();
  console.log("la fin du chrono de 10s");
}, 10000);

btnRed.addEventListener("click", function () {
  //   console.log("cliqué:", btnRed);
  //   compteur = compteur + 1;
  //   console.log("compteur de click red:", compteur);
  addRed();
});
btnBlue.addEventListener("click", function () {
  //   console.log("cliqué:", btnBlue);
  //   compteur = compteur + 1;
  //   console.log("compteur de click blue:", compteur);
  addBlue();
});

const globale = "Ceci est une variable globale";

function scope() {
  const locale = "Ceci est une variable locale";
  console.log(locale, "depuis fonction");
  console.log(globale, "depuis fonction");
}
scope();

console.log(globale, "En dehors de la fonction");
// console.log(locale, "En dehors de la fonction");

const replay = document.querySelector("#replay");
console.log("cliqué rejouer :", replay);

replay.addEventListener("click", function () {
  location.reload();
});

const explication = document.querySelector("#explication");
console.log(explication);
explication.innerText =
  "Clique sur les cercles de couleurs et voit ce qu'il se passe";
