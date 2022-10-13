// Snack1
const btn = document.getElementById('print');
const print = function () {
    let inputValue = document.getElementById('my-number').value;

    if (inputValue % 2 == 0) {
        document.querySelector('section#section-one div.debug').innerHTML = inputValue;
    } else {
        inputValue++;
        document.querySelector('section#section-one div.debug').innerHTML = inputValue;
    }
    document.getElementById('my-number').value = '';
}
btn.addEventListener('click', print);

// Snack2
const arrayFirstname = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'];
const arraySecondName = ['c1', 'c2', 'c3', 'c4', 'c5'];

const btnList = document.getElementById('list');

const generate = function () {
    document.querySelector('ul').innerHTML = '';
    for (let i = 0; i < 7; i++) {
        let guestLi = document.createElement('li');
        let nameGuest = arrayFirstname[Math.floor(Math.random() * (arrayFirstname.length))] + ' ' + arraySecondName[Math.floor(Math.random() * (arraySecondName.length))];
        guestLi.append(nameGuest);
        document.querySelector('ul').append(guestLi)
    }
}
btnList.addEventListener('click', generate);

// Snack3
const viewCalc = document.getElementById('calc');

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberLenght = number.length;
document.getElementById('add-sum').innerHTML = '';
const view = function () {
    let add = 0;
    for (let i = 0; i < numberLenght; i++) {
        if (i % 2 != 0) {
            add += number[i];
        }
    }
    document.getElementById('add-sum').innerHTML = add;
}
viewCalc.addEventListener('click', view);

// Snack4 - Bonus
const valor = ['onore', 'rispetto', 'fedeltà', 'compassione']
const act = ['coraggio', 'intraprendenza', 'vigore']

if (valor.length > act.length) {
    const elementAdd = valor.length - act.length;
    console.log(elementAdd);
    for (let i = 0; i < elementAdd; i++) {
        act.push(i);
    };
    console.log(act);
} else if (act.length > valor.length) {
    const elementAdd = act.length - valor.length;
    console.log(elementAdd);
    for (let i = 0; i < elementAdd; i++) {
        valor.push(i);
    };
    console.log(valor);
} else {
    console.log('sono uguali');
}

// Snack4 - Bonus BIS
const alfa = ['a', 'b', 'c', 'd', 'e'];
const alfaz = ['w', 'y', 'x', 'k'];
