/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */



function isPalindrome(word) {
    let parola = word
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
        return true
    } else {
        return false
    }
}

let palindrome = isPalindrome(prompt('inserisci parola'))

if (palindrome === true){
    console.log('la parola è palidroma');
} else {
    console.log('la parola non è palidroma');
}

