// # Questão 01

// A mediana de uma lista de números é basicamente o elemento que se encontra no meio da lista após a ordenação. Dada uma lista de números com um número ímpar de elementos, desenvolva um algoritmo que encontre a mediana.

// Exemplo:

// Entrada:

// arr = [9, 2, 1, 4, 6]


// Saída:

// 4

function obiterMediana(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('o argumento deve ser um arr');
    }

    if (!numeros.every(e => typeof e === 'number')) {
        throw TypeError('Todos os elementos do arr deve ser numeros')
    }

    numeros = numeros.sort((x, y) => x -y);
    let medio = Math.floor(numeros.length / 2);

    return numeros.length % 2 == 1 ? numeros[medio] : (numeros[medio - 1] + numeros[medio + 2]) / 2;

}

try {
    console.log(obiterMediana([9, 2, 1, 4, 6]));

} catch (e) {
    console.log(`Error: ${e.message}`);

}

