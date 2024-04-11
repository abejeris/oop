// constructor functions

// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// }

// Color.prototype.rgb = function () {
// 	const { r, g, b } = this;
// 	return `rgb(${r},${g},${b})`;
// };

// =============================================================
// using Class constructor functions

// class Color {
// 	constructor(r, g, b) {
// 		this.r = r;
// 		this.g = g;
// 		this.b = b;
// 	}
// 	rgb() {
// 		const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// 	}
// }

// new Color(255, 100, 30);
// ===================================================================

// extends and super

class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		super(name, age);
		this.livesLeft = livesLeft;
	}
	eat() {
		return `${this.name} eats his food`;
	}
	info() {
		return `${this.name} is ${this.age} years old and it has ${this.livesLeft} lives left`;
	}
}
