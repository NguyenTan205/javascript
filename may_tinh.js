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

document.getElementById("btntru").addEventListener("click", subtractnumbers);
document.getElementById("btncong").addEventListener("click", addnumbers);
