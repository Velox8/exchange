var requestURL = 'https://api.exchangerate.host/latest';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
	var response = request.response;
	console.log(response);
};
const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculateValue = () => { 	fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
    .then(res => res.json())
	.then(data => {
			// console.log(data);

			const exchangeRate = data.rates[currencyTwo.value];

			const calculate = amountOne.value * exchangeRate;
			const oneValue = (amountOne.value / amountOne.value) * exchangeRate;
			const currencyOneText = currencyOne.options[currencyOne.selectedIndex].textContent;
			const currencyTwoText = currencyTwo.options[currencyTwo.selectedIndex].textContent;

			rateInfo.textContent = `1 ${
				currencyOneText
			} = ${oneValue.toFixed(3)} ${currencyTwoText}`;
		amountTwo.value = calculate.toFixed(2);
		});
};
swapBtn.addEventListener('click', calculateValue);
