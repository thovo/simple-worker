onmessage = function (e) {
	console.log('Message received from main script');
	const [startNumber, endNumber] = e.data;
	const workerResult = generatePrimeNumbers(startNumber, endNumber);
	console.log('Posting message back to main script');
	console.log(workerResult);
	postMessage(workerResult);
};

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
