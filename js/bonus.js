// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const array = ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei']

console.log(cropArray(array, 1, 4));

function cropArray(array, a, b) {
    let newArray = [];
    let i = 0;

    for (let j = a; j < b; j++) {
        newArray[i] = array[j];
        i++;
    }

    return newArray;
}