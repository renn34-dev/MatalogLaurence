function opposite() {
    const input = document.getElementById('input').value;
    const output = input.split('').reverse().join('');
    document.getElementById('output').innerHTML = output;
}

function SumInteger() {
    const input = document.getElementById('Sum-of-integers').value.split(',').map(Number);
    const output = input.reduce((one, two) => one + two, 0);
    document.getElementById('SumInt').innerHTML = `Sum: ${output}`;
}


function oddeven() {
    const input = document.getElementById('input-odd-even').value;

    if (input % 2 === 0) {
        document.getElementById("result").innerHTML = "Even";
    } else {
        document.getElementById("result").innerHTML = "Odd";
    }
}


function LargestNumber() {
    const input = document.getElementById('LargestInput').value.split(',').map(number => parseInt(number.trim()));
    const output = Math.max(...input);
    document.getElementById('LargestNum').innerHTML = `Largest Number: ${output}`;
}

function Multipleof3and5() {
    const input = parseInt(document.getElementById('replaceit').value);
    const outputElement = document.getElementById('change');

    if (isNaN(input) || input < 1 || input > 50) {
        outputElement.innerHTML = "Please enter a valid number between 1 and 50.";
        return;
    }

    const output = Array.from({ length: input }, (_, i) => {
        const num = i + 1;
        return num % 3 === 0 ? "marc" : 
               num % 5 === 0 ? "alds" : 
               num;
    });

    outputElement.innerHTML = output.join(', ');
}


// --------------------------------------------------- //

function showTab(tabId) {
    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    document.getElementById(tabId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    showTab('reverse');
});
