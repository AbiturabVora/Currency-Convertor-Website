function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const selectedCurrency = document.getElementById('currency').value;

    const rates = {
        USD: 0.013,
        JPY: 1.41,
        CNY: 0.083,
        PKR: 2.11,
        KRW: 15.07
    };

    const convertedAmount = (amount * rates[selectedCurrency]).toFixed(2);

    document.getElementById('result').innerHTML = `<p>${amount} INR is approximately ${convertedAmount} ${selectedCurrency}</p>`;
}

function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toLocaleString();
}

// Update date and time every second
updateDateTime();
setInterval(updateDateTime, 1000);
