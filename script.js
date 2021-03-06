const unidades = [
  "zero",
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];
const dezUnidades = [
  "onze",
  "doze",
  "treze",
  "quatorze",
  "quinze",
  "dezesseis",
  "dezessete",
  "dezoito",
  "dezenove",
];
const dezenas = [
  "vinte",
  "trinta",
  "quarenta",
  "cinquenta",
  "sessenta",
  "setenta",
  "oitenta",
  "noventa",
];
const centenas = [
  "cem",
  "duzentos",
  "trezentos",
  "quatrocentos",
  "quinhentos",
  "seiscentos",
  "setecentos",
  "oitocentos",
  "novecentos",
];

const milhares = ["hum mil"];

function numbersToWords(number) {
  if (number.length === 1) {
    return unidades[parseInt(number[0])];
  } else if (number.length === 2) {
    if (
      number[0] == "1" &&
      (number[1] == "0" ||
        number[1] == "1" ||
        number[1] == "2" ||
        number[1] == "3" ||
        number[1] == "4" ||
        number[1] == "5" ||
        number[1] == "6" ||
        number[1] == "7" ||
        number[1] == "8" ||
        number[1] == "9")
    ) {
      return dezUnidades[parseInt(number[1] - 1)];
    } else if (
      (number[0] == "2" ||
        number[0] == "3" ||
        number[0] == "4" ||
        number[0] == "5" ||
        number[0] == "6" ||
        number[0] == "7" ||
        number[0] == "8" ||
        number[0] == "9") &&
      number[1] == "0"
    ) {
      return dezenas[parseInt(number[0] - 2)];
    } else {
      return (
        dezenas[parseInt(number[0] - 2)] + " e " + unidades[parseInt(number[1])]
      );
    }
  } else if (number.length === 3) {
    if (
      (number[0] == "1" ||
        number[0] == "2" ||
        number[0] == "3" ||
        number[0] == "4" ||
        number[0] == "5" ||
        number[0] == "6" ||
        number[0] == "7" ||
        number[0] == "8" ||
        number[0] == "9") &&
      number[1] == "0" &&
      number[2] == "0"
    ) {
      return centenas[parseInt(number[0] - 1)];
    } else if (
      (number[0] == "2" ||
        number[0] == "3" ||
        number[0] == "4" ||
        number[0] == "5" ||
        number[0] == "6" ||
        number[0] == "7" ||
        number[0] == "8" ||
        number[0] == "9") &&
      number[1] == "1" &&
      (number[2] == "1" ||
        number[2] == "2" ||
        number[2] == "3" ||
        number[2] == "4" ||
        number[2] == "5" ||
        number[2] == "6" ||
        number[2] == "7" ||
        number[2] == "8" ||
        number[2] == "9")
    ) {
      return (
        centenas[parseInt(number[0] - 1)] +
        " e " +
        dezUnidades[parseInt(number[2])]
      );
    } else if (
      (number[0] == "2" ||
        number[0] == "3" ||
        number[0] == "4" ||
        number[0] == "5" ||
        number[0] == "6" ||
        number[0] == "7" ||
        number[0] == "8" ||
        number[0] == "9") &&
      number[1] != "1"
    ) {
      return (
        centenas[parseInt(number[0] - 1)] +
        " e " +
        dezenas[parseInt(number[1] - 2)] +
        " e " +
        unidades[parseInt(number[2])]
      );
    } else if (
      number[0] == "1" &&
      number[1] == "1" &&
      (number[2] == "1" ||
        number[2] == "2" ||
        number[2] == "3" ||
        number[2] == "4" ||
        number[2] == "5" ||
        number[2] == "6" ||
        number[2] == "7" ||
        number[2] == "8" ||
        number[2] == "9")
    ) {
      return "Cento e " + dezUnidades[parseInt(number[2] - 1)];
    } else if (number[0] == "1" && number[1] != "1") {
      if (number[2] === "0") {
        return "Cento e " + dezenas[parseInt(number[1] - 2)];
      } else {
        return (
          "Cento e " +
          dezenas[parseInt(number[1] - 2)] +
          " e " +
          unidades[parseInt(number[2])]
        );
      }
    }
  } else if (number.length === 4) {
    if (
      number[0] == "1" &&
      number[1] == "0" &&
      number[2] == "0" &&
      number[3] == "0"
    ) {
      return milhares[parseInt(number[0] - 1)];
    }
  }
}

function showResults(number, results) {
  let newParag = document.createElement("p");
  newParag.innerHTML = `${number}: ${results}`;
  document.body.appendChild(newParag);
}
showResults(1, numbersToWords("1"));
showResults(15, numbersToWords("15"));
showResults(20, numbersToWords("20"));
showResults(56, numbersToWords("56"));
showResults(115, numbersToWords("115"));
showResults(120, numbersToWords("120"));
showResults(121, numbersToWords("121"));
showResults(200, numbersToWords("200"));
showResults(999, numbersToWords("999"));
showResults(1000, numbersToWords("1000"));

console.log(numbersToWords("1"));
console.log(numbersToWords("15"));
console.log(numbersToWords("20"));
console.log(numbersToWords("56"));
console.log(numbersToWords("115"));
console.log(numbersToWords("120"));
console.log(numbersToWords("121"));
console.log(numbersToWords("200"));
console.log(numbersToWords("999"));
console.log(numbersToWords("1000"));