var num1 = Math.random();
num1 = Math.floor(num1 * 6) + 1;

var num2 = Math.random();
num2 = Math.floor(num2 * 6) + 1;

document
	.querySelector('.img1')
	.setAttribute('src', 'images/dice' + String(num1) + '.png');

document
	.querySelector('.img2')
	.setAttribute('src', 'images/dice' + String(num2) + '.png');

if (num1 === num2) {
	document.querySelector('h1').innerHTML = '🚩Draw🚩';
} else if (num1 >= num2) {
	document.querySelector('h1').innerHTML = '🚩Player1 Wins';
} else {
	document.querySelector('h1').innerHTML = 'Player2 Wins🚩';
}
