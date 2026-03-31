const main = document.getElementById(`main`);
let localStorage = [];

function addRecept(imageURL, titleStr, descriptionStr, raitingInt, timeInt) {
	localStorage.push([imageURL, titleStr, descriptionStr, raitingInt, timeInt]);
}