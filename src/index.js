let nameHero = "Foogles";
let xpHero = 1500;

let nivel = ""; // Variável para armazenar o nível do herói

if (xpHero < 1000) {
  nivel = "Ferro";
} else {
  while (xpHero >= 1000) {
    if (xpHero >= 1001 && xpHero <= 2000) {
      nivel = "Bronze";
    } else if (xpHero >= 2001 && xpHero <= 5000) {
      nivel = "Prata";
    } else if (xpHero >= 5001 && xpHero <= 7000) {
      nivel = "Ouro";
    } else if (xpHero >= 7001 && xpHero <= 8000) {
      nivel = "Platina";
    } else if (xpHero >= 8001 && xpHero <= 9000) {
      nivel = "Ascendente";
    } else if (xpHero >= 9001 && xpHero <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }
    break;
  }
}

console.log("O herói de nome " + nameHero + " está no nível " + nivel);
