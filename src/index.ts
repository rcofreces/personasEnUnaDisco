/* • Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(18,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total*/

let cantidadDisco: number[] = new Array(270);
let menorEdadPermitida: number = 18;
let mayorEdadPermitida: number = 40;
let menorDe21: number = 0;
let mayorDe21: number = 0;
let cantidadTotal: number = 0;

function aleatorio(menorValor: number, mayorValor: number): number {
  return Math.floor(Math.random() * (mayorValor + 1 - menorValor) + menorValor);
}

for (let i: number = 0; i < cantidadDisco.length; i++) {
  cantidadDisco[i] = aleatorio(menorEdadPermitida, mayorEdadPermitida);
}

console.log(cantidadDisco);

for (let i: number = 0; i < cantidadDisco.length; i++) {
  if (cantidadDisco[i] < 21) {
    menorDe21 += 1;
  } else {
    mayorDe21 += 1;
  }
}

cantidadTotal = menorDe21 + mayorDe21;

console.log(`En la disco hay ${cantidadTotal} personas`);
console.log(`En la disco hay ${menorDe21} personas menores de 21 años`);
console.log(`En la disco hay ${mayorDe21} personas con 21 hasta 40 años`);
