const main = document.getElementById(`main`);
const jsonString = "[{\"imageURL\": \"https://picsum.photos/300/300\", \"titleStr\": \"Test Recept\", \"descriptionStr\": \"Just test recept\", \"targetURL\": \"\", \"raitingInt\": 8, \"timeInt\": 5}]";
let localStorage = JSON.parse(jsonString);

function addRecept(imageURL, titleStr, descriptionStr, targetURL, raitingInt, timeInt) { // function to add recepts to localStorage
	let recipeInfo = {
		imageURL: imageURL,
		titleStr: titleStr,
		descriptionStr: descriptionStr,
		targetURL: targetURL,
		raitingInt: raitingInt,
		timeInt: timeInt
	};
	localStorage.push(recipeInfo);
	console.log(localStorage);
}

function loadRecepts() {
	let innerHTML = "";
	localStorage.forEach(element => {
		innerHTML += `<section>
						   <img src="${element.imageURL}">
						   <h2 class="title">${element.titleStr}</h2>
						   <p class="description">${element.descriptionStr}</p>
						   <div> 
						   	   <a href="${element.targetURL}<button onclick="addRecept('https://picsum.photos/300/300', 'Test Recept', 'Just test recept', 8, 50);">Дивитись рецепт</button>
						   	   <span class="raiting"><i class="fa-regular fa-star"></i>${element.raitingInt}/10</span>
						   	   <span class="time"><i class="fa-regular fa-clock"></i>${element.timeInt}хв</span>
						   </div>
					   </section>`;}); // CHANGE ONCLICK PARAMETR IN BUUTON
	main.innerHTML = innerHTML;
}

setInterval(loadRecepts, 1000);

function displayJSONForRecept() {
	const imageURL = document.getElementById(`imageURL`).value;
	const tittleStr = document.getElementById(`tittleStr`).value;
	const descriptionStr = document.getElementById(`descriptionStr`).value;
	const targetURL = document.getElementById(`targetURL`).value;
	const raitingInt = document.getElementById(`raitingInt`).value;
	const timeInt = document.getElementById(`timeInt`).value;
	const displayReceptJSON = document.getElementById(`displayReceptJSON`);

	if (imageURL == "" || tittleStr == "" || descriptionStr == "" || targetURL == "" || raitingInt == "" || timeInt == "") return;

	let json = jsonString.slice(0, -1);
	json += `, {\"imageURL\": \"${imageURL}\", \"tittleStr\": \"${tittleStr}\", \"descriptionStr\": \"${descriptionStr}\", \"targetURL\": \"${targetURL}\", \"raitingInt\": \"${raitingInt}\", \"timeInt\": \"${timeInt}\"}]`;
	displayReceptJSON.innerHTML = json;
}