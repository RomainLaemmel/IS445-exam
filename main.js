var form = document.getElementById('mainForm');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
var result = document.getElementById('result');

function findAllEvenNumbers(nb1, nb2) {
    var evenNumbers = [];

    if (nb1 > nb2) {
        var tmp;
        tmp = nb1;
        nb1 = nb2;
        nb2 = tmp;
    }

    for (var i = nb1; i <= nb2; i = i + 1) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    return evenNumbers;
}

const handler = function (e) {

    e.preventDefault();
    var res = '';
    var nb1 = parseInt(input1.value, 10);
    var nb2 = parseInt(input2.value, 10);

    // Check is number 1 is valid
    if (isNaN(nb1)) {
        res = res + '<span class="error-line">Number 1 input ' + input1.value + ' is not a valid number</span>';
    } else {
        if (nb1 < 2 || nb1 > 100) {
            res = res + '<span class="error-line">Number 1 input ' + input1.value + ' is not in the range of 2 and 100</span>';
        }
    }

    // Check is number 2 is valid
    if (isNaN(nb2)) {
        res = res + '<span class="error-line">Number 2 input ' + input2.value + ' is not a valid number</span>';
    } else {
        if (nb2 < 2 || nb2 > 100) {
            res = res + '<span class="error-line">Number 2 input ' + input2.value + ' is not in the range of 2 and 100</span>';
        }
    }

    if (res === '') {
        var evenNumbers = findAllEvenNumbers(nb1, nb2);
        var res = '<span class="text-info result-line">There are ' + evenNumbers.length + ' even numbers:</span>';
        if (evenNumbers.length > 0) {
            res = res + '<span class="text-info result-line">' + evenNumbers + '</span>';
        }
    }

    result.innerHTML = res;
}

form.addEventListener('submit', handler);