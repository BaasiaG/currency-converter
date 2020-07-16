{
    const calkculateResult = (amount, currency) => {
        const rateEUR = 4.4847;
        const rateNOK = 0.4183;
        const rateUSD = 3.9764;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "NOK":
                return amount / rateNOK;

            case "USD":
                return amount / rateUSD;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calkculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
