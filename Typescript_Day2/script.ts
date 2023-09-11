// type combine : string | number
type Product = {
	name: string;
	vendor: string;
	quantity: number;
	inStock: number;
	price: number;
};

type SimplifiedProduct = {
	name: string;
	buyable: boolean;
	totalPrice?: number; //optional variable
};

function ProductToSimplifiedProduct(productInfo: Product): SimplifiedProduct {
	// const { name, vendor, quantity, inStock, price } = productInfo;
	// const simplifiedProduct: SimplifiedProduct = {
	// 	name,
	// 	buyable: inStock > 0,
	// };

	// if (simplifiedProduct.buyable) {
	// 	simplifiedProduct.totalPrice = quantity * price;
	// }

	const simplifiedProduct: SimplifiedProduct = {
		name: productInfo.name,
		buyable: productInfo.quantity > 0,
	};

	if (simplifiedProduct.buyable) {
		simplifiedProduct.totalPrice = productInfo.quantity * productInfo.price;
	}

	return simplifiedProduct;
}

function stringCombination(input: (string | number)[]): string {
	let result: string = '';
	for (const checkInput of input) {
		if (typeof checkInput === 'number') {
			result += checkInput.toString() + ' ';
		} else {
			result += checkInput + ' ';
		}
	}
	return result;
}

function sumOrCombination(input: (string | number)[]): string | number {
	let isNumber = input.every((checkArray) => typeof checkArray === 'number');
	let isString = input.every((checkArray) => typeof checkArray === 'string');

	// console.log(isString);
	// console.log(isNumber);

	if (input.length != 0) {
		if (isString) {
			return input.join(' ');
		} else if (isNumber) {
			let resultNumber: number = 0;
			input.forEach((valueNumber) => {
				if (typeof valueNumber === 'number') {
					resultNumber += valueNumber;
				}
			});
			return resultNumber;
		}
	}
	return 'Invalid Input';
}

// Function pertama
const inputFirstArrayCombination = stringCombination([1, 'data', '3', 'result']);
const inputSecondArrayCombination = stringCombination(['Bejo', 'has', '4', 'sport', 'car']);

console.log(inputFirstArrayCombination);
console.log(inputSecondArrayCombination);

// Function Kedua
console.log('================================');

const inputSumOrCombinationString = sumOrCombination(['the', 'dolphins', 'of', 'zettacamp']);
const inputSumOrCombinationNumber = sumOrCombination([1, 2, 3, 4]);
const inputSumOrCombinationInvalid = sumOrCombination([]);
console.log(inputSumOrCombinationString);
console.log(inputSumOrCombinationNumber);
console.log(inputSumOrCombinationInvalid);

// Function Ketiga
console.log('================================');

const productInfo1: Product = {
	name: 'Coca Cola',
	vendor: 'Coca Cola Company',
	quantity: 5,
	inStock: 100,
	price: 5000,
};

const simplifiedProduct1 = ProductToSimplifiedProduct(productInfo1);
console.log(simplifiedProduct1);

// const arr = ['the', 'dolphins', 'of', 'zettacamp']
// console.log(arr.join(' '));