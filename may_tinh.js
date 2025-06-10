const firstnumber = document.getElementById("firstnumber");
const secondnumber = document.getElementById("secondnumber");

function addnumbers() {
    const addnumber = parseFloat(firstnumber.value) + parseFloat(secondnumber.value);
    document.getElementById("result").textContent = addnumber;
}
function subtractnumbers() {
    const subtract =parseFloat(firstnumber.value) - parseFloat(secondnumber.value);
    document.getElementById("result").textContent = subtract;
}
function multiplication() {
    const multiplication = parseFloat(firstnumber.value) * parseFloat(secondnumber.value);
    document.getElementById("result").textContent = multiplication;
}
function divide() {
    const divide = parseFloat(firstnumber.value) / parseFloat(secondnumber.value);
    document.getElementById("result").textContent = divide;
}

document.getElementById("btnaddnumber").addEventListener("click", addnumbers);
document.getElementById("btnsubtractnumber").addEventListener("click", subtractnumbers);
document.getElementById("btnmultiplication").addEventListener("click", multiplication);
document.getElementById("btndivide").addEventListener("click", divide);
