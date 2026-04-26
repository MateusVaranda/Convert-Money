const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {

    const inputCurrency = Number(document.querySelector(".input-currency").value);

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 4.98;
    const euroToday = 5.87;

    // Valor em real
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency);

    // Conversão
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday);
    }
}

function changeCurrency() {
        const currencyName = document.getElementById("currency-name");
        const currencyImg = document.querySelector(".currency-img");

        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar";
            currencyImg.src = "./assets/estados-unidos.png";
        }
        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro";
            currencyImg.src = "./assets/euro.png";
        }
convertValues();
}



currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);