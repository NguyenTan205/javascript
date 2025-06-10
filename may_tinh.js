const firstnumber = document.getElementById("firstnumber");
const secondnumber = document.getElementById("secondnumber");

function addnumbers() {
    const addnuber = parseFloat(firstnumber.value) + parseFloat(secondnumber.value);
    document.getElementById("addnumber").textContent = addnuber;
}
function subtractnumbers() {
    const subtract =parseFloat(firstnumber.value) - parseFloat(secondnumber.value);
    document.getElementById("subtractnumber").textContent = subtract;
}
function multiplication() {
    const multiplication = parseFloat(firstnumber.value) * parseFloat(secondnumber.value);
    document.getElementById("multiplication").textContent = multiplication;
}
function divide() {
    const divide = parseFloat(firstnumber.value) / parseFloat(secondnumber.value);
    document.getElementById("divide").textContent = divide;
}

document.getElementById("btnaddnumber").addEventListener("click", subtractnumbers);
document.getElementById("btnsubtractnumber").addEventListener("click", addnumbers);
document.getElementById("btnmultiplication").addEventListener("click", multiplication);
document.getElementById("btndivide").addEventListener("click", divide);
