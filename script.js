let a = 8;
let b = 4;
console.log('------------- # 5.a');
console.log(a + b);
console.log('------------- # 5.b');
console.log(a - b);
console.log('------------- # 5.c');
console.log(a * b);
console.log('------------- # 5.d');
console.log(a / b);
console.log('------------- # 6');
for (i = 1; i <= 5; i++) {
	console.log(i)
};
console.log('------------- # 7')
for (k = 5; k >= 1; k--) {
	console.log(k)
};
console.log('------------- # 8')
function getMarkInfo(condition) {
	if (condition == 10) {
		console.log('У вас максимальный балл');
	} else {
		console.log('У вас средний балл');
	}
}
getMarkInfo(10)
getMarkInfo(1)

console.log('------------- # 9')
function getDayInfo(position) {
	switch (position) {
		case (0):
			console.log('Sunday');
			break;
		case (1):
			console.log('Monday');
			break;
		case (2):
			console.log('Tuesday');
			break;
		case (3):
			console.log('Wednesday');
			break;
		case (4):
			console.log('Thursday');
			break;
		case (5):
			console.log('Friday');
			break;
		case (6):
			console.log('Saturday');
			break;
		default:
			console.log('Wrong data');
	}
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
console.log('------------- # 10')
let newArray = ['a', 'b', 'c'];
newArray[3] = 1;
newArray[4] = 2;
newArray[5] = 3;
console.log(newArray)
console.log('------------- # 11')
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const thirdArray = firstArray.concat(secondArray)
console.log(thirdArray)
console.log('------------- # 12')
function countNumber(number) {
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		sum += i
	}
	return sum
}
console.log(countNumber(3))