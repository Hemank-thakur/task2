const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convert');


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

convertButton.addEventListener('click', () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }

    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
        celsiusInput.value = celsiusValue.toFixed(2);
    }
});
