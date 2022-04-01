/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

let parola = prompt('inserisci una parola');

let parolaArray = []

for (let i = 0; i < parola.length; i++){
    parolaArray[i] = parola.substring(i,(i + 1))    
}
console.log(parolaArray);
let parolaArrayInverso = []
parolaArrayInverso = parolaArray.reverse()
let parolaInversa = ''
for (let i = 0; i < parolaArrayInverso.length; i++){
    parolaInversa += `${parolaArrayInverso[i]}`
}
console.log(parolaInversa);


if (parola === parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}


function isPalindrome() {
    
}
