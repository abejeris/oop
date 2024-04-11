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

class Color {
	constructor(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}
}

new Color(255, 100, 30);
