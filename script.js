function convertCurrency(choice) {
    var conversionRate = 0;
    var currency = "";

    if (choice === 1) {
        conversionRate = 0.0029;
        currency = "dólares";
    } else if (choice === 2) {
        conversionRate = 0.0026;
        currency = "euros";
    } else if (choice === 3) {
        conversionRate = 0.014;
        currency = "reales";
    }

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    for (var pesos = 1; pesos <= 100; pesos++) {
        var convertedAmount = (pesos * conversionRate).toFixed(2);
        var conversionResult = pesos + " pesos argentinos equivalen a " + convertedAmount + " " + currency;
        
        var resultElement = document.createElement("p");
        resultElement.innerText = conversionResult;
        resultContainer.appendChild(resultElement);
    }

    var successMessage = "La conversión se realizó con éxito.";
    setTimeout(function() {
        alert(successMessage);
    }, 100);
}


