function add(value) {
    document.getElementById("screen").value += value;
}

function calculate() {
    let expression = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(expression);
}

function clearScreen() {
    document.getElementById("screen").value = "";
}
