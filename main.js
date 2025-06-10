// Document API
const amount = document.getElementById("amount");

function convertCurrency() {
    // debugger;
    const exchangeRateUSDtoVND = 26000;
    document.getElementById("result").innerHTML = amount.value * exchangeRateUSDtoVND + " VNĐ";
}

// Khai báo sự kiện (event)
document.getElementById("btnConvert").addEventListener("click", convertCurrency);