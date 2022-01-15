import './style.css';

const startNumberInput = document.querySelector('#start');
const endNumberInput = document.querySelector('#end');
const generateButton = document.querySelector('#generate-button');
const resultZone = document.querySelector('#result');
const worker = new Worker('worker.js');

generateButton.addEventListener('click', () => {
	const startNumber = parseInt(startNumberInput.value, 10);
	const endNumber = parseInt(endNumberInput.value, 10);
	console.time('calculate');
	// const primes = generatePrimeNumbers(startNumber, endNumber);
	worker.postMessage([startNumber, endNumber]);
	worker.onmessage = (e) => {
		resultZone.innerHTML = e.data.toString();
		console.timeEnd('calculate');
	};
});

function isPrime(n) {
	if (n < 2) return false;

	const q = Math.floor(Math.sqrt(n));

	for (var i = 2; i <= q; i++) {
		if (n % i == 0) {
			return false;
		}
	}

	return true;
}

function generatePrimeNumbers(startNumber, endNumber) {
	const primes = [];
	for (let i = startNumber; i <= endNumber; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}
	console.log(primes);
	return primes;
}
