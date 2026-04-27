const convertButton = document.querySelector(".convert-button"); // Seleciona o botão de conversão
const currencySelect = document.querySelector(".currency-select"); // Seleciona o elemento de seleção de moeda

function convertValues() {

    const inputCurrency = Number(document.querySelector(".input-currency").value); // Seleciona o valor de entrada e converte para número

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Seleciona os elementos onde os valores serão exibidos
    const currencyValueConverted = document.querySelector(".currency-value"); // Seleciona os elementos onde os valores serão exibidos

    const dolarToday = 4.98; // Valor do dólar hoje
    const euroToday = 5.87; // Valor do euro hoje
    const libraToday = 6.85; // Valor da libra hoje
    const bitcoinToday = 0.0000047; // Valor do bitcoin hoje

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

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday);
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / bitcoinToday);
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
        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra";
            currencyImg.src = "./assets/libra.png";
        }
        if (currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "Bitcoin";
            currencyImg.src = "./assets/bitcoin.png";
        }
convertValues();
}



currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);