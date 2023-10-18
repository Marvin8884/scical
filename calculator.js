var input = '';

function addToInput(value) {
    input += value;
    document.getElementById('answer').value = input;
}

function clearInput() {
    input = '';
    document.getElementById('answer').value = '0';
}

function clearInput1() {
    input1 = '';
    document.getElementById1('answer').value = '0';
}

function calculate() {
    var result = eval(input);
    document.getElementById('answer').value = result;
    input = result.toString();
}

function scientificCalculator(value) {
    var input = document.getElementById("input").value;
    var result;
    if (value === 'sin') {
        result = Math.sin(input);
    } else if (value === 'cos') {
        result = Math.cos(input);
    } else if (value === 'tan') {
        result = Math.tan(input);
    } else if (value === 'log') {
        result = Math.log10(input);
    } else if (value === 'ln') {
        result = Math.log(input);
    } else if (value === 'sqrt') {
        result = Math.sqrt(input);
    } else if (value === 'pow') {
        var exponent = prompt("Enter exponent:");
        result = Math.pow(input, exponent);
    } else if (value === 'fact') {
        result = 1;
        for (var i = 1; i <= input; i++) {
            result *= i;
        }
    }
    document.getElementById("input").value = result;
}

