const first = document.getElementById("first");
const second = document.getElementById("second");

function addnumbers() {
    const cong = parseFloat(first.value) + parseFloat(second.value);
    document.getElementById("cong").textContent = cong;
}
function subtractnumbers() {
    const tru =parseFloat(first.value) - parseFloat(second.value);
    document.getElementById("tru").textContent = tru;
}
function multiplication() {
    const nhan = parseFloat(first.value) * parseFloat(second.value);
    document.getElementById("nhan").textContent = nhan;
}
function divide() {
    const chia = parseFloat(first.value) / parseFloat(second.value);
    document.getElementById("chia").textContent = chia;
}

document.getElementById("btntru").addEventListener("click", subtractnumbers);
document.getElementById("btncong").addEventListener("click", addnumbers);
document.getElementById("btnnhan").addEventListener("click", multiplication);
document.getElementById("btnchia").addEventListener("click", divide);
